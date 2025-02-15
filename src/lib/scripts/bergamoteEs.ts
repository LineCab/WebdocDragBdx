type Scenario = {
    messagesB: { type: "texteVert" | "texteBlanc" | "mediaBlanc" | "audioBlanc"; text: string; src: string; pseudo: string; mp?: string; img?: string; video?: string; mediaType?: "video" | "photo"; transcription?: string;}[];
    responsesB: { text: string; next: string}[];
};

export const bergamoteEs: Record<string, Scenario> = {
    start: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "¡Hola! ¡Bienvenida al grupo! Soy Bergamote Lips.", src: "/images/bergamote.png" }
        ],
        responsesB: [
            { text: "¿Podrías contarme más sobre tu trayectoria?", next: "sc1"}
        ]
    },

    sc1: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "¡Por supuesto, sin problema! Llegué a Burdeos hace dieciséis años después de terminar la secundaria para estudiar teatro en el conservatorio. Luego comencé a trabajar en compañías de teatro. Con el tiempo, descubrí el drag y me metí en este mundo. ¡Y creamos nuestra propia compañía de drag!", src: "/images/bergamote.png" },
            { type: "texteBlanc", pseudo:"Bergamote", text: "Lo genial es que no hay una escuela de drag, ni formación específica para ello. No es un arte académico como el teatro, la danza o el canto. Así que hay una libertad increíble, y eso es lo mejor: utilizar quién eres, tus experiencias y habilidades en la vida para ponerlas al servicio del drag.", src: "/images/bergamote.png" }
        ],
        responsesB: [
            { text: "¿Es difícil encontrar nuevas inspiraciones todo el tiempo?", next: "sc2"}
        ]
    },

    sc2: {
        messagesB: [
            { type: "audioBlanc", pseudo:"Bergamote", src: "/images/bergamote.png", img: "/audios/bergamote.mp3", transcription: "No, no, de verdad. Justamente, lo que me parece genial es que me pagan por disfrazarme y hacer cosas en el escenario, así que en realidad, todo bien. Me encanta estar en escena con otras personas, y muchas veces mi inspiración viene de mi compañero. Pienso en su universo, en lo que lo define, y luego exploro ese mundo. Eso me inspira para crear un look, encontrar la música adecuada o elegir el estilo de baile que encaje", text: ""}
        ],
        responsesB: [
            { text: "¿Dónde encuentras la ropa que usas en los shows?", next: "sc3"}
        ]
    },

    sc3: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "¡Lo encuentro todo en Vinted o en tiendas de segunda mano! Solo ropa de segunda mano", src: "/images/bergamote.png" },
        ],
        responsesB: [
            { text: "¿Las reutilizas y las guardas?", next: "sc4"}
        ]
    },

    sc4: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "¡Sí, las guardo! Con mi familia drag, la Familips, nos comprometimos a crear nuevos atuendos para los eventos grandes como Lips and Love. Sin embargo, para los formatos más pequeños, no creamos nuevos atuendos: reutilizamos y combinamos los antiguos. 😌", src: "/images/bergamote.png" },
        ],
        responsesB: [
        ]
    }
};