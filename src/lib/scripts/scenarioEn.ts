type Scenario = {
    messages: { type: "texteVert" | "texteBlanc" | "mediaBlanc" | "audioBlanc"; text: string; src: string; pseudo: string; mp?: string; img?: string; video?: string; mediaType?: "video" | "photo"; transcription?: string;}[];
    responses: { text: string; next: string}[];
};

export const scenariosEn: Record<string, Scenario> = {
    start: {
        messages: [
            { type: "texteBlanc", pseudo: "Orlane", text: "Hi! Today I'll make you discover the scene and the world of drag in Bordeaux beyond its different families and communities!", src: "/images/orlane.png" }
        ],
        responses: [
            { text: "Tell me more about drag!", next: "defDrag" },
            { text: "What do you mean about families?", next: "famille" }
        ]
    },
    
    defDrag: {
        messages: [
            { type: "texteBlanc", pseudo: "Orlane", text: "Drag is an art of transformation, a performance of gender, but also a story of revolt. It's more than just a show. For many, it's a space for liberation, exploration, and protest.", src: "/images/orlane.png" },
            { type: "audioBlanc", pseudo: "Freya Kor", src: "/images/freya.png", img: "/audios/freya-le-drag.mp3", transcription: "Drag is an artistic opportunity that can serve as personal development or therapy. It's an opportunity to experiment a little bit underneath, another version of yourself that can take shape in any way you want, to be any gender you want. [...] We may think that certain paths are not meant for us, and it's a reinvention of ourselves, our gender, our reality, sometimes our sexuality, and our place in the world. And to be able to do it with sequins, wigs, and tights—well, that feels good.", text: "" }
        ],
        responses: [
            { text: "Right, but what are the families and collectives?", next: "famille" }
        ]
    },
    
    famille: {
        messages: [
            { type: "texteBlanc", pseudo: "Nova", text: "Let me explain,", src: "/images/nova.png" },
            { type: "texteBlanc", pseudo: "Nova", text: "People talk about House Drag, we talk about Maison Drag and House of Ballroom. Basically, these were people who were thrown out of their homes because they were just different and queer. So they were taken in.", src: "/images/nova.png" },
            { type: "texteBlanc", pseudo: "Nova", text: "In a hostile world, houses offer a refuge to the queer community. A home, a name, an identity. In Bordeaux, this legacy lives on. Dynamic collectives preserve the spirit of the houses while reinventing their rules. Each house has its own artistic flair or specialty. For example, Familips does very family-oriented stuff with mainly queens, while TechnoCircus specializes more in drag creatures.", src: "/images/nova.png" },
            { type: "texteBlanc", pseudo: "Nova", text: "Here, we're all part of a different family or collective! 😊", src: "/images/nova.png" }
        ],
        responses: [
            { text: "I understand better. But besides, is there a link with politics?", next: "politique" }
        ]
    },
    
    politique: {
        messages: [
            { type: "texteBlanc", pseudo: "Mofwazée", text: "Heyy, not long ago I did an interview where I talked about politics, you might be interested 😉", src: "/images/mofwazee.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo: "Mofwazée", text: "", src: "/images/mofwazee.png", img: "/images/mofwazee.png", video: "/videos/mofwazée-politique.mp4", transcription: "So, there is inevitably a link between drag and politics. Our very existence is political. I myself am political as a Black drag artist. Coming from the islands... from the colonies, in the end. For me, it's more than just political." }
        ],
        responses: [
            { text: "Alright, thanks! That makes things much clearer!", next: "baShow" }
        ]
    },

    baShow: {
        messages: [
            { type: "texteBlanc", pseudo: "Freya Kor", text: "To illustrate the world of drag in a better way, here's a trailer for a show ✨⬇️", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo: "Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_trailer.png", video: "/videos/trailer.mp4", transcription: "[Soundtrack]" }
        ],
        responses: [
            { text: "But how are you organizing all of this?", next: "organisation" },
            { text: "Concretely, what happens during a show?", next: "show1" }
        ]
    },
    
    organisation: {
        messages: [
            { type: "texteBlanc", pseudo: "Bergamote", mp: "bergamote", text: "Ok, I'm going to explain everything to you:", src: "/images/bergamote.png" },
            { type: "texteBlanc", pseudo: "Bergamote", text: "Organizing a drag show is like structuring a theater or dance company. It involves booking suitable venues (such as a concert hall with good technical equipment, as drag shows almost always include music, singing, and/or dancing), while also managing logistics (trains, hotels for guest artists). Additionally, everything must be well-coordinated to ensure the audience has a great experience.", src: "/images/bergamote.png" }
        ],
        responses: [
            { text: "How do the artists prepare?", next: "artiste1" },
            { text: "From a technical point of view, how does it work?", next: "technique1" }
        ]
    },
    
    artiste1: {
        messages: [
            { type: "texteBlanc", pseudo: "Orlane", mp: "orlane", text: "It's more fun to show you their preparation process in a video! 🎬", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo: "Orlane", text: "", src: "/images/orlane.png", img: "/images/preparation.jpg", video: "/videos/preparation.mp4", transcription: "Transcription" }
        ],
        responses: [
            { text: "I want to know how a show is run!", next: "show2" }
        ]
    },
    
    show2: {
        messages: [
            { type: "texteBlanc", pseudo: "Freya Kor", text: "Images speak louder than words... Here's a compilation of different shows to give you a global vision 😊", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo: "Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_show.png", video: "/videos/shows.mp4", transcription: "[Soundtrack]" }
        ],
        responses: [
            { text: "From a technical point of view, how does it work?", next: "technique2" }
        ]
    },
    
    technique2: {
        messages: [
            { type: "texteBlanc", pseudo: "JoYeuX JoYauX", text: "I'll quickly explain how the shows are organized.", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo: "JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_metier_tech.mp3", transcription: "There were 50 of us on site, handling scenography, communication, [...] and many other things. You have people at the bar, at reception, at the merch stand, at security. There are all these roles.", text: "" },
            { type: "texteBlanc", pseudo: "JoYeuX JoYauX", text: "As a DJ, I'll explain how I do it.", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo: "JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_dj.mp3", transcription: "It all starts with listening to tracks, liking them, Shazaming... I create a database of 100-200 songs, sort them by color, BPM, key, etc. I meticulously prepare everything in advance.", text: "" }
        ],
        responses: [
            { text: "Waw, that's impressive! Thanks for sharing!", next: "end"}
        ]
    },


    technique1: {
        messages: [
            { type: "texteBlanc", pseudo: "JoYeuX JoYauX", text: "I'll quickly explain how the shows are organized.", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo: "JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_metier_tech.mp3", transcription: "There were 50 of us on site, handling scenography, communication, [...] and many other things. You have people at the bar, at reception, at the merch stand, at security. There are all these roles.", text: "" },
            { type: "texteBlanc", pseudo: "JoYeuX JoYauX", text: "As a DJ, I'll explain how I do it.", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo: "JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_dj.mp3", transcription: "It all starts with listening to tracks, liking them, Shazaming... I create a database of 100-200 songs, sort them by color, BPM, key, etc. I meticulously prepare everything in advance.", text: "" }
        ],
        responses: [
            { text: "Ok great, can you show me what it looks like during a show?", next: "show3"}
        ]
    },

    show3: {
        messages: [
            { type: "texteBlanc", pseudo: "Freya Kor", text: "Images speak louder than words... Here's a compilation of different shows to give you a global vision 😊", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo: "Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_show.png", video: "/videos/shows.mp4", transcription: "[Soundtrack]" }
        ],
        responses: [
            { text: "I love the result! But how do the artists prepare?", next: "artiste2"}
        ]
    },

    artiste2: {
        messages: [
            { type: "texteBlanc", pseudo: "Orlane", mp: "orlane", text: "It's more fun to show you their preparation process in a video! 🎬", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo: "Orlane", text: "", src: "/images/orlane.png", img: "/images/preparation.jpg", video: "/videos/preparation.mp4", transcription: "Transcription" }
        ],
        responses: [
            { text: "Thanks for sharing!", next: "end"}
        ]
    },



    show1: {
        messages: [
            { type: "texteBlanc", pseudo: "Freya Kor", text: "Images speak louder than words... Here's a compilation of different shows to give you a global vision 😊", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo: "Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_show.png", video: "/videos/shows.mp4", transcription: "[Soundtrack]" }
        ],
        responses: [
            { text: "Wow, so cool! How do the artists prepare?", next: "artiste3"}
        ]
    },

    artiste3: {
        messages: [
            { type: "texteBlanc", pseudo: "Orlane", mp: "orlane", text: "It's more fun to show you their preparation process in a video! 🎬", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo: "Orlane", text: "", src: "/images/orlane.png", img: "/images/preparation.jpg", video: "/videos/preparation.mp4", transcription: "Transcription" }
        ],
        responses: [
            { text: "The technical side must be complicated... How does it work?", next: "technique3"}
        ]
    },

    technique3: {
        messages: [
            { type: "texteBlanc", pseudo: "JoYeuX JoYauX", text: "I'll quickly explain how the shows are organized.", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo: "JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_metier_tech.mp3", transcription: "There were 50 of us on site, handling scenography, communication, [...] and many other things. You have people at the bar, at reception, at the merch stand, at security. There are all these roles.", text: "" },
            { type: "texteBlanc", pseudo: "JoYeuX JoYauX", text: "As a DJ, I'll explain how I do it.", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo: "JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_dj.mp3", transcription: "It all starts with listening to tracks, liking them, Shazaming... I create a database of 100-200 songs, sort them by color, BPM, key, etc. I meticulously prepare everything in advance.", text: "" }
        ],
        responses: [
            { text: "Thanks for sharing!", next: "end"}
        ]
    },

    end: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", text: "Voila ! Now you know everything there is to know about the world of drag, and Bordeaux in particular. Feel free to review the media shared during our exchange 😉 If you'd like to start the adventure from the beginning, there's a reset button in the settings.", src: "/images/DSC_0068.png" },
            { type: "texteBlanc", pseudo:"Orlane", text: "We hope you enjoyed this format and don't hesitate to share it with us!", src: "/images/DSC_0068.png" }
        ],
        responses: [
        ]
    },
};

