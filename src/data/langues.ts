import type { Subject } from "./types";

export const francais: Subject = {
  slug: "francais",
  name: "اللغة الفرنسية",
  latin: "Français",
  tagline: "الرواية، المسرح، القواعد والتعبير الكتابي",
  icon: "book",
  accent: "rose",
  lessons: [
    {
      slug: "le-recit-realiste",
      title: "الحكي الواقعي (Le récit réaliste)",
      unit: "Module I",
      duration: "4 ساعات",
      summary: "خصائص الحكي الواقعي من خلال رواية «La Boîte à Merveilles».",
      objectives: [
        "التعرف على خصائص النص الواقعي",
        "تحديد عناصر السرد: الراوي، الزمن، الفضاء",
      ],
      sections: [
        {
          heading: "1. Définition",
          body: [
            "Le récit réaliste raconte une histoire vraisemblable, ancrée dans un cadre spatio-temporel précis et un milieu social identifiable.",
            "الحكي الواقعي يروي أحداثا ممكنة الوقوع، في إطار زماني ومكاني محدد وبيئة اجتماعية واضحة.",
          ],
        },
        {
          heading: "2. La Boîte à Merveilles — Ahmed Sefrioui",
          body: [
            "Roman autobiographique publié en 1954. Le narrateur, Sidi Mohammed, âgé de six ans, raconte sa vie à Dar Chouafa, à Fès.",
            "رواية سيرة ذاتية، الراوي طفل في السادسة يروي حياته بدار الشوافة بفاس، وتصور المجتمع الفاسي التقليدي.",
          ],
          list: [
            "Le narrateur : interne, à la première personne",
            "Le cadre spatial : Dar Chouafa, Msid, Fès",
            "Les personnages : Sidi Mohammed, Lalla Zoubida, Sidi Abdeslem, Fqih, Lalla Aïcha",
          ],
        },
        {
          heading: "3. Le schéma narratif",
          body: [
            "Situation initiale, élément perturbateur, péripéties, dénouement, situation finale.",
          ],
        },
      ],
      keyTerms: ["narrateur", "autobiographie", "schéma narratif", "focalisation"],
    },
    {
      slug: "les-temps-du-recit",
      title: "أزمنة الحكي (Les temps du récit)",
      unit: "Langue",
      duration: "3 ساعات",
      summary: "الماضي البسيط، الماضي المستمر، الماضي التام واستعمالاتها.",
      objectives: ["تصريف الأفعال في أزمنة الماضي", "تحديد قيمة كل زمن في السرد"],
      sections: [
        {
          heading: "1. L'imparfait",
          body: [
            "Il exprime la description, l'habitude et l'action en cours dans le passé.",
            "Terminaisons : -ais, -ais, -ait, -ions, -iez, -aient.",
          ],
          example: "Il pleuvait doucement et les enfants jouaient dans la cour.",
        },
        {
          heading: "2. Le passé simple",
          body: [
            "Temps du récit écrit, il exprime une action ponctuelle et achevée qui fait avancer l'histoire.",
          ],
          example: "Il entra, referma la porte et s'assit près de la fenêtre.",
        },
        {
          heading: "3. Le plus-que-parfait",
          body: [
            "Il exprime une action antérieure à une autre action passée. Formation : imparfait de l'auxiliaire + participe passé.",
          ],
          example: "Quand il arriva, la fête avait déjà commencé.",
        },
      ],
      keyTerms: ["imparfait", "passé simple", "antériorité", "auxiliaire"],
    },
    {
      slug: "les-figures-de-style",
      title: "الصور البلاغية (Les figures de style)",
      unit: "Langue",
      duration: "2 ساعات",
      summary: "التشبيه والاستعارة والمبالغة والكناية في النصوص الأدبية.",
      objectives: ["التعرف على الصور البلاغية", "تحليل أثرها في النص"],
      sections: [
        {
          heading: "1. Figures d'analogie",
          body: [
            "La comparaison : rapproche deux éléments avec un outil (comme, tel, pareil à).",
            "La métaphore : comparaison sans outil comparatif.",
            "La personnification : attribue des traits humains à une chose ou un animal.",
          ],
          example: "Le vent murmurait dans les branches. (personnification)",
        },
        {
          heading: "2. Figures d'insistance et d'opposition",
          body: [
            "L'hyperbole exagère, l'anaphore répète un mot en début de phrase, l'antithèse oppose deux termes, l'oxymore les associe.",
          ],
        },
      ],
      keyTerms: ["comparaison", "métaphore", "hyperbole", "antithèse"],
    },
    {
      slug: "le-theatre",
      title: "المسرح (Le théâtre)",
      unit: "Module III",
      duration: "4 ساعات",
      summary: "خصائص النص المسرحي من خلال «Antigone» لجان أنوي.",
      objectives: [
        "التعرف على مكونات النص المسرحي",
        "تحليل شخصيات وصراع المسرحية",
      ],
      sections: [
        {
          heading: "1. Les composantes du texte théâtral",
          body: [
            "Le texte théâtral est fait de répliques (dialogue, tirade, monologue, aparté) et de didascalies (indications scéniques).",
            "Il se divise en actes et en scènes.",
          ],
        },
        {
          heading: "2. Antigone — Jean Anouilh (1944)",
          body: [
            "Tragédie moderne inspirée de Sophocle. Antigone enterre son frère Polynice malgré l'interdiction de Créon, et affronte la mort au nom de ses convictions.",
            "الصراع الأساسي بين أنتيغون رمز التمرد والمبدأ، وكريون رمز السلطة والواقعية السياسية.",
          ],
        },
        {
          heading: "3. Le tragique",
          body: [
            "Le héros tragique est écrasé par un destin inévitable ; le dénouement est fatal. Le prologue annonce dès le début l'issue de la pièce.",
          ],
        },
      ],
      keyTerms: ["didascalie", "tirade", "tragédie", "dénouement"],
    },
    {
      slug: "la-nouvelle-fantastique",
      title: "القصة العجائبية (La nouvelle fantastique)",
      unit: "Module II",
      duration: "4 ساعات",
      summary: "خصائص النص العجائبي وتوليد الشك والخوف لدى القارئ.",
      objectives: ["تحديد مؤشرات العجائبي", "دراسة بنية القصة القصيرة"],
      sections: [
        {
          heading: "1. Le fantastique",
          body: [
            "Le fantastique naît de l'irruption de l'inexplicable dans un cadre réaliste. Le lecteur hésite entre explication rationnelle et surnaturelle.",
          ],
        },
        {
          heading: "2. Les procédés",
          body: [
            "Le lexique de la peur, le modalisateur du doute (sembler, paraître, peut-être), la gradation, et le récit à la première personne renforcent l'effet fantastique.",
          ],
        },
      ],
      keyTerms: ["fantastique", "modalisateur", "gradation", "chute"],
    },
    {
      slug: "grammaire-subordonnees",
      title: "الجمل التابعة (Les propositions subordonnées)",
      unit: "Langue",
      duration: "3 ساعات",
      summary: "الجملة التابعة النسبية والاسمية والظرفية.",
      objectives: ["التعرف على أنواع الجمل التابعة", "استعمال أدوات الربط المناسبة"],
      sections: [
        {
          heading: "1. La subordonnée relative",
          body: [
            "Elle complète un nom antécédent et commence par un pronom relatif : qui, que, dont, où, lequel.",
          ],
          example: "Le livre que j'ai lu est passionnant.",
        },
        {
          heading: "2. La subordonnée complétive",
          body: ["Introduite par « que », elle complète un verbe : Je pense qu'il viendra."],
        },
        {
          heading: "3. Les subordonnées circonstancielles",
          body: [
            "Cause (parce que, puisque), conséquence (si bien que), but (pour que), temps (quand, lorsque), condition (si), opposition (bien que).",
          ],
        },
      ],
      keyTerms: ["antécédent", "pronom relatif", "complétive", "circonstancielle"],
    },
    {
      slug: "production-ecrite",
      title: "التعبير الكتابي (La production écrite)",
      unit: "Expression",
      duration: "3 ساعات",
      summary: "منهجية كتابة نص سردي ونص حجاجي.",
      objectives: ["تنظيم فقرات نص", "استعمال الروابط المنطقية"],
      sections: [
        {
          heading: "1. Le texte argumentatif",
          body: [
            "Introduction (sujet + problématique), développement (arguments + exemples), conclusion (bilan + ouverture).",
          ],
        },
        {
          heading: "2. Les connecteurs logiques",
          body: [
            "D'abord, ensuite, en outre, par ailleurs, cependant, en revanche, donc, en conclusion.",
          ],
        },
      ],
      keyTerms: ["thèse", "argument", "connecteur", "conclusion"],
    },
  ],
};

export const anglais: Subject = {
  slug: "anglais",
  name: "اللغة الإنجليزية",
  latin: "English",
  tagline: "Grammar, vocabulary, functions and writing",
  icon: "globe",
  accent: "indigo",
  lessons: [
    {
      slug: "tenses-review",
      title: "Verb Tenses Review",
      unit: "Grammar",
      duration: "3 ساعات",
      summary: "المضارع البسيط والمستمر والماضي البسيط والمضارع التام.",
      objectives: [
        "Use the present simple and continuous correctly",
        "Distinguish the past simple from the present perfect",
      ],
      sections: [
        {
          heading: "1. Present Simple & Continuous",
          body: [
            "Present simple: habits, routines and general truths. Signal words: always, usually, every day.",
            "Present continuous: actions happening now or temporary situations. Signal words: now, at the moment.",
          ],
          example: "She works in Rabat. / She is working on a project this week.",
        },
        {
          heading: "2. Past Simple",
          body: [
            "Finished actions at a definite time in the past. Regular verbs take -ed; irregular verbs have their own forms.",
          ],
          example: "We visited Marrakech last summer.",
        },
        {
          heading: "3. Present Perfect",
          body: [
            "Links past and present: experience, unfinished time, recent news. Form: have/has + past participle.",
            "Used with: ever, never, already, yet, just, since, for.",
          ],
          example: "I have lived here for five years.",
        },
      ],
      keyTerms: ["past participle", "signal words", "irregular verbs", "duration"],
    },
    {
      slug: "conditionals",
      title: "Conditional Sentences",
      unit: "Grammar",
      duration: "2 ساعات",
      summary: "الجمل الشرطية من النوع صفر والأول والثاني.",
      objectives: ["Form and use the three main conditionals"],
      sections: [
        {
          heading: "1. Zero and First Conditional",
          body: [
            "Zero: If + present simple, present simple → general truths. If you heat ice, it melts.",
            "First: If + present simple, will + infinitive → real future possibility. If it rains, we will stay home.",
          ],
        },
        {
          heading: "2. Second Conditional",
          body: [
            "If + past simple, would + infinitive → unreal or improbable present/future.",
          ],
          example: "If I were rich, I would travel around the world.",
        },
      ],
      keyTerms: ["if-clause", "main clause", "unreal", "hypothesis"],
    },
    {
      slug: "passive-voice",
      title: "The Passive Voice",
      unit: "Grammar",
      duration: "2 ساعات",
      summary: "تحويل الجمل من المبني للمعلوم إلى المبني للمجهول.",
      objectives: ["Transform active sentences into passive ones"],
      sections: [
        {
          heading: "1. Form",
          body: ["be (in the correct tense) + past participle (+ by + agent)."],
          example: "Active: They built the bridge in 1990. → Passive: The bridge was built in 1990.",
        },
        {
          heading: "2. Use",
          body: [
            "We use the passive when the agent is unknown, obvious, or less important than the action.",
          ],
        },
      ],
      keyTerms: ["agent", "past participle", "transitive verb"],
    },
    {
      slug: "reported-speech",
      title: "Reported Speech",
      unit: "Grammar",
      duration: "2 ساعات",
      summary: "نقل الكلام مع تغيير الأزمنة والضمائر وظروف الزمان.",
      objectives: ["Report statements, questions and orders"],
      sections: [
        {
          heading: "1. Backshift of tenses",
          body: [
            "present simple → past simple, present continuous → past continuous, will → would, can → could.",
          ],
          example: '"I am tired," she said. → She said (that) she was tired.',
        },
        {
          heading: "2. Questions and orders",
          body: [
            "Reported questions use statement word order: He asked where I lived.",
            "Orders use tell + object + to + infinitive: She told me to wait.",
          ],
        },
      ],
      keyTerms: ["backshift", "reporting verb", "word order"],
    },
    {
      slug: "functions-communication",
      title: "Communicative Functions",
      unit: "Functions",
      duration: "3 ساعات",
      summary: "طلب المساعدة، إبداء الرأي، الاعتذار، تقديم النصيحة.",
      objectives: ["Use appropriate expressions in real-life situations"],
      sections: [
        {
          heading: "1. Giving advice",
          body: ["You should…, You ought to…, Why don't you…?, If I were you, I would…"],
        },
        {
          heading: "2. Expressing opinion & agreement",
          body: [
            "In my opinion…, I think that…, As far as I'm concerned… / I agree, That's right, I'm afraid I disagree.",
          ],
        },
        {
          heading: "3. Apologising and requesting",
          body: [
            "I'm terribly sorry for…, Please accept my apologies. / Could you please…?, Would you mind …ing?",
          ],
        },
      ],
      keyTerms: ["advice", "opinion", "apology", "request"],
    },
    {
      slug: "writing-paragraph",
      title: "Writing a Paragraph",
      unit: "Writing",
      duration: "2 ساعات",
      summary: "بنية الفقرة: الجملة الموضوع، الجمل الداعمة والخاتمة.",
      objectives: ["Write a well-organised paragraph with linking words"],
      sections: [
        {
          heading: "1. Structure",
          body: [
            "Topic sentence → supporting sentences with details and examples → concluding sentence.",
          ],
        },
        {
          heading: "2. Linking words",
          body: [
            "Addition: moreover, in addition. Contrast: however, on the other hand. Result: therefore, as a result. Sequence: first, then, finally.",
          ],
        },
      ],
      keyTerms: ["topic sentence", "coherence", "linkers", "conclusion"],
    },
  ],
};
