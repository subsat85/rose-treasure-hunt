# Rose's Treasure Hunt — البحث عن الكنز

لعبة ثلاثية الأبعاد لطفلة عمرها 4 سنوات، داخل نموذج مطابق لغرفتها الحقيقية.
تجمع روز 3 نجوم مخبأة بالضغط على الأثاث، ثم تفتح صندوق الكنز.

- `index.html` — اللعبة كاملة (Three.js r147, ملف واحد).
- `vendor/` — Three.js r147 و OrbitControls (MIT, انظر `vendor/LICENSE-three.txt`) مضمّنة محلياً، بدون CDN.

التشغيل محلياً: افتح أي خادم ملفات ثابتة في هذا المجلد، مثل `python3 -m http.server`.

## الصوت

- `assets/audio/` — 40 تسجيلاً عربياً (صوت «Sara - Soft Calm and Gentle»، ElevenLabs eleven_v4)، مُعالَجة إلى −18 LUFS، MP3 أحادي 96 kbps.
- `assets/audio/audio-manifest.json` — جرد كل جملة: النص، الحدث الذي يشغّلها، الملف.
- `sw.js` — Service Worker يحفظ اللعبة والتسجيلات لتعمل دون إنترنت بعد أول زيارة.
- المؤثرات الصوتية (النقر، النجمة، الفوز…) تُولَّد برمجياً عبر Web Audio.
