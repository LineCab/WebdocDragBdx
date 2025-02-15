type Scenario = {
    messagesO: { type: "texteVert" | "texteBlanc" | "mediaBlanc" | "audioBlanc"; text: string; src: string; pseudo: string; mp?: string; img?: string; video?: string; mediaType?: "video" | "photo"; transcription?: string;}[];
    responsesO: { text: string; next: string}[];
};

export const orlane: Record<string, Scenario> = {
    start: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: "Salut ! J’ai vu que tu venais d’arriver sur le groupe ! Moi c’est Orlane Dubiez. Je suis photographe pour le milieu queer bordelais. ", src: "/images/orlane.png" }
        ],
        responsesO: [
            { text: "Hey, Ça fait combien de temps que tu fais ça? ", next: "sc1"}
        ]
    },

    sc1: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: "On va dire que ça fait officiellement 1 an que je suis photographe pour ce milieu 🤗", src: "/images/orlane.png" }
        ],
        responsesO: [
            { text: "Oh trop cool ! Est ce que tu peux me montrer quelques photos que tu as prises ?", next: "sc2"}
        ]
    },

    sc2: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: "Oui bien sûr !", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Orlane", text: "", src: "/images/orlane.png", img: "/images/freya.png", video: "/videos/photoOrlane.mp4", transcription: "[Bande sonore]" } 
        ],
        responsesO: [
            { text: "Oh quel travail de dingue ! Merci beaucoup pour le partage de ton travail 🙂", next: "sc3"}
        ]
    },

    sc3: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: "Merci beaucoup !!", src: "/images/orlane.png" }
        ],
        responsesO: [
        ]
    },
};