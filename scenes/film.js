/* ─────────────────────────────────────────────────────────────
   DOĞRU OLAN — BTY.5.4.1 (senaryo)
   Her vuruş bir altyazıdır: tr, en, note (öğretmen için seslendirme).
   Değiştirdikten sonra: npm run build
   ───────────────────────────────────────────────────────────── */
BF.defineFilm({
  meta: {
    slug: 'dogru-olan', title: 'Doğru Olan', titleEn: 'The Right Thing', code: 'BTY.5.4.1',
    outcomeEn: 'Interpreting the rules and principles of information ethics',
    summary: 'Etik kavramı günlük bir senaryoyla açılır ve bilişim etiğine bağlanır; telif hakkı, siber zorbalık ve kişisel bilgilere saygı temel kavramlar olarak tanıtılır. Bilişim etiği ilkeleri öğrencinin günlük hayatındaki davranışlara dönüştürülür. Yapay zekâ ile ödev yapmak, lisanssız yazılım indirmek ve izinsiz fotoğraf paylaşmak gibi senaryolar etik açıdan değerlendirilir. Son olarak etik davranmanın neden önemli olduğu bir neden-sonuç zinciriyle yeniden ifade edilir.',
    summaryEn: 'Ethics is introduced through an everyday dilemma and linked to information ethics (copyright, cyberbullying, respecting personal data); principles become daily habits; scenarios with AI homework, pirated software and shared photos are judged; and why ethics matters is restated as a chain of consequences.',
    blurb: 'Etik ve bilişim etiği; telif hakkı, siber zorbalık, ilkeleri günlük hayata taşımak ve yapay zekâ etiği.',
    posterAlt: 'Başlık ve Karo; çevresinde terazi, telif, kalp ve el sıkışma karoları',
  },
  scenes: [
    { type: 'intro', icons: [{ icon: 'justice', c: 'safran' }, { icon: 'copyright', c: 'mor' }, { icon: 'heart', c: 'mercan' }, { icon: 'handshake', c: 'zumrut' }, { icon: 'license', c: 'kobalt' }, { icon: 'bully', c: 'mercan' }, { icon: 'ai', c: 'kobalt' }, { icon: 'shield', c: 'turkuaz' }],
      beats: [
        { tr: 'Arkadaşımın şifresini yanlışlıkla gördüm', en: 'I accidentally saw my friend\'s password', extra: 1,
          note: 'Karo, arkadaşı oyuna girerken şifresini yanlışlıkla gördü. Şimdi ne yapmalı? Hesaba girebilir mi?',
          karo: { mood: 'worried', caret: '?' } },
        { tr: 'Doğru olan ne?', en: 'What is the right thing to do?',
          note: 'Bu soruyu sormak etik düşünmenin başlangıcıdır. Gel, birlikte düşünelim.' },
      ] },
    { type: 'cards', name: 'Bilişim etiği', en: 'Information ethics', desc: 'Etik, telif hakkı, siber zorbalık ve bilişim etiği.', out: 'a',
      cards: [
        { word: 'ETİK', def: 'Doğru ile yanlışı ayırmamızı sağlayan ilkeler', icon: 'justice', c: 'safran' },
        { word: 'TELİF HAKKI', def: 'Bir eserin sahibine ait olan haklar', icon: 'copyright', c: 'mor' },
        { word: 'SİBER ZORBALIK', def: 'İnternette birini üzmek, korkutmak', icon: 'bully', c: 'mercan' },
      ],
      result: { word: 'BİLİŞİM ETİĞİ', c: 'turkuaz', chips: ['dürüstlük', 'saygı', 'sorumluluk'], line: 'Teknolojiyi kullanırken doğru davranma ilkeleri' },
      beats: [
        { tr: 'Etik: doğru ile yanlışı ayırmak', en: 'Ethics: telling right from wrong',
          note: 'Etik, neyin doğru neyin yanlış olduğuna karar vermemize yardım eden ilkelerdir. Şifreyi görmek bir kazaydı; onu kullanmak ise yanlış olur.' },
        { tr: 'Telif hakkı: eser sahibinin hakkı', en: 'Copyright: the creator\'s rights',
          note: 'Bir resmi, şarkıyı ya da oyunu yapan kişinin o eser üzerinde hakları vardır. Buna telif hakkı denir.' },
        { tr: 'Siber zorbalık: internette birini üzmek', en: 'Cyberbullying: hurting someone online',
          note: 'İnternette birini alaya almak, korkutmak ya da dışlamak siber zorbalıktır.' },
        { tr: 'Bilişim etiği: teknolojide doğru davranmak', en: 'Information ethics: doing right with technology', extra: 1,
          note: 'Teknolojiyi kullanırken dürüst, saygılı ve sorumlu davranmamızı sağlayan ilkelere bilişim etiği denir.' },
      ] },
    { type: 'columns', name: 'İlkeden davranışa', en: 'From principle to habit', desc: 'Bilişim etiği ilkeleri günlük hayattaki davranışlara dönüştürülür.', out: 'b',
      cols: [{ label: 'İLKE', c: 'kobalt' }, { label: 'BEN NE YAPARIM?', c: 'zumrut' }],
      items: [
        { text: 'Başkasının hesabına izinsiz girme', col: 0, icon: 'lock', beat: 0 },
        { text: 'Emeğe saygı göster, lisanslı yazılım kullan', col: 0, icon: 'license', beat: 1 },
        { text: 'Kişisel bilgileri izinsiz paylaşma', col: 0, icon: 'idcard', beat: 2 },
        { text: 'Şifreyi görsem de kullanmam, arkadaşıma söylerim', col: 1, icon: 'handshake', beat: 0 },
        { text: 'Ödevdeki resmin kaynağını yazarım', col: 1, icon: 'copyright', beat: 1 },
        { text: 'Arkadaşımın fotoğrafını sormadan paylaşmam', col: 1, icon: 'photo', beat: 2 },
      ],
      beats: [
        { tr: 'Şifreyi görsem de kullanmam', en: 'Even if I see a password, I don\'t use it',
          note: 'İlke: başkasının hesabına izinsiz girme. Karo ne yapar? Şifreyi kullanmaz ve arkadaşına şifresini değiştirmesini söyler.' },
        { tr: 'Kullandığım resmin kaynağını yazarım', en: 'I credit the pictures I use',
          note: 'İlke: emeğe saygı göster. Ödevimde başkasının resmini kullanırsam kaynağını yazarım; lisanslı yazılım kullanırım.' },
        { tr: 'Sormadan kimsenin fotoğrafını paylaşmam', en: 'I never share a photo without asking', extra: 1,
          note: 'İlke: kişisel bilgileri izinsiz paylaşma. Arkadaşımın fotoğrafını paylaşmadan önce ona sorarım.' },
      ] },
    { type: 'judge', name: 'Etik mi?', en: 'Is it ethical?', desc: 'Yapay zekâ, yazılım ve paylaşım senaryoları etik açıdan değerlendirilir.', out: 'b, c', labels: { ok: 'etik', no: 'etik değil' },
      beats: [
        { tr: 'Kompozisyonu yapay zekâya yazdırıp kendi yazım diye vermek', en: 'Getting AI to write my essay and calling it mine', extra: 1,
          note: 'Yapay zekânın yazdığı bir kompozisyonu kendi yazımız gibi göstermek dürüst değildir. Etik değil.',
          row: { icon: 'ai', text: 'Kompozisyonu yapay zekâya yazdırıp kendi yazım diye veriyorum', ok: false, why: 'Dürüst değil; önce kendim yazmalıyım' } },
        { tr: 'Oyunu korsan bir siteden indirmek', en: 'Downloading a game from a pirate site',
          note: 'Bir oyunu korsan siteden indirmek, onu yapanların emeğini çalmaktır. Üstelik bilgisayara virüs bulaşabilir. Etik değil.',
          row: { icon: 'gamepad', text: 'Oyunu korsan bir siteden ücretsiz indiriyorum', ok: false, why: 'Emeğe saygısızlık, virüs riski' } },
        { tr: 'Yapay zekâ görselinin yapay olduğunu yazmak', en: 'Saying an AI picture is AI-made',
          note: 'Yapay zekâyla ürettiğimiz bir görseli paylaşırken bunun yapay zekâ ile yapıldığını yazmak dürüst bir davranıştır. Etik.',
          row: { icon: 'photo', text: 'Paylaştığım görselin yapay zekâ ile yapıldığını belirtiyorum', ok: true, why: 'Kimse yanılmaz' } },
      ] },
    { type: 'steps', name: 'Neden önemli?', en: 'Why it matters', desc: 'Etik davranmanın önemi bir neden-sonuç zinciriyle ifade edilir.', out: 'c',
      steps: [
        { icon: 'justice', label: 'Ben', text: 'Etik davranırım', c: 'safran' },
        { icon: 'shield', label: 'Arkadaşım', text: 'Kendini güvende hisseder', c: 'turkuaz' },
        { icon: 'handshake', label: 'Hepimiz', text: 'Birbirimize güveniriz', c: 'zumrut' },
        { icon: 'globe', label: 'İnternet', text: 'Herkes için güzel bir yer olur', c: 'kobalt' },
      ],
      beats: [
        { tr: 'Ben doğru davranırsam arkadaşım güvende olur', en: 'If I do right, my friend is safe', show: 2,
          note: 'Etik davranmak neden önemli? Ben doğru davranırsam arkadaşım kendini güvende hisseder.' },
        { tr: 'Güven büyür, internet hepimiz için güzelleşir', en: 'Trust grows and the internet gets better for all', show: 4, extra: 1,
          note: 'Herkes böyle davranırsa birbirimize güveniriz ve internet hepimiz için daha güzel bir yer olur.' },
      ] },
    { type: 'summary',
      lines: [
        { icon: 'justice', c: 'safran', text: 'Etik: doğru ile yanlışı ayırmak' },
        { icon: 'copyright', c: 'mor', text: 'Emeğe ve mahremiyete saygı göster' },
        { icon: 'ai', c: 'kobalt', text: 'Yapay zekâyı dürüstçe kullan' },
      ],
      beats: [
        { tr: 'Aklında kalsın: kimse görmese de doğru olanı yap', en: 'Remember: do the right thing even when no one is looking',
          note: 'Aklında kalsın: bilişim etiği, kimse görmese de doğru olanı yapmaktır.' },
        { tr: 'Dürüst, saygılı, sorumlu!', en: 'Honest, respectful, responsible!',
          note: 'Teknolojiyi dürüst, saygılı ve sorumlu kullan.' },
      ] },
  ],
});
