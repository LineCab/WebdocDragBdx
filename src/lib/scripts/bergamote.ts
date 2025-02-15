type Scenario = {
    messagesB: { type: "texteVert" | "texteBlanc" | "mediaBlanc" | "audioBlanc"; text: string; src: string; pseudo: string; mp?: string; img?: string; video?: string; mediaType?: "video" | "photo"; transcription?: string;}[];
    responsesB: { text: string; next: string}[];
};

export const bergamote: Record<string, Scenario> = {
    start: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "Salut ! Bienvenue sur le groupe ! Je suis Bergamote Lips.  ", src: "/images/bergamote.png" }
        ],
        responsesB: [
            { text: "Pourrais-tu m’en dire plus sur ton parcours ?", next: "sc1"}
        ]
    },

    sc1: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "Bien sûr, pas de soucis ! Je suis arrivée à Bordeaux il y a seize ans après mon bac pour faire des études de théâtre que j'ai fait au conservatoire. Et ensuite j'ai commencé à bosser dans des compagnies. Et de fil en aiguille, j'ai découvert le drag et je m'y suis mise. Et on a créé notre compagnie de drag !", src: "/images/bergamote.png" },
            { type: "texteBlanc", pseudo:"Bergamote", text: "Ce qui est cool c’est qu'il n'y a pas d'école de drag, pas de formation pour le drag. Ce n'est pas du tout un art académique. Pas comme le théâtre, la danse, le chant etc. Et donc y a une liberté de ouf et c'est ça qui est cool, c'est de se servir de qui on est et intimement et de nos compétences dans la vie pour les mettre au service du drag.", src: "/images/bergamote.png" }
        ],
        responsesB: [
            { text: "Est ce que c’est compliqué de trouver tout le temps de nouvelles inspirations?", next: "sc2"}
        ]
    },

    sc2: {
        messagesB: [
            { type: "audioBlanc", pseudo:"Bergamote", src: "/images/bergamote.png", img: "/audios/bergamote.mp3", transcription: "Non, non, vraiment. Justement, ce que je trouve cool c’est que je suis quand même payée à me costumer et à faire des trucs sur scène donc non en vrai ça va. J'aime trop être à plusieurs sur scène et du coup souvent l'inspiration, elle vient de mon partenaire. Je me dis que cette personne son universe c’est ça donc vas y je vais explorer cet univers là et du coup ça m’inspire pour créer un look ou trouver la musique qui ira bien ou le style de danse quoi", text: ""}
        ],
        responsesB: [
            { text: "Où est-ce que tu trouves les vêtements que tu portes pendant un show", next: "sc3"}
        ]
    },

    sc3: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "Je trouve tout sur Vinted ou dans des fripes ! Que de la seconde main.", src: "/images/bergamote.png" },
        ],
        responsesB: [
            { text: "Tu les réutilises et tu les garde ?", next: "sc4"}
        ]
    },

    sc4: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "Oui, je les garde ! Avec la famille dont je fais partie, la familips,  on s’est engagé à créer de nouvelles tenues pour les gros formats comme les Lips and Love. Par contre, pour les plus petits formats, on ne crée pas de nouvelles tenues : on réutilise et mélange les anciennes tenues. 😌", src: "/images/bergamote.png" },
        ],
        responsesB: [
        ]
    }
};