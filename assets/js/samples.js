/*
 * samples.js — data manifest for the Supertonic 3 demo page.
 *
 * Generated from ./samples/manifest.json (which is itself produced by
 *   `python scripts/post/build_demo_samples.py` in the corpus repo).
 *
 * To regenerate from disk, run:
 *   ls -R ./samples
 * and verify every {category}/{gender}/{long_id}/ folder below has all four
 * audio files (prompt.wav, supertonic3.wav, chatterbox.wav, omnivoice.wav)
 * plus text.txt. To add a brand-new sample, append an entry following the
 * shape of the first object below.
 *
 * Do NOT edit fields like `text` to fix typos — they're the literal input
 * the model was given, and changing them desynchronises the displayed text
 * from the audio.
 */

window.MODELS = [
  {
    key: "supertonic3",
    label: "Supertonic 3",
    sub: "ours",
    chip: "99M · CPU",
    accent: true,
  },
  {
    key: "chatterbox",
    label: "Chatterbox Multilingual",
    sub: "baseline",
    chip: "500M · GPU",
    accent: false,
  },
  {
    key: "omnivoice",
    label: "OmniVoice",
    sub: "baseline",
    chip: "800M · GPU",
    accent: false,
  },
];

// Friendly display names for the language tags surfaced on each sample card
// and used in the language-filter chip row.
window.LANG_NAMES = {
  en: "English",
  ja: "Japanese",
  ko: "Korean",
};

// All 31 languages supported by Supertonic 3. The 3 in samples are filled in;
// the rest is a placeholder for the team to drop the canonical list into.
// // FILL IN: exact 31-language list (28 more entries below "Korean").
window.LANGUAGES = [
  "English",
  "Japanese",
  "Korean",
  // // FILL IN: remaining 28 of the 31 supported languages, e.g.:
  // "Mandarin Chinese", "Spanish", "French", "German", "Portuguese",
  // "Russian", "Italian", "Dutch", "Polish", "Turkish", "Arabic",
  // "Hindi", "Indonesian", "Vietnamese", "Thai", ...
];

// Domain order for filter tabs (matches the order felt natural in the corpus
// README — broadcast-style content first, conversational last).
window.DOMAINS = [
  "audiobook",
  "news",
  "call-center",
  "conversation",
  "game",
];

// Display labels for domain tabs.
window.DOMAIN_LABELS = {
  audiobook: "Audiobook",
  news: "News",
  "call-center": "Call-center",
  conversation: "Conversation",
  game: "Game",
};

/*
 * One entry per sample folder under ./samples/.
 *
 * Fields:
 *   id          — relative path under ./samples/ (also the folder name).
 *   domain      — one of DOMAINS above. Drives the filter tab bar.
 *   gender      — "female" | "male". Drives the gender chip filter.
 *   speaker     — display name of the reference voice (free-form).
 *   emotion     — emotion tag on the prompt (free-form, used in chip).
 *   prompt_lang — ISO code of the reference voice's source utterance.
 *   target_lang — ISO code of the synthesized text. May differ → cross-lingual.
 *   text        — exact input text given to every model. Verbatim.
 *   audio       — { prompt, supertonic3, chatterbox, omnivoice } file paths.
 *
 * The text is shown verbatim in the blockquote on each card; <tag> sequences
 * like <laugh> are intentional model directives and rendered as inline code.
 */
window.SAMPLES = [
  {
    id: "game/female/game_female_ko_Coco_Embarrassed_ko",
    domain: "game",
    gender: "female",
    speaker: "Coco",
    emotion: "Embarrassed",
    prompt_lang: "ko",
    target_lang: "ko",
    text: "안녕하세요 주인님! 저는 코코라고 해요. 앞으로 잘 부탁드려요~ ㅎㅎ<laugh>",
    audio: {
      prompt:      "samples/game/female/game_female_ko_Coco_Embarrassed_ko/prompt.wav",
      supertonic3: "samples/game/female/game_female_ko_Coco_Embarrassed_ko/supertonic3.wav",
      chatterbox:  "samples/game/female/game_female_ko_Coco_Embarrassed_ko/chatterbox.wav",
      omnivoice:   "samples/game/female/game_female_ko_Coco_Embarrassed_ko/omnivoice.wav",
    },
  },
  {
    id: "game/female/game_female_ja_Moka_Curious_ja",
    domain: "game",
    gender: "female",
    speaker: "Moka",
    emotion: "Curious",
    prompt_lang: "ja",
    target_lang: "ja",
    text: "ふふっ、退屈してたところなの。ちょうどいい遊び相手、見つけたかも♪",
    audio: {
      prompt:      "samples/game/female/game_female_ja_Moka_Curious_ja/prompt.wav",
      supertonic3: "samples/game/female/game_female_ja_Moka_Curious_ja/supertonic3.wav",
      chatterbox:  "samples/game/female/game_female_ja_Moka_Curious_ja/chatterbox.wav",
      omnivoice:   "samples/game/female/game_female_ja_Moka_Curious_ja/omnivoice.wav",
    },
  },
  {
    id: "game/female/game_female_ko_Shade_Neutral_en",
    domain: "game",
    gender: "female",
    speaker: "Shade",
    emotion: "Neutral",
    prompt_lang: "ko",
    target_lang: "en",
    text: "Hey! How’s your day going? You look like you’ve got something fun to tell me.",
    audio: {
      prompt:      "samples/game/female/game_female_ko_Shade_Neutral_en/prompt.wav",
      supertonic3: "samples/game/female/game_female_ko_Shade_Neutral_en/supertonic3.wav",
      chatterbox:  "samples/game/female/game_female_ko_Shade_Neutral_en/chatterbox.wav",
      omnivoice:   "samples/game/female/game_female_ko_Shade_Neutral_en/omnivoice.wav",
    },
  },
  {
    id: "game/male/game_male_ko_Alphonse_Neutral_ko",
    domain: "game",
    gender: "male",
    speaker: "Alphonse",
    emotion: "Neutral",
    prompt_lang: "ko",
    target_lang: "ko",
    text: "혼자 떠나기엔 길이 험하구나. 이 낡은 검을 가져가거라. 언젠가 어둠이 네 이름을 부르더라도, 부디 빛을 잊지 말거라.",
    audio: {
      prompt:      "samples/game/male/game_male_ko_Alphonse_Neutral_ko/prompt.wav",
      supertonic3: "samples/game/male/game_male_ko_Alphonse_Neutral_ko/supertonic3.wav",
      chatterbox:  "samples/game/male/game_male_ko_Alphonse_Neutral_ko/chatterbox.wav",
      omnivoice:   "samples/game/male/game_male_ko_Alphonse_Neutral_ko/omnivoice.wav",
    },
  },
  {
    id: "game/male/game_male_ja_Taiki_Sad_ja",
    domain: "game",
    gender: "male",
    speaker: "Taiki",
    emotion: "Sad",
    prompt_lang: "ja",
    target_lang: "ja",
    text: "こんな結末、望んでなかった……俺だって、守りたかったんだよ！",
    audio: {
      prompt:      "samples/game/male/game_male_ja_Taiki_Sad_ja/prompt.wav",
      supertonic3: "samples/game/male/game_male_ja_Taiki_Sad_ja/supertonic3.wav",
      chatterbox:  "samples/game/male/game_male_ja_Taiki_Sad_ja/chatterbox.wav",
      omnivoice:   "samples/game/male/game_male_ja_Taiki_Sad_ja/omnivoice.wav",
    },
  },
  {
    id: "game/male/game_male_ko_Wayne_Neutral_en",
    domain: "game",
    gender: "male",
    speaker: "Wayne",
    emotion: "Neutral",
    prompt_lang: "ko",
    target_lang: "en",
    text: "have crossed fire, blood, and ruin. If fate still demands a price, then let it come for me.",
    audio: {
      prompt:      "samples/game/male/game_male_ko_Wayne_Neutral_en/prompt.wav",
      supertonic3: "samples/game/male/game_male_ko_Wayne_Neutral_en/supertonic3.wav",
      chatterbox:  "samples/game/male/game_male_ko_Wayne_Neutral_en/chatterbox.wav",
      omnivoice:   "samples/game/male/game_male_ko_Wayne_Neutral_en/omnivoice.wav",
    },
  },
  {
    id: "call-center/female/call-center_female_ko_Angelina_Serene_ko",
    domain: "call-center",
    gender: "female",
    speaker: "Angelina",
    emotion: "Serene",
    prompt_lang: "ko",
    target_lang: "ko",
    text: "안녕하세요, 고객님. 문의 주셔서 감사합니다. 정확한 안내를 위해 내용 먼저 확인해보겠습니다.",
    audio: {
      prompt:      "samples/call-center/female/call-center_female_ko_Angelina_Serene_ko/prompt.wav",
      supertonic3: "samples/call-center/female/call-center_female_ko_Angelina_Serene_ko/supertonic3.wav",
      chatterbox:  "samples/call-center/female/call-center_female_ko_Angelina_Serene_ko/chatterbox.wav",
      omnivoice:   "samples/call-center/female/call-center_female_ko_Angelina_Serene_ko/omnivoice.wav",
    },
  },
  {
    id: "call-center/female/call-center_female_ko_Angelina_Serene_ja",
    domain: "call-center",
    gender: "female",
    speaker: "Angelina",
    emotion: "Serene",
    prompt_lang: "ko",
    target_lang: "ja",
    text: "お電話ありがとうございます。スーパートーン・カスタマーサポートでございます。本日はどのようなご用件でしょうか？",
    audio: {
      prompt:      "samples/call-center/female/call-center_female_ko_Angelina_Serene_ja/prompt.wav",
      supertonic3: "samples/call-center/female/call-center_female_ko_Angelina_Serene_ja/supertonic3.wav",
      chatterbox:  "samples/call-center/female/call-center_female_ko_Angelina_Serene_ja/chatterbox.wav",
      omnivoice:   "samples/call-center/female/call-center_female_ko_Angelina_Serene_ja/omnivoice.wav",
    },
  },
  {
    id: "call-center/female/call-center_female_en_Nora_Neutral_en",
    domain: "call-center",
    gender: "female",
    speaker: "Nora",
    emotion: "Neutral",
    prompt_lang: "en",
    target_lang: "en",
    text: "Good morning, thank you for calling. How can I help you today?",
    audio: {
      prompt:      "samples/call-center/female/call-center_female_en_Nora_Neutral_en/prompt.wav",
      supertonic3: "samples/call-center/female/call-center_female_en_Nora_Neutral_en/supertonic3.wav",
      chatterbox:  "samples/call-center/female/call-center_female_en_Nora_Neutral_en/chatterbox.wav",
      omnivoice:   "samples/call-center/female/call-center_female_en_Nora_Neutral_en/omnivoice.wav",
    },
  },
  {
    id: "call-center/male/call-center_male_ko_Woojin_Neutral_ko",
    domain: "call-center",
    gender: "male",
    speaker: "Woojin",
    emotion: "Neutral",
    prompt_lang: "ko",
    target_lang: "ko",
    text: "안녕하세요, 수퍼톤 고객센터입니다. 궁금하신 부분이나 필요하신 부분 편하게 말씀해 주시면, 제가 빠르게 확인하고, 끝까지 친절하게 도와드리겠습니다.",
    audio: {
      prompt:      "samples/call-center/male/call-center_male_ko_Woojin_Neutral_ko/prompt.wav",
      supertonic3: "samples/call-center/male/call-center_male_ko_Woojin_Neutral_ko/supertonic3.wav",
      chatterbox:  "samples/call-center/male/call-center_male_ko_Woojin_Neutral_ko/chatterbox.wav",
      omnivoice:   "samples/call-center/male/call-center_male_ko_Woojin_Neutral_ko/omnivoice.wav",
    },
  },
  {
    id: "call-center/male/call-center_male_ja_Kazuki_Relieved_ja",
    domain: "call-center",
    gender: "male",
    speaker: "Kazuki",
    emotion: "Relieved",
    prompt_lang: "ja",
    target_lang: "ja",
    text: "こんにちは。スーパートーン・カスタマーサポートです。お問い合わせありがとうございます。すぐに確認いたしますので、まずは内容をお聞かせください。",
    audio: {
      prompt:      "samples/call-center/male/call-center_male_ja_Kazuki_Relieved_ja/prompt.wav",
      supertonic3: "samples/call-center/male/call-center_male_ja_Kazuki_Relieved_ja/supertonic3.wav",
      chatterbox:  "samples/call-center/male/call-center_male_ja_Kazuki_Relieved_ja/chatterbox.wav",
      omnivoice:   "samples/call-center/male/call-center_male_ja_Kazuki_Relieved_ja/omnivoice.wav",
    },
  },
  {
    id: "call-center/male/call-center_male_ko_Woojin_Neutral_en",
    domain: "call-center",
    gender: "male",
    speaker: "Woojin",
    emotion: "Neutral",
    prompt_lang: "ko",
    target_lang: "en",
    text: "Thank you for calling Supertone Customer Support. This is Woojin speaking. How can I help you today?",
    audio: {
      prompt:      "samples/call-center/male/call-center_male_ko_Woojin_Neutral_en/prompt.wav",
      supertonic3: "samples/call-center/male/call-center_male_ko_Woojin_Neutral_en/supertonic3.wav",
      chatterbox:  "samples/call-center/male/call-center_male_ko_Woojin_Neutral_en/chatterbox.wav",
      omnivoice:   "samples/call-center/male/call-center_male_ko_Woojin_Neutral_en/omnivoice.wav",
    },
  },
  {
    id: "conversation/female/conversation_female_ko_Steelyn_Sad_ko",
    domain: "conversation",
    gender: "female",
    speaker: "Steelyn",
    emotion: "Sad",
    prompt_lang: "ko",
    target_lang: "ko",
    text: "내가 왜 그랬지... 내가 정말 미안해... 진짜 일부로 그런건 아니야...!",
    audio: {
      prompt:      "samples/conversation/female/conversation_female_ko_Steelyn_Sad_ko/prompt.wav",
      supertonic3: "samples/conversation/female/conversation_female_ko_Steelyn_Sad_ko/supertonic3.wav",
      chatterbox:  "samples/conversation/female/conversation_female_ko_Steelyn_Sad_ko/chatterbox.wav",
      omnivoice:   "samples/conversation/female/conversation_female_ko_Steelyn_Sad_ko/omnivoice.wav",
    },
  },
  {
    id: "conversation/female/conversation_female_ja_Hara_Neutral_ja",
    domain: "conversation",
    gender: "female",
    speaker: "Hara",
    emotion: "Neutral",
    prompt_lang: "ja",
    target_lang: "ja",
    text: "今回は、スーパートーンから公開されたオンデバイスTTSモデル、スーパートニック3を実際に使ってみました。まず驚いたのは、これほど軽量なモデルでありながら、想像以上に自然で聞き取りやすい音声が生成できたことです。",
    audio: {
      prompt:      "samples/conversation/female/conversation_female_ja_Hara_Neutral_ja/prompt.wav",
      supertonic3: "samples/conversation/female/conversation_female_ja_Hara_Neutral_ja/supertonic3.wav",
      chatterbox:  "samples/conversation/female/conversation_female_ja_Hara_Neutral_ja/chatterbox.wav",
      omnivoice:   "samples/conversation/female/conversation_female_ja_Hara_Neutral_ja/omnivoice.wav",
    },
  },
  {
    id: "conversation/female/conversation_female_ko_Lina_Neutral_en",
    domain: "conversation",
    gender: "female",
    speaker: "Lina",
    emotion: "Neutral",
    prompt_lang: "ko",
    target_lang: "en",
    text: "Hey! How’s your day going? You look like you’ve got something fun to tell me.",
    audio: {
      prompt:      "samples/conversation/female/conversation_female_ko_Lina_Neutral_en/prompt.wav",
      supertonic3: "samples/conversation/female/conversation_female_ko_Lina_Neutral_en/supertonic3.wav",
      chatterbox:  "samples/conversation/female/conversation_female_ko_Lina_Neutral_en/chatterbox.wav",
      omnivoice:   "samples/conversation/female/conversation_female_ko_Lina_Neutral_en/omnivoice.wav",
    },
  },
  {
    id: "conversation/male/conversation_male_ko_Jinha_Worry_ko",
    domain: "conversation",
    gender: "male",
    speaker: "Jinha",
    emotion: "Worry",
    prompt_lang: "ko",
    target_lang: "ko",
    text: "답장이 늦어서 미안해. 알림은 봤는데, 뭐라고 말해야 할지 좀 고민했어.",
    audio: {
      prompt:      "samples/conversation/male/conversation_male_ko_Jinha_Worry_ko/prompt.wav",
      supertonic3: "samples/conversation/male/conversation_male_ko_Jinha_Worry_ko/supertonic3.wav",
      chatterbox:  "samples/conversation/male/conversation_male_ko_Jinha_Worry_ko/chatterbox.wav",
      omnivoice:   "samples/conversation/male/conversation_male_ko_Jinha_Worry_ko/omnivoice.wav",
    },
  },
  {
    id: "conversation/male/conversation_male_ja_Kazuki_Neutral_ja",
    domain: "conversation",
    gender: "male",
    speaker: "Kazuki",
    emotion: "Neutral",
    prompt_lang: "ja",
    target_lang: "ja",
    text: "週末は人が多いところより、静かな場所に行くのもいいかもね。",
    audio: {
      prompt:      "samples/conversation/male/conversation_male_ja_Kazuki_Neutral_ja/prompt.wav",
      supertonic3: "samples/conversation/male/conversation_male_ja_Kazuki_Neutral_ja/supertonic3.wav",
      chatterbox:  "samples/conversation/male/conversation_male_ja_Kazuki_Neutral_ja/chatterbox.wav",
      omnivoice:   "samples/conversation/male/conversation_male_ja_Kazuki_Neutral_ja/omnivoice.wav",
    },
  },
  {
    id: "conversation/male/conversation_male_ja_Taiki_Sad_en",
    domain: "conversation",
    gender: "male",
    speaker: "Taiki",
    emotion: "Sad",
    prompt_lang: "ja",
    target_lang: "en",
    text: "I just want to take a quiet walk today. You don’t have to say anything. Just being here is enough.",
    audio: {
      prompt:      "samples/conversation/male/conversation_male_ja_Taiki_Sad_en/prompt.wav",
      supertonic3: "samples/conversation/male/conversation_male_ja_Taiki_Sad_en/supertonic3.wav",
      chatterbox:  "samples/conversation/male/conversation_male_ja_Taiki_Sad_en/chatterbox.wav",
      omnivoice:   "samples/conversation/male/conversation_male_ja_Taiki_Sad_en/omnivoice.wav",
    },
  },
  {
    id: "audiobook/female/audiobook_female_ko_Luna_Sad_ko",
    domain: "audiobook",
    gender: "female",
    speaker: "Luna",
    emotion: "Sad",
    prompt_lang: "ko",
    target_lang: "ko",
    text: "호랑이가 담배 피우던 먼 옛날, 별빛이 길을 알려주던 어느 밤에, 누군가의 운명을 바꿀 작은 문 하나가 조용히 열렸습니다.",
    audio: {
      prompt:      "samples/audiobook/female/audiobook_female_ko_Luna_Sad_ko/prompt.wav",
      supertonic3: "samples/audiobook/female/audiobook_female_ko_Luna_Sad_ko/supertonic3.wav",
      chatterbox:  "samples/audiobook/female/audiobook_female_ko_Luna_Sad_ko/chatterbox.wav",
      omnivoice:   "samples/audiobook/female/audiobook_female_ko_Luna_Sad_ko/omnivoice.wav",
    },
  },
  {
    id: "audiobook/female/audiobook_female_ko_Bomi_Neutral_ja",
    domain: "audiobook",
    gender: "female",
    speaker: "Bomi",
    emotion: "Neutral",
    prompt_lang: "ko",
    target_lang: "ja",
    text: "むかしむかし、月明かりが森の奥深くまでやさしく満ちていた夜のこと。誰にも思い出されることのない小さな村で、ひとつの物語が、静かに幕を開けました。",
    audio: {
      prompt:      "samples/audiobook/female/audiobook_female_ko_Bomi_Neutral_ja/prompt.wav",
      supertonic3: "samples/audiobook/female/audiobook_female_ko_Bomi_Neutral_ja/supertonic3.wav",
      chatterbox:  "samples/audiobook/female/audiobook_female_ko_Bomi_Neutral_ja/chatterbox.wav",
      omnivoice:   "samples/audiobook/female/audiobook_female_ko_Bomi_Neutral_ja/omnivoice.wav",
    },
  },
  {
    id: "audiobook/female/audiobook_female_ko_Luna_Sad_en",
    domain: "audiobook",
    gender: "female",
    speaker: "Luna",
    emotion: "Sad",
    prompt_lang: "ko",
    target_lang: "en",
    text: "I was not afraid of silence. I had lived with it long enough to know that, sometimes, it speaks more honestly than people do.",
    audio: {
      prompt:      "samples/audiobook/female/audiobook_female_ko_Luna_Sad_en/prompt.wav",
      supertonic3: "samples/audiobook/female/audiobook_female_ko_Luna_Sad_en/supertonic3.wav",
      chatterbox:  "samples/audiobook/female/audiobook_female_ko_Luna_Sad_en/chatterbox.wav",
      omnivoice:   "samples/audiobook/female/audiobook_female_ko_Luna_Sad_en/omnivoice.wav",
    },
  },
  {
    id: "audiobook/male/audiobook_male_ko_Keld_Neutral_ko",
    domain: "audiobook",
    gender: "male",
    speaker: "Keld",
    emotion: "Neutral",
    prompt_lang: "ko",
    target_lang: "ko",
    text: "소년은 검을 뽑지 않았다. 대신 한 걸음 물러서서, 자신이 정말 지켜야 할 것이 무엇인지 처음으로 생각했다.",
    audio: {
      prompt:      "samples/audiobook/male/audiobook_male_ko_Keld_Neutral_ko/prompt.wav",
      supertonic3: "samples/audiobook/male/audiobook_male_ko_Keld_Neutral_ko/supertonic3.wav",
      chatterbox:  "samples/audiobook/male/audiobook_male_ko_Keld_Neutral_ko/chatterbox.wav",
      omnivoice:   "samples/audiobook/male/audiobook_male_ko_Keld_Neutral_ko/omnivoice.wav",
    },
  },
  {
    id: "audiobook/male/audiobook_male_ko_Watson_Neutral_ja",
    domain: "audiobook",
    gender: "male",
    speaker: "Watson",
    emotion: "Neutral",
    prompt_lang: "ko",
    target_lang: "ja",
    text: "その朝、ロンドンの霧はいつになく低く垂れこめていた。私はただの訪問者だと思っていたが、ホームズの目はすでに別の結論にたどり着いていた。",
    audio: {
      prompt:      "samples/audiobook/male/audiobook_male_ko_Watson_Neutral_ja/prompt.wav",
      supertonic3: "samples/audiobook/male/audiobook_male_ko_Watson_Neutral_ja/supertonic3.wav",
      chatterbox:  "samples/audiobook/male/audiobook_male_ko_Watson_Neutral_ja/chatterbox.wav",
      omnivoice:   "samples/audiobook/male/audiobook_male_ko_Watson_Neutral_ja/omnivoice.wav",
    },
  },
  {
    id: "audiobook/male/audiobook_male_ja_Isamu_Unfriendly_en",
    domain: "audiobook",
    gender: "male",
    speaker: "Isamu",
    emotion: "Unfriendly",
    prompt_lang: "ja",
    target_lang: "en",
    text: "The night offered no mercy. But then, he had never expected mercy from the night.",
    audio: {
      prompt:      "samples/audiobook/male/audiobook_male_ja_Isamu_Unfriendly_en/prompt.wav",
      supertonic3: "samples/audiobook/male/audiobook_male_ja_Isamu_Unfriendly_en/supertonic3.wav",
      chatterbox:  "samples/audiobook/male/audiobook_male_ja_Isamu_Unfriendly_en/chatterbox.wav",
      omnivoice:   "samples/audiobook/male/audiobook_male_ja_Isamu_Unfriendly_en/omnivoice.wav",
    },
  },
  {
    id: "news/female/news_female_ko_Bella_Kind_ko",
    domain: "news",
    gender: "female",
    speaker: "Bella",
    emotion: "Kind",
    prompt_lang: "ko",
    target_lang: "ko",
    text: "여러분, 큰일났습니다! 이제 TTS 돌리려고 비싼 GPU 사용할 필요가 없어졌습니다. 수퍼토닉 쓰리, 이거 핸드폰에서도 돌아가는데... 심지어 서른한개 언어까지 지원합니다. 이건 모르셨으면 완전 손해보시는거에요.",
    audio: {
      prompt:      "samples/news/female/news_female_ko_Bella_Kind_ko/prompt.wav",
      supertonic3: "samples/news/female/news_female_ko_Bella_Kind_ko/supertonic3.wav",
      chatterbox:  "samples/news/female/news_female_ko_Bella_Kind_ko/chatterbox.wav",
      omnivoice:   "samples/news/female/news_female_ko_Bella_Kind_ko/omnivoice.wav",
    },
  },
  {
    id: "news/female/news_female_ja_Jin_Neutral_ja",
    domain: "news",
    gender: "female",
    speaker: "Jin",
    emotion: "Neutral",
    prompt_lang: "ja",
    target_lang: "ja",
    text: "皆さん、ニュースです。スーパートーンのオンデバイスTTSモデルスーパートニック3が公開されました。今回のアップデートでは、対応言語が31言語に拡大し、読み上げの安定性もさらに向上しています。",
    audio: {
      prompt:      "samples/news/female/news_female_ja_Jin_Neutral_ja/prompt.wav",
      supertonic3: "samples/news/female/news_female_ja_Jin_Neutral_ja/supertonic3.wav",
      chatterbox:  "samples/news/female/news_female_ja_Jin_Neutral_ja/chatterbox.wav",
      omnivoice:   "samples/news/female/news_female_ja_Jin_Neutral_ja/omnivoice.wav",
    },
  },
  {
    id: "news/female/news_female_ja_Jin_Neutral_en",
    domain: "news",
    gender: "female",
    speaker: "Jin",
    emotion: "Neutral",
    prompt_lang: "ja",
    target_lang: "en",
    text: "Everyone, this is huge! You no longer need an expensive GPU just to run TTS. Supertonic 3 can even run on your phone and it supports thirty-one languages. If you didn’t know about this yet, you’re seriously missing out.",
    audio: {
      prompt:      "samples/news/female/news_female_ja_Jin_Neutral_en/prompt.wav",
      supertonic3: "samples/news/female/news_female_ja_Jin_Neutral_en/supertonic3.wav",
      chatterbox:  "samples/news/female/news_female_ja_Jin_Neutral_en/chatterbox.wav",
      omnivoice:   "samples/news/female/news_female_ja_Jin_Neutral_en/omnivoice.wav",
    },
  },
  {
    id: "news/male/news_male_ko_Jiny_Neutral_ko",
    domain: "news",
    gender: "male",
    speaker: "Jiny",
    emotion: "Neutral",
    prompt_lang: "ko",
    target_lang: "ko",
    text: "오늘 전해드릴 소식은 수퍼톤의 수퍼토닉 쓰리입니다. 별도의 GPU 사용 없이 기기 안에서 음성을 합성할 수 있는 온디바이스 TTS 모델로, 네트워크가 없는 모바일과 PC 환경에서도 활용 가능하다는 점이 눈에 띕니다.",
    audio: {
      prompt:      "samples/news/male/news_male_ko_Jiny_Neutral_ko/prompt.wav",
      supertonic3: "samples/news/male/news_male_ko_Jiny_Neutral_ko/supertonic3.wav",
      chatterbox:  "samples/news/male/news_male_ko_Jiny_Neutral_ko/chatterbox.wav",
      omnivoice:   "samples/news/male/news_male_ko_Jiny_Neutral_ko/omnivoice.wav",
    },
  },
  {
    id: "news/male/news_male_ja_Isamu_Unfriendly_ja",
    domain: "news",
    gender: "male",
    speaker: "Isamu",
    emotion: "Unfriendly",
    prompt_lang: "ja",
    target_lang: "ja",
    text: "皆さん、注目のニュースです。スーパートーンのオンデバイスTTSモデル、スーパートニック3が公開されました。今回のバージョンでは、対応言語が31言語に拡大し、読み上げの安定性も向上しています。",
    audio: {
      prompt:      "samples/news/male/news_male_ja_Isamu_Unfriendly_ja/prompt.wav",
      supertonic3: "samples/news/male/news_male_ja_Isamu_Unfriendly_ja/supertonic3.wav",
      chatterbox:  "samples/news/male/news_male_ja_Isamu_Unfriendly_ja/chatterbox.wav",
      omnivoice:   "samples/news/male/news_male_ja_Isamu_Unfriendly_ja/omnivoice.wav",
    },
  },
  {
    id: "news/male/news_male_ko_Keld_Neutral_en",
    domain: "news",
    gender: "male",
    speaker: "Keld",
    emotion: "Neutral",
    prompt_lang: "ko",
    target_lang: "en",
    text: "Here’s a story worth paying attention to. Supertone has released Supertonic 3, its on-device TTS model. This version expands support to thirty-one languages and improves reading stability.",
    audio: {
      prompt:      "samples/news/male/news_male_ko_Keld_Neutral_en/prompt.wav",
      supertonic3: "samples/news/male/news_male_ko_Keld_Neutral_en/supertonic3.wav",
      chatterbox:  "samples/news/male/news_male_ko_Keld_Neutral_en/chatterbox.wav",
      omnivoice:   "samples/news/male/news_male_ko_Keld_Neutral_en/omnivoice.wav",
    },
  },
];
