type Scenario = {
    messagesO: { type: "texteVert" | "texteBlanc" | "mediaBlanc" | "audioBlanc"; text: string; src: string; pseudo: string; mp?: string; img?: string; video?: string; mediaType?: "video" | "photo"; transcription?: string;}[];
    responsesO: { text: string; next: string}[];
};

export const orlaneEn: Record<string, Scenario> = {
    start: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: "Hi! I saw that you just joined the group! I'm Orlane Dubiez. I'm a photographer for the queer scene in Bordeaux.", src: "/images/orlane.png" }
        ],
        responsesO: [
            { text: "How long have you been doing this?", next: "sc1"}
        ]
    },

    sc1: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: " Let's say it's been officially a year since I started photographing this scene 🤗", src: "/images/orlane.png" }
        ],
        responsesO: [
            { text: "Oh, that's so cool! Can you show me some pictures you've taken?", next: "sc2"}
        ]
    },

    sc2: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: "Yes, of course!", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Orlane", text: "", src: "/images/orlane.png", img: "/images/freya.png", video: "/videos/photoOrlane.mp4", transcription: "[Bande sonore]" } 
        ],
        responsesO: [
            { text: "Wow, what an amazing job! Thank you so much for sharing your work 🙂", next: "sc3"}
        ]
    },

    sc3: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: "Thank you so much!", src: "/images/orlane.png" }
        ],
        responsesO: [
        ]
    },
};