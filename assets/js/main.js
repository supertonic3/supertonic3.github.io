/*
 * main.js — page interactivity for the Supertonic 3 demo.
 *
 * Reads window.SAMPLES / window.MODELS / window.DOMAINS / window.LANGUAGES /
 * window.LANG_NAMES / window.DOMAIN_LABELS from samples.js and renders the
 * filterable sample grid, the language chip grid, the install-tab interactions,
 * the copy-to-clipboard buttons, and the single-player audio gate.
 *
 * No build step. Vanilla DOM. Runs at the bottom of the body — by the time
 * this executes, the static markup is parsed.
 */
(function () {
  "use strict";

  // ---------- helpers ----------
  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const escapeHtml = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  // Render text with <…> directives (e.g. <laugh>) as inline <code> chips.
  const renderTextWithDirectives = (text) => {
    const escaped = escapeHtml(text);
    return escaped.replace(/&lt;([a-zA-Z][a-zA-Z0-9_-]*)&gt;/g, '<code>&lt;$1&gt;</code>');
  };

  // Title-case a string (e.g. "call-center" → "Call-center").
  const titleCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  // Language chip text. Cross-lingual (prompt ≠ target) renders as "ko → en".
  const langChipText = (sample) => {
    const p = sample.prompt_lang;
    const t = sample.target_lang;
    return p === t ? t : `${p} → ${t}`;
  };

  // ---------- toast ----------
  const toastEl = $("#toast");
  let toastTimer = null;
  const showToast = (msg) => {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1400);
  };

  // ---------- copy-to-clipboard ----------
  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      return true;
    } catch (_) {
      return false;
    }
  };

  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy-text]");
    if (!btn) return;
    const text = btn.getAttribute("data-copy-text");
    const ok = await copyToClipboard(text);
    if (!ok) {
      showToast("Couldn't copy — try manually");
      return;
    }
    showToast("Copied!");
    // Visual flash for copy-buttons inside code blocks
    if (btn.classList.contains("copy-btn")) {
      const original = btn.innerHTML;
      btn.classList.add("copied");
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Copied`;
      setTimeout(() => {
        btn.classList.remove("copied");
        btn.innerHTML = original;
      }, 1400);
    }
  });

  // ---------- single-player audio gate ----------
  // When any <audio> begins to play, pause all the others. The `play` event
  // bubbles only on capture, so we listen in the capture phase.
  document.addEventListener(
    "play",
    (e) => {
      if (!(e.target instanceof HTMLAudioElement)) return;
      const current = e.target;
      $$("audio").forEach((a) => {
        if (a !== current && !a.paused) a.pause();
      });
    },
    true
  );

  // ---------- render: domain filter tabs ----------
  const renderDomainTabs = () => {
    const row = document.querySelector('[data-filter-group="domain"]');
    if (!row) return;
    const domains = window.DOMAINS || [];
    const labels = window.DOMAIN_LABELS || {};
    const frag = document.createDocumentFragment();
    domains.forEach((d) => {
      const btn = document.createElement("button");
      btn.className = "tab";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", "false");
      btn.setAttribute("data-value", d);
      btn.setAttribute("tabindex", "-1");
      btn.textContent = labels[d] || titleCase(d);
      frag.appendChild(btn);
    });
    row.appendChild(frag);
  };

  // ---------- render: language filter chips (only langs in actual samples) ----------
  const renderLangChips = () => {
    const row = document.querySelector('[data-filter-group="lang"]');
    if (!row) return;
    const langs = Array.from(new Set((window.SAMPLES || []).map((s) => s.target_lang))).sort();
    const names = window.LANG_NAMES || {};
    const frag = document.createDocumentFragment();
    langs.forEach((l) => {
      const btn = document.createElement("button");
      btn.className = "tab chip-tab";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", "false");
      btn.setAttribute("data-value", l);
      btn.setAttribute("tabindex", "-1");
      btn.textContent = names[l] || l.toUpperCase();
      frag.appendChild(btn);
    });
    row.appendChild(frag);
  };

  // ---------- filter state ----------
  const state = { domain: "all", lang: "all", gender: "all" };

  // ---------- render: sample cards ----------
  const renderSampleCard = (sample, index) => {
    const models = window.MODELS || [];
    const langLabel = langChipText(sample);
    const domainLabel = (window.DOMAIN_LABELS || {})[sample.domain] || titleCase(sample.domain);

    const num = String(index + 1).padStart(2, "0");

    const refRow = `
      <div class="audio-row reference">
        <div class="row-label">
          <span>Reference voice</span>
          <span class="sub">prompt</span>
        </div>
        <span class="chip info mono">${escapeHtml(sample.prompt_lang)} · ${escapeHtml(sample.speaker)}</span>
        <audio controls preload="none"
               src="${escapeHtml(sample.audio.prompt)}"
               aria-label="Reference prompt voice for sample ${num}, ${escapeHtml(sample.speaker)}"></audio>
      </div>`;

    const comparisonRows = models
      .map((m) => {
        const src = sample.audio[m.key];
        const rowClass = m.accent ? "audio-row ours" : "audio-row";
        return `
        <div class="${rowClass}">
          <div class="row-label">
            <span>${escapeHtml(m.label)}</span>
            <span class="sub">${escapeHtml(m.sub)}</span>
          </div>
          <span class="chip ${m.accent ? "accent" : "outline"} mono">${escapeHtml(m.chip)}</span>
          <audio controls preload="none"
                 src="${escapeHtml(src)}"
                 aria-label="${escapeHtml(m.label)} output for sample ${num}"></audio>
        </div>`;
      })
      .join("");

    const card = document.createElement("article");
    card.className = "sample";
    card.dataset.domain = sample.domain;
    card.dataset.lang = sample.target_lang;
    card.dataset.gender = sample.gender;
    card.innerHTML = `
      <div class="sample-head">
        <span class="sample-num">#${num}</span>
        <div class="sample-meta">
          <span class="chip">${escapeHtml(domainLabel)}</span>
          <span class="chip">${escapeHtml(titleCase(sample.gender))}</span>
          <span class="chip">${escapeHtml(sample.speaker)}</span>
          <span class="chip mono">${escapeHtml(langLabel)}</span>
          <span class="chip">${escapeHtml(sample.emotion)}</span>
        </div>
      </div>
      <blockquote class="sample-quote">
        <svg class="quote-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-7-2-7-7V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-7-2-7-7V7z"/>
        </svg>
        ${renderTextWithDirectives(sample.text)}
      </blockquote>
      ${refRow}
      <div class="comparisons">
        ${comparisonRows}
      </div>
    `;
    return card;
  };

  const renderSamples = () => {
    const grid = $("#samples-grid");
    const empty = $("#no-results");
    if (!grid) return;

    const filtered = (window.SAMPLES || []).filter((s) => {
      return (
        (state.domain === "all" || s.domain === state.domain) &&
        (state.lang   === "all" || s.target_lang === state.lang) &&
        (state.gender === "all" || s.gender === state.gender)
      );
    });

    grid.innerHTML = "";
    if (filtered.length === 0) {
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    const frag = document.createDocumentFragment();
    filtered.forEach((s, i) => frag.appendChild(renderSampleCard(s, i)));
    grid.appendChild(frag);
  };

  // ---------- filter tab wiring ----------
  const setupFilterGroup = (group) => {
    const row = document.querySelector(`[data-filter-group="${group}"]`);
    if (!row) return;
    const tabs = $$(".tab", row);

    const select = (value) => {
      state[group] = value;
      tabs.forEach((t) => {
        const selected = t.dataset.value === value;
        t.setAttribute("aria-selected", selected ? "true" : "false");
        t.setAttribute("tabindex", selected ? "0" : "-1");
      });
      renderSamples();
    };

    tabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => select(tab.dataset.value));
      tab.addEventListener("keydown", (e) => {
        // arrow-key roving tabindex within the row
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          const dir = e.key === "ArrowRight" ? 1 : -1;
          const next = (idx + dir + tabs.length) % tabs.length;
          tabs[next].focus();
        } else if (e.key === "Home") {
          e.preventDefault();
          tabs[0].focus();
        } else if (e.key === "End") {
          e.preventDefault();
          tabs[tabs.length - 1].focus();
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          select(tab.dataset.value);
        }
      });
    });
  };

  // ---------- render: 31-language grid ----------
  const renderLanguageGrid = () => {
    const grid = $("#lang-grid");
    if (!grid) return;
    const list = window.LANGUAGES || [];
    const TOTAL = 31;
    const frag = document.createDocumentFragment();
    list.forEach((name) => {
      const chip = document.createElement("div");
      chip.className = "lang";
      chip.textContent = name;
      frag.appendChild(chip);
    });
    // Fill the remaining slots with placeholders so the grid shape signals
    // there's a full 31-language list to drop in.
    const missing = Math.max(0, TOTAL - list.length);
    for (let i = 0; i < missing; i++) {
      const chip = document.createElement("div");
      chip.className = "lang placeholder";
      chip.textContent = `Language ${list.length + i + 1}`;
      frag.appendChild(chip);
    }
    grid.appendChild(frag);
  };

  // ---------- install tabs ----------
  const setupInstallTabs = () => {
    const tabs = $$(".install-tab");
    const panels = $$(".install-panel");
    if (tabs.length === 0) return;

    const select = (key) => {
      tabs.forEach((t) => {
        const sel = t.dataset.panel === key;
        t.setAttribute("aria-selected", sel ? "true" : "false");
        t.setAttribute("tabindex", sel ? "0" : "-1");
      });
      panels.forEach((p) => {
        const active = p.dataset.panel === key;
        p.classList.toggle("active", active);
        if (active) p.removeAttribute("hidden");
        else p.setAttribute("hidden", "");
      });
    };

    tabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => select(tab.dataset.panel));
      tab.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          const dir = e.key === "ArrowRight" ? 1 : -1;
          const next = (idx + dir + tabs.length) % tabs.length;
          tabs[next].focus();
          select(tabs[next].dataset.panel);
        }
      });
    });
  };

  // ---------- footer year ----------
  const setYear = () => {
    const y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  };

  // ---------- boot ----------
  document.addEventListener("DOMContentLoaded", () => {
    renderDomainTabs();
    renderLangChips();
    setupFilterGroup("domain");
    setupFilterGroup("lang");
    setupFilterGroup("gender");
    renderSamples();
    renderLanguageGrid();
    setupInstallTabs();
    setYear();
  });

  // If DOM already parsed (scripts at bottom), DOMContentLoaded may not fire.
  if (document.readyState !== "loading") {
    renderDomainTabs();
    renderLangChips();
    setupFilterGroup("domain");
    setupFilterGroup("lang");
    setupFilterGroup("gender");
    renderSamples();
    renderLanguageGrid();
    setupInstallTabs();
    setYear();
  }
})();
