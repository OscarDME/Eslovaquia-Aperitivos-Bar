// lib/copy.js
// Única fuente de copy de la landing. Cero texto debe vivir en componentes.
export const copy = {
  metadata: {
    title: "+500 receptov na barové chuťovky",
    description:
      "Chrumkavé, rýchle a jednoduché chuťovky na doma. Viac ako 500 receptov + 3 exkluzívne bonusy. Okamžitý prístup.",
  },

  promoBar: {
    text: "Táto zľava končí už dnes:",
    icon: "Flame",
  },

  hero: {
    eyebrow: "Špeciálne vydanie · Okamžitý prístup",
    titleEmoji: "🍻",
    headline: "Viac ako 500 receptov na barové chuťovky!",
    subheadline: "Pre dokonalý relax a pôžitok po celý rok",
    paragraphPrefix: "Už stačilo jesť tie isté",
    paragraphHighlight:
      "nudné chuťovky bez chuti. Zmeň to ešte dnes s našou e-knihou!",
    imageAlt: "Obal e-knihy Viac ako 500 receptov",
    badge: "Doživotný prístup",
    regularPriceLabel: "Pôvodne",
    regularPrice: "97.00 €",
    offerPrefix: "len za",
    offerPrice: "8.90 €",
    cta: "CHCEM RECEPTY!",
    stats: [
      { value: "500+", label: "Exkluzívnych receptov" },
      { value: "3", label: "Darčekové bonusy" },
      { value: "100%", label: "Digitálny prístup" },
    ],
  },

  benefits: {
    eyebrow: "Prečo si ju zamiluješ",
    headline: "Čo robí túto knihu výnimočnou",
    items: [
      { title: "Viac ako 500 klasických aj moderných barových chuťoviek", icon: "BookOpen" },
      { title: "Obrovská rozmanitosť receptov pre každý vkus", icon: "Sparkles" },
      { title: "Rýchla a chrumkavá príprava bez zbytočnej námahy", icon: "Zap" },
      { title: "Ideálne jedlo pre hostí, na párty aj večerný relax", icon: "Users" },
      { title: "Zdravé varianty bez oleja pre teplovzdušnú fritézu", icon: "Wind" },
      { title: "Bežne dostupné a lacné suroviny z tvojho obchodu", icon: "Carrot" },
      { title: "Pohodlný online prístup s možnosťou tlače", icon: "Printer" },
    ],
  },

  carouselSection: {
    eyebrow: "Nahliadni dovnútra",
    headline: "Chrumkavé, rýchle a čisté chuťovky – priamo u teba doma.",
    paragraph1:
      "Táto digitálna kniha raz a navždy rieši problém s nudnými, drahými a zložitými snackmi na večer.",
    paragraph2:
      "S viac ako 500 barovými receptami sa naučíš pripravovať neodolateľné klasiky, chrumkavé kombinácie a dokonalé dipy. Nechýbajú ani verzie bez oleja do teplovzdušnej fritézy, pre tých, čo milujú tradičnú chuť, ale uprednostňujú ľahšie jedlo.",
    closingLines: [
      "Všetko ide ľahko, prakticky a bez zbytočného neporiadku v kuchyni.",
      "Ak máš už dnes večer chuť na niečo chrumkavé, toto je tvoje riešenie."
    ],
    images: [
      { src: "/carousel/slide-1.webp", alt: "Náhľad knihy s chuťovkami — slajd 1" },
      { src: "/carousel/slide-2.webp", alt: "Náhľad knihy s chuťovkami — slajd 2" },
    ],
    chips: [
      { icon: "CheckCircle2", label: "Chuťovky BEZ NEPORIADKU" },
      { icon: "Clock", label: "Dobroty za PÁR MINÚT" },
      { icon: "BookOpen", label: "Viac ako 500 RECEPTOV" },
    ],
    cta: "CHCEM RECEPTY!",
    a11y: {
      prev: "Predchádzajúci",
      next: "Ďalší",
      goToSlide: "Prejsť na slajd",
    },
  },

  features: {
    eyebrow: "Koniec bez chuti, drahým a mastným snackom",
    headline: "Chrumkavé, rýchle a jednoduché na prípravu",
    badge: "Pozri si, čo všetko nájdeš v digitálnej knihe (PDF):",
    ingredientsLabel: "Surov.",
    timeLabel: "Čas:",
    items: [
      {
        title: "Chrumkavé mäsové guľôčky",
        description:
          "Zvonka chrumkavé, zvnútra šťavnaté. Neodolateľná klasika, z ktorej si každý vypýta dupľu.",
        image: "/recipes/bolitas-carne.webp",
        ingredients: 3,
        time: "10 min",
      },
      {
        title: "Krčmové krevety",
        description:
          "Šťavnaté, výborne ochutené a bleskové na prípravu. Chuťovka, ktorá ohúri jednoduchosťou a chuťou.",
        image: "/recipes/camarones-bar.webp",
        ingredients: 2,
        time: "8 min",
      },
      {
        title: "Klobáska z fritézy",
        description:
          "Zvonka chrumkavá, zvnútra šťavnatá a hotová za pár minút. Ideálne sústo na zdieľanie s kamošmi.",
        image: "/recipes/chorizo-airfryer.webp",
        ingredients: 3,
        time: "7 min",
      },
      {
        title: "Veľká barová misa",
        description:
          "Rozmanitosť, chrumkavosť a pravá krčmová chuť na jednom tanieri. Okamžite zapôsobí na každého hosťa.",
        image: "/recipes/tabla-bar.webp",
        ingredients: 7,
        time: "18 min",
      },
      {
        title: "Zapekané zemiaky s čedarom a slaninkou",
        description:
          "Chrumkavé, krémové a s brutálnou chuťou. Klasika, ktorej nikto neodolá.",
        image: "/recipes/papas-cheddar.webp",
        ingredients: 3,
        time: "8 min",
      },
      {
        title: "Voňavý cesnakový chlieb",
        description:
          "Vnútri mäkučký, zvonka chrumkavý a plný chuti. Chuťovka, ktorá zmyzne zo stola ako prvá.",
        image: "/recipes/pan-ajo.webp",
        ingredients: 3,
        time: "6 min",
      },
      {
        title: "Pikantné zemiaky (Patatas Bravas)",
        description:
          "Chrumkavé, skvele okorenené a vysoko návykové. Z tých, čo ješ bez rozmýšľania, kým nie je tanier prázdny.",
        image: "/recipes/papas-bravas.webp",
        ingredients: 3,
        time: "10 min",
      },
      {
        title: "Chrumkavé kuracie nugetky",
        description:
          "Chrumkavé, ochutené a šťavnaté, úplne bez oleja. Chuťovka, ktorá sadne celej partii.",
        image: "/recipes/pollo-frito.webp",
        ingredients: 2,
        time: "5 min",
      },
      {
        title: "Misa miešaných chuťoviek",
        description:
          "Rýchla, bohatá a ideálna na začiatok každej debaty. Dokonalá spoločnosť k studenému pivu.",
        image: "/recipes/aperitivos-variados.webp",
        ingredients: 5,
        time: "12 min",
      },
      {
        title: "Vyprážané syrové tyčinky",
        description:
          "Zvonka chrumkavé, vnútri ťahavé a roztopené. Rýchla chuťovka, z ktorej sa nedá zjesť len jedna.",
        image: "/recipes/queso-bar.webp",
        ingredients: 2,
        time: "6 min",
      },
    ],
    moreBlock: {
      title: "A OVEĽA VIAC...",
      text: "To je vyše 500 receptov, ideálnych pre každého, kto miluje barové dobroty, ale hľadá pohodlie u seba doma.",
    },
    cta: "CHCEM RECEPTY!",
  },

  bonuses: {
    eyebrowMain: "Bonusy, ktoré získaš,",
    eyebrowSuffix: "ak si objednáš ešte dnes:",
    freeLabel: "DNES ZADARMO",
    items: [
      {
        badge: "Bonus 1",
        title: "Kompletný zoznam barových dipov a korenín",
        subtext: "Tajné prísady, kombinácie a základné koreniny",
        image: "/bonuses/bonus-1-salsas.webp",
        imageAlt: "Bonus 1 — Zoznam dipov a korenín",
        price: "9.00 €",
      },
      {
        badge: "Bonus 2",
        title: "Týždenné menu chuťoviek do fritézy",
        subtext: "Chuťovky rozdelené podľa dní v týždni",
        image: "/bonuses/bonus-2-menu-airfryer.webp",
        imageAlt: "Bonus 2 — Týždenné menu",
        price: "5.90 €",
      },
      {
        badge: "Bonus 3",
        title: "Príručka na rýchle prílohy",
        subtext: "Strúhanky, nátierky a šaláty pre návštevy",
        image: "/bonuses/bonus-3-acompanamientos.webp",
        imageAlt: "Bonus 3 — Rýchle prílohy",
        price: "7.90 €",
      },
    ],
  },

  finalCta: {
    eyebrow: "Tvoja ponuka",
    headline: "Okamžitý prístup — zaplatíš raz, využívaš navždy",
    subheadline: "Všetko, čo potrebuješ, pekne na jednom mieste.",
    plans: [
      {
        kind: "super",
        ribbon: "Super Ponuka",
        popularLabel: "🔥 NAJPREDÁVANEJŠIE",
        title: "Viac ako 500 receptov na barové chuťovky",
        bullets: [
          "Viac ako 500 receptov na barové chuťovky",
          "Recepty špeciálne pre teplovzdušnú fritézu",
          "Varianty s olejom aj úplne bez neho",
          "Doživotný prístup vo formáte PDF",
          "Okamžité doručenie na tvoj e-mail"
        ],
        bonusBullets: [
          "Kompletný zoznam barových dipov a korenín",
          "Týždenné menu chuťoviek do fritézy",
          "Šikovné a lacné náhrady drahých surovín",
        ],
        regularPrice: "97.00 €",
        discountTag: "-90%",
        offerPrice: "8.90 €",
        priceFootnote: "Jednorazová platba",
        cta: "KÚPIŤ TERAZ",
        analyticsId: "aperitivos_bar_super",
        analyticsName: "Super Oferta - +500 Recetas + Bonos",
        priceValue: 8.9,
      },
    ],
    trust: {
      secure: "Bezpečná platba",
      guarantee: "30-dňová záruka",
    },
  },

  testimonials: {
    eyebrow: "Komunita",
    headline: "Recenzie od našich zákazníkov",
    actions: ["Páči sa mi to", "Komentovať", "Zdieľať"],
    items: [
      {
        name: "Mária Kováčová",
        time: "Pred 2 h",
        content:
          "Super recepty! Spravila som tie chrumkavé guľôčky a boli úplne top 🔥",
        likes: 23,
        avatar: "/testimonials/maria.webp",
      },
      {
        name: "Juraj Novotný",
        time: "Pred 5 h",
        content:
          "Fíha, neskutočné recepty! Včera som skúsil krevety a moja žena zostala v nemom úžase.",
        likes: 34,
        avatar: "/testimonials/juan.webp",
      },
      {
        name: "Elena Hrubá",
        time: "Pred 1 dňom",
        content:
          "Ľudia, nikdy by som neverila, že sa dá spraviť toľko rôznych chuťoviek. Už som skúsila 3 recepty a všetky boli unikátne! ❤️",
        likes: 45,
        avatar: "/testimonials/ana.webp",
      },
      {
        name: "Martin Tóth",
        time: "Pred 1 dňom",
        content:
          "Stálo to za každý cent. Už viac ako rok som nezopakoval tú istú chuťovku. Moja rodina je nadšená.",
        likes: 28,
        avatar: "/testimonials/carlos.webp",
      },
      {
        name: "Silvia Vargová",
        time: "Pred 2 dňami",
        content:
          "Kúpila som to včera a hneď som spravila zopár barových receptov... vyšli strašne chutne. Vrelo odporúčam!",
        likes: 52,
        avatar: "/testimonials/lucia.webp",
      },
    ],
    cta: "CHCEM RECEPTY!",
  },

  story: {
    eyebrow: "O AUTOROVI",
    headline: "ŠÉFKUCHÁR TOMÁŠ KOVÁČ",
    image: "/chef-juan-carlos.webp",
    imageAlt: "Šéfkuchár Tomáš Kováč",
    paragraphs: [
      { text: "Ahoj, som šéfkuchár Tomáš Kováč!", style: "bold" },
      {
        text: "Vždy som veril, že dobrá chuťovka je dušou každého stola. Nemusí to byť vôbec zložité, hlavne nech to skvele chutí.",
        style: "default",
      },
      {
        text: "Po rokoch strávených v profesionálnych kuchyniach som videl, ako ľudia milujú zobkať niečo dobré k studenému pivku. Zároveň som si uvedomil, že doma sa mnohí trápia s kupovanými čipsami alebo nudnými hranolkami len preto, že nemajú nápady.",
        style: "default",
      },
      {
        text: "Tak vznikol nápad na túto príručku: zhromaždiť viac ako 500 rôznych spôsobov, ako pripraviť barové chuťovky — praktické, diabolsky chutné a zo surovín, ktoré ti nezruinujú peňaženku.",
        style: "highlight",
      },
      {
        text: "Všetko som pripravil s obrovskou starostlivosťou, aby som ti ukázal, že je úplne možné mať doma tú pravú krčmovú chuť. A to každý jeden deň.",
        style: "default",
      },
      { text: "Ideme do toho spoločne?", style: "bold-accent" },
    ],
    cta: "CHCEM RECEPTY!",
  },

  faq: {
    eyebrow: "FAQ",
    headline: "ČASTO KLADENÉ OTÁZKY",
    items: [
      {
        q: "Ako dostanem materiály?",
        a: "Prístup k e-knihe a bonusom ti príde na e-mail okamžite po potvrdení platby.",
      },
      {
        q: "Dá sa kniha vytlačiť?",
        a: "Áno! Súbor je vo vysokej PDF kvalite, ideálny na čítanie na mobile, tablete či počítači, no bez problémov si ho môžeš aj vytlačiť.",
      },
      {
        q: "Sú tam recepty aj pre úplných začiatočníkov?",
        a: "Áno, všetky recepty sú vysvetlené krok za krokom, jednoducho a jasne. Sú perfektné aj pre ľudí, ktorí nikdy predtým nevarili.",
      },
      {
        q: "Sú tam recepty bez oleja?",
        a: "Samozrejme! Mnohé recepty sú prispôsobené pre teplovzdušnú fritézu alebo rúru, takže si zachovajú chuť aj bez zbytočnej mastnoty.",
      },
      {
        q: "Sú recepty ľahké a praktické?",
        a: "Absolútne! Zameral som sa na praktickosť, aby si v kuchyni netrávil dlhé hodiny.",
      },
      {
        q: "Ak neviem veľmi variť... je táto kniha pre mňa?",
        a: "Bez debaty. Návody sú jasné a suroviny kúpiš v každom lokálnom obchode.",
      },
      {
        q: "Môžem to čítať z mobilu?",
        a: "Áno, formát je plne kompatibilný s akýmkoľvek smartfónom.",
      },
      {
        q: "Čo ak sa mi to nebude páčiť? Máte nejakú záruku?",
        a: "Ponúkame bezpodmienečnú 30-dňovú záruku vrátenia peňazí. Ak sa ti kniha nebude páčiť, stačí nám napísať e-mail a vrátime ti plnú sumu.",
      },
    ],
  },

  closing: {
    eyebrow: "Posledná šanca",
    headline: "Prines si barovú chuť k sebe domov ešte dnes",
    paragraph:
      "Prístup je okamžitý, platba je jednorazová a chráni ťa 30-dňová záruka. Nehrozí ti žiadne riziko: čakajú ťa len chrumkavé, praktické a nezabudnuteľné chuťovky.",
    cta: "CHCEM RECEPTY!",
  },

  footer: {
    brand: "Viac ako 500 receptov na barové chuťovky",
    tagline: "Pravá krčmová chuť — priamo v tvojej kuchyni.",
    rightsPrefix: "Všetky práva vyhradené ©",
    disclaimer:
      "Táto stránka nie je súčasťou webovej stránky Facebook alebo Facebook Inc. Okrem toho táto stránka nie je žiadnym spôsobom podporovaná spoločnosťou Facebook. FACEBOOK je registrovaná ochranná známka spoločnosti FACEBOOK, Inc.",
  },
};