import type { QuizMap } from "./types";

export const francaisQuizzes: QuizMap = {
  "le-recit-realiste": [
    {
      q: "Le récit réaliste cherche à :",
      choices: ["représenter la réalité fidèlement", "créer un monde magique", "faire rire", "prédire l'avenir"],
      answer: 0,
    },
    {
      q: "Un auteur majeur du réalisme est :",
      choices: ["Balzac", "Molière", "Ronsard", "La Fontaine"],
      answer: 0,
    },
    {
      q: "La description dans le récit réaliste sert surtout à :",
      choices: ["ancrer l'histoire dans un cadre vraisemblable", "ralentir sans raison", "amuser", "cacher le sens"],
      answer: 0,
    },
  ],
  "les-temps-du-recit": [
    { q: "Le temps de l'arrière-plan et de la description est :", choices: ["l'imparfait", "le passé simple", "le futur", "l'impératif"], answer: 0 },
    { q: "Le passé simple exprime :", choices: ["une action ponctuelle de premier plan", "une habitude", "une description", "un ordre"], answer: 0 },
    { q: "« Il marchait quand il tomba » : « tomba » est au :", choices: ["passé simple", "imparfait", "présent", "conditionnel"], answer: 0 },
  ],
  "les-figures-de-style": [
    { q: "« Il est fort comme un lion » est :", choices: ["une comparaison", "une métaphore", "une hyperbole", "une litote"], answer: 0 },
    { q: "La métaphore est une comparaison :", choices: ["sans outil de comparaison", "avec « comme »", "négative", "ironique"], answer: 0 },
    { q: "L'hyperbole consiste à :", choices: ["exagérer", "atténuer", "répéter", "opposer"], answer: 0 },
  ],
  "le-theatre": [
    { q: "Les paroles prononcées par les personnages forment :", choices: ["le dialogue", "la didascalie", "le narrateur", "le résumé"], answer: 0 },
    { q: "Les didascalies sont :", choices: ["des indications scéniques", "des répliques", "des rimes", "des titres"], answer: 0 },
    { q: "Un long discours d'un personnage seul s'appelle :", choices: ["un monologue", "une tirade collective", "une strophe", "une scène"], answer: 0 },
  ],
  "la-nouvelle-fantastique": [
    { q: "Le fantastique repose sur :", choices: ["l'hésitation entre réel et surnaturel", "la certitude magique", "l'humour", "la documentation"], answer: 0 },
    { q: "Une nouvelle se caractérise par :", choices: ["sa brièveté et sa chute", "sa longueur", "ses nombreux personnages", "ses vers"], answer: 0 },
    { q: "Un auteur célèbre de nouvelles fantastiques :", choices: ["Maupassant", "Zola", "Hugo", "Rousseau"], answer: 0 },
  ],
  "grammaire-subordonnees": [
    { q: "« Je sais qu'il viendra » contient une subordonnée :", choices: ["complétive", "relative", "circonstancielle de temps", "de but"], answer: 0 },
    { q: "La subordonnée relative est introduite par :", choices: ["un pronom relatif", "une conjonction de coordination", "un adverbe", "une préposition"], answer: 0 },
    { q: "« Il part parce qu'il est tard » exprime :", choices: ["la cause", "le but", "la conséquence", "l'opposition"], answer: 0 },
  ],
  "production-ecrite": [
    { q: "Un texte argumentatif contient :", choices: ["une thèse et des arguments", "seulement une description", "des dialogues", "des rimes"], answer: 0 },
    { q: "Un connecteur logique de conclusion est :", choices: ["enfin / donc", "d'abord", "ensuite", "car"], answer: 0 },
    { q: "Avant de rédiger, il faut :", choices: ["établir un plan", "écrire au hasard", "copier un texte", "compter les mots"], answer: 0 },
  ],
};

export const anglaisQuizzes: QuizMap = {
  "tenses-review": [
    { q: "Choose the correct sentence:", choices: ["She has lived here since 2015.", "She lives here since 2015.", "She living here since 2015.", "She live here since 2015."], answer: 0 },
    { q: "'I was watching TV when he called.' The tense of 'was watching' is:", choices: ["past continuous", "present perfect", "past simple", "future"], answer: 0 },
    { q: "We use the present simple for:", choices: ["habits and facts", "actions happening now only", "finished past actions", "future plans only"], answer: 0 },
  ],
  conditionals: [
    { q: "'If it rains, I ___ at home.' :", choices: ["will stay", "stayed", "would have stayed", "stay not"], answer: 0 },
    { q: "The second conditional describes:", choices: ["an unreal present situation", "a real future", "a past regret", "a general truth"], answer: 0 },
    { q: "'If I had studied, I would have passed' is the:", choices: ["third conditional", "zero conditional", "first conditional", "second conditional"], answer: 0 },
  ],
  "passive-voice": [
    { q: "Passive of 'They build houses':", choices: ["Houses are built.", "Houses build.", "Houses were build.", "Houses are building."], answer: 0 },
    { q: "The passive is formed with:", choices: ["be + past participle", "have + infinitive", "do + verb", "will + verb"], answer: 0 },
    { q: "We use the passive when:", choices: ["the agent is unknown or unimportant", "we want to name the doer", "we tell a joke", "we ask a question"], answer: 0 },
  ],
  "reported-speech": [
    { q: "He said, 'I am tired.' → He said (that) he ___ tired.", choices: ["was", "is", "will be", "were"], answer: 0 },
    { q: "In reported speech, 'tomorrow' becomes:", choices: ["the next day", "yesterday", "today", "last day"], answer: 0 },
    { q: "'She asked me where I lived' reports:", choices: ["a question", "an order", "an exclamation", "an offer"], answer: 0 },
  ],
  "functions-communication": [
    { q: "To make a polite request you say:", choices: ["Could you please...?", "Give me that!", "You must now.", "I want it."], answer: 0 },
    { q: "To give advice we often use:", choices: ["should", "must not ever", "will", "can't"], answer: 0 },
    { q: "An appropriate reply to 'Thank you' is:", choices: ["You're welcome.", "Never mind me.", "Of course not.", "Sorry?"], answer: 0 },
  ],
  "writing-paragraph": [
    { q: "A paragraph usually begins with:", choices: ["a topic sentence", "the conclusion", "an example", "a quotation"], answer: 0 },
    { q: "Supporting sentences give:", choices: ["details and examples", "the title", "a new topic", "the date"], answer: 0 },
    { q: "A good linking word to add ideas is:", choices: ["moreover", "however", "although", "instead"], answer: 0 },
  ],
};
