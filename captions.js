/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 8, tr: "Arkadaşımın şifresini yanlışlıkla gördüm", en: "I accidentally saw my friend's password",
      note: "Karo, arkadaşı oyuna girerken şifresini yanlışlıkla gördü. Şimdi ne yapmalı? Hesaba girebilir mi?" },
    { scene: 1, start: 8.8, end: 14.5, tr: "Doğru olan ne?", en: "What is the right thing to do?",
      note: "Bu soruyu sormak etik düşünmenin başlangıcıdır. Gel, birlikte düşünelim." },
    { scene: 2, start: 17.3, end: 23, tr: "Etik: doğru ile yanlışı ayırmak", en: "Ethics: telling right from wrong",
      note: "Etik, neyin doğru neyin yanlış olduğuna karar vermemize yardım eden ilkelerdir. Şifreyi görmek bir kazaydı; onu kullanmak ise yanlış olur." },
    { scene: 2, start: 23.8, end: 29.4, tr: "Telif hakkı: eser sahibinin hakkı", en: "Copyright: the creator's rights",
      note: "Bir resmi, şarkıyı ya da oyunu yapan kişinin o eser üzerinde hakları vardır. Buna telif hakkı denir." },
    { scene: 2, start: 30.3, end: 36.1, tr: "Siber zorbalık: internette birini üzmek", en: "Cyberbullying: hurting someone online",
      note: "İnternette birini alaya almak, korkutmak ya da dışlamak siber zorbalıktır." },
    { scene: 2, start: 36.9, end: 44.1, tr: "Bilişim etiği: teknolojide doğru davranmak", en: "Information ethics: doing right with technology",
      note: "Teknolojiyi kullanırken dürüst, saygılı ve sorumlu davranmamızı sağlayan ilkelere bilişim etiği denir." },
    { scene: 3, start: 47, end: 52.6, tr: "Şifreyi görsem de kullanmam", en: "Even if I see a password, I don't use it",
      note: "İlke: başkasının hesabına izinsiz girme. Karo ne yapar? Şifreyi kullanmaz ve arkadaşına şifresini değiştirmesini söyler." },
    { scene: 3, start: 53.5, end: 59.1, tr: "Kullandığım resmin kaynağını yazarım", en: "I credit the pictures I use",
      note: "İlke: emeğe saygı göster. Ödevimde başkasının resmini kullanırsam kaynağını yazarım; lisanslı yazılım kullanırım." },
    { scene: 3, start: 60, end: 66.8, tr: "Sormadan kimsenin fotoğrafını paylaşmam", en: "I never share a photo without asking",
      note: "İlke: kişisel bilgileri izinsiz paylaşma. Arkadaşımın fotoğrafını paylaşmadan önce ona sorarım." },
    { scene: 4, start: 69.6, end: 78.4, tr: "Kompozisyonu yapay zekâya yazdırıp kendi yazım diye vermek", en: "Getting AI to write my essay and calling it mine",
      note: "Yapay zekânın yazdığı bir kompozisyonu kendi yazımız gibi göstermek dürüst değildir. Etik değil." },
    { scene: 4, start: 79.3, end: 85, tr: "Oyunu korsan bir siteden indirmek", en: "Downloading a game from a pirate site",
      note: "Bir oyunu korsan siteden indirmek, onu yapanların emeğini çalmaktır. Üstelik bilgisayara virüs bulaşabilir. Etik değil." },
    { scene: 4, start: 85.8, end: 92, tr: "Yapay zekâ görselinin yapay olduğunu yazmak", en: "Saying an AI picture is AI-made",
      note: "Yapay zekâyla ürettiğimiz bir görseli paylaşırken bunun yapay zekâ ile yapıldığını yazmak dürüst bir davranıştır. Etik." },
    { scene: 5, start: 94.8, end: 101.3, tr: "Ben doğru davranırsam arkadaşım güvende olur", en: "If I do right, my friend is safe",
      note: "Etik davranmak neden önemli? Ben doğru davranırsam arkadaşım kendini güvende hisseder." },
    { scene: 5, start: 102, end: 109.5, tr: "Güven büyür, internet hepimiz için güzelleşir", en: "Trust grows and the internet gets better for all",
      note: "Herkes böyle davranırsa birbirimize güveniriz ve internet hepimiz için daha güzel bir yer olur." },
    { scene: 6, start: 112.3, end: 119.1, tr: "Aklında kalsın: kimse görmese de doğru olanı yap", en: "Remember: do the right thing even when no one is looking",
      note: "Aklında kalsın: bilişim etiği, kimse görmese de doğru olanı yapmaktır." },
    { scene: 6, start: 120, end: 125.7, tr: "Dürüst, saygılı, sorumlu!", en: "Honest, respectful, responsible!",
      note: "Teknolojiyi dürüst, saygılı ve sorumlu kullan." },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
