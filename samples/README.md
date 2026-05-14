# Supertonic3 Demo Samples

Structured sample tree for the demo page. Each sample folder is self-contained:
the source prompt, the target text, this model's output, and metadata. Other
TTS engines can be added by dropping `<model>.wav` next to `supertonic3.wav`
in every sample folder.

## Layout

```
samples/
├── manifest.json                                # flat index for the demo UI
├── README.md
├── <category>/                                  # game | call-center | conversation | audiobook | news
│   └── <gender>/                                # female | male
│       └── <category>_<gender>_<plang>_<Speaker>_<Emotion>_<tlang>/
│           ├── prompt.wav                       # source voice prompt
│           ├── text.txt                         # text to synthesize
│           ├── meta.json                        # sample metadata
│           └── supertonic3.wav                 # this model's output
```

Folder-name pattern: `{category}_{gender}_{prompt_lang}_{Speaker}_{Emotion}_{target_lang}`.
Example: `game_female_ko_Coco_Embarrassed_ko`.

## Adding another TTS model

1. Generate audio for every sample listed in `manifest.json` using the same
   `prompt.wav` and `text.txt` from that sample's folder.
2. Save the output as `<model_name>.wav` inside the matching sample folder.
3. Append `<model_name>` to each sample's `meta.json.models` and to the root
   `manifest.json.models_registered` (or re-run the build script — it
   regenerates these from disk).

## Regenerating

```
python scripts/post/build_demo_samples.py
```

Idempotent: existing files are overwritten; other TTS `<model>.wav` files are
left untouched.


## Results
  ┌─────────────┬──────────┬─────┬─────────┬─────────┬───────┬───────┐
  │    모델      │ 하드웨어   │  n  │  synth  │  audio  │  RTF  │  ×RT  │
  ├─────────────┼──────────┼─────┼─────────┼─────────┼───────┼───────┤
  │ supertonic3 │ CPU 16T  │ 30  │ 57.99s  │ 289.92s │ 0.200 │ 5.00× │
  ├─────────────┼──────────┼─────┼─────────┼─────────┼───────┼───────┤
  │ omnivoice   │ RTX 3090 │ 30  │ 53.90s  │ 275.17s │ 0.196 │ 5.11× │
  ├─────────────┼──────────┼─────┼─────────┼─────────┼───────┼───────┤
  │ chatterbox  │ RTX 3090 │ 30  │ 199.70s │ 252.68s │ 0.790 │ 1.27× │
  └─────────────┴──────────┴─────┴─────────┴─────────┴───────┴───────┘
