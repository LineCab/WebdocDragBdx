type Scenario = {
    messagesO: { type: "texteVert" | "texteBlanc" | "mediaBlanc" | "audioBlanc"; text: string; src: string; pseudo: string; mp?: string; img?: string; video?: string; mediaType?: "video" | "photo"; transcription?: string;}[];
    responsesO: { text: string; next: string}[];
};

export const orlaneEs: Record<string, Scenario> = {
    start: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: "¡Hola! Vi que acabas de unirte al grupo. Soy Orlane Dubiez, fotógrafa de la escena queer en Burdeos.", src: "/images/orlane.png" }
        ],
        responsesO: [
            { text: "¿Cuánto tiempo llevas haciendo esto?", next: "sc1"}
        ]
    },

    sc1: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: "Digamos que oficialmente llevo 1 año siendo fotógrafa en este ámbito 🤗", src: "/images/orlane.png" }
        ],
        responsesO: [
            { text: "¡Oh, qué genial! ¿Puedes mostrarme algunas fotos que has tomado?", next: "sc2"}
        ]
    },

    sc2: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: "¡Sí, por supuesto!", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Orlane", text: "", src: "/images/orlane.png", img: "/images/freya.png", video: "/videos/photoOrlane.mp4", transcription: "[Bande sonore]" } 
        ],
        responsesO: [
            { text: "¡Guau, qué trabajo increíble! Muchas gracias por compartir tu trabajo 🙂", next: "sc3"}
        ]
    },

    sc3: {
        messagesO: [
            { type: "texteBlanc", pseudo:"Orlane", text: "¡Muchas gracias!", src: "/images/orlane.png" }
        ],
        responsesO: [
        ]
    },
};