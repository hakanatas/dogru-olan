/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "dogru-olan",
    "title": "Doğru Olan",
    "titleEn": "The Right Thing",
    "grade": 5,
    "theme": "Bilişim Etiği ve Siber Güvenlik",
    "code": "BTY.5.4.1",
    "outcome": "Bilişim etiği kural ve ilkelerini yorumlayabilme",
    "outcomeEn": "Interpreting the rules and principles of information ethics",
    "duration": 127,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 15.8,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 15.8,
      "t1": 45.5,
      "name": "Bilişim etiği",
      "en": "Information ethics",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 45.5,
      "t1": 68.2,
      "name": "İlkeden davranışa",
      "en": "From principle to habit",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 68.2,
      "t1": 93.4,
      "name": "Etik mi?",
      "en": "Is it ethical?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 93.4,
      "t1": 110.9,
      "name": "Neden önemli?",
      "en": "Why it matters",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 110.9,
      "t1": 127,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
