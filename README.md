# supertonic3.github.io

Demo page for **Supertonic 3** — Supertone's 99M-parameter, on-device,
multilingual TTS model. Vanilla HTML/CSS/JS, no build step. Drop into
`gh-pages` and it works.

## File layout

```
.
├── index.html                  # everything renders from here
├── assets/
│   ├── css/styles.css
│   └── js/
│       ├── main.js             # rendering, filters, audio gate
│       └── samples.js          # data manifest (edit me when adding samples)
└── samples/
    ├── manifest.json           # canonical machine-readable index
    ├── README.md
    └── <category>/<gender>/<long_id>/
        ├── prompt.wav          # reference voice given to every system
        ├── text.txt            # input text (verbatim across systems)
        ├── meta.json
        ├── supertonic3.wav     # ours
        ├── chatterbox.wav      # baseline: Chatterbox Multilingual (500M, GPU)
        └── omnivoice.wav       # baseline: OmniVoice (800M, GPU)
```

## Adding a new sample

1. **Drop the folder** into `samples/<category>/<gender>/<long_id>/`, where
   `<long_id>` follows the existing pattern
   `<category>_<gender>_<promptLang>_<Speaker>_<Emotion>_<targetLang>` (see
   `samples/README.md`). Make sure all four wavs (`prompt.wav`,
   `supertonic3.wav`, `chatterbox.wav`, `omnivoice.wav`), `text.txt`, and
   `meta.json` are present.
2. **Regenerate** `samples/manifest.json` with the upstream corpus build
   script, or hand-edit it to append the new entry.
3. **Update** `assets/js/samples.js`:
   - Append one object to the `window.SAMPLES` array, copying the shape of
     any existing entry.
   - `id` is the relative path (e.g.
     `audiobook/female/audiobook_female_ko_Luna_Sad_ko`).
   - `text` must be **verbatim** — never edit typos or punctuation; it has
     to match the audio.
   - Every `audio.*` path follows
     `samples/<id>/<filename>.wav`.
4. **Refresh the page.** No build, no rebuild — `samples.js` is read by the
   browser directly.

## Adding a new comparison model

1. Generate `<your_model>.wav` for every sample using the same `prompt.wav`
   and `text.txt`.
2. Drop the wavs alongside `supertonic3.wav` in each sample folder.
3. Append one entry to `window.MODELS` in `assets/js/samples.js`:
   ```js
   { key: "your_model",
     label: "Your Model",
     sub: "baseline",
     chip: "??M · GPU",
     accent: false }
   ```
4. Append `your_model: "samples/<id>/your_model.wav"` to each sample's
   `audio` object, OR change `audio` to be computed from `id` if you
   want to skip the per-sample edit.

## Filling in placeholders

The build intentionally leaves a few `// FILL IN` markers:

- **31-language list** — `assets/js/samples.js` exports `LANGUAGES` with
  English / Japanese / Korean filled in. Drop the canonical 31-entry list
  in to remove the dashed placeholder chips.
- **CPU model in benchmark methodology** — search `index.html` for
  `FILL IN: exact CPU model` and replace the `(to be filled in)` text.

## Running locally

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

Audio elements have `preload="none"`, so the network only loads a wav when
the user hits play. Playing one player automatically pauses every other one
(single-player gate in `main.js`).

## Deploying to GitHub Pages

Repo name is already `supertonic3.github.io`, so Pages serves the root
straight to `https://supertonic3.github.io/`:

```bash
# 1) Commit everything (including the samples/ tree).
git add .
git commit -m "Publish demo"
git push origin main

# 2) In repo Settings → Pages, set:
#    - Source: "Deploy from a branch"
#    - Branch: main / (root)
```

That's it — no Actions workflow needed for this static site. First deploy
takes ~1 minute; subsequent updates propagate in seconds.

## Design choices (short)

- Palette follows the Supertonic product surfaces: black canvas `#050505`,
  lightning yellow `#F5E900`, and electric blue `#2F6BFF`.
- Pretendard for UI, JetBrains Mono for code and number chips. Hand-rolled CSS,
  no Tailwind, no chart library — the ×RT bar chart is inline SVG.
- The Listening Samples section follows the
  [RobustSpeechFlow](https://robustspeechflow.github.io/) layout: filter
  tabs at the top, per-sample cards with an index badge, a tinted
  blockquote of the input text, a reference-voice row, and N comparison
  rows of `system · chip · inline audio`.

## License

This page (HTML/CSS/JS) is part of the upstream
[supertone-inc/supertonic](https://github.com/supertone-inc/supertonic)
project's documentation and inherits its MIT license for code and
OpenRAIL-M for model weights. See the License section on the rendered
page for details.
