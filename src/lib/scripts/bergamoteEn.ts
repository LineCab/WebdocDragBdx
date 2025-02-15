type Scenario = {
    messagesB: { type: "texteVert" | "texteBlanc" | "mediaBlanc" | "audioBlanc"; text: string; src: string; pseudo: string; mp?: string; img?: string; video?: string; mediaType?: "video" | "photo"; transcription?: string;}[];
    responsesB: { text: string; next: string}[];
};

export const bergamoteEn: Record<string, Scenario> = {
    start: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "Hi! Welcome to the group! I'm Bergamote Lips.", src: "/images/bergamote.png" }
        ],
        responsesB: [
            { text: "Could you tell me more about your journey?", next: "sc1"}
        ]
    },

    sc1: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "Of course, no problem! I moved to Bordeaux sixteen years ago after high school to study theater at the conservatory. Then I started working with theater companies. Over time, I discovered drag and got into it. And we created our own drag company!", src: "/images/bergamote.png" },
            { type: "texteBlanc", pseudo:"Bergamote", text: "The cool thing is that there’s no drag school, no formal training for drag. It’s not an academic art like theater, dance, or singing. So there's an incredible amount of freedom, and that’s what’s great—you use who you are, your personal experiences, and your skills in life to serve drag", src: "/images/bergamote.png" }
        ],
        responsesB: [
            { text: "Is it difficult to constantly find new inspirations?", next: "sc2"}
        ]
    },

    sc2: {
        messagesB: [
            { type: "audioBlanc", pseudo:"Bergamote", src: "/images/bergamote.png", img: "/audios/bergamote.mp3", transcription: "No, no, really. Actually, what I find cool is that I still get paid to dress up and perform on stage, so honestly, it’s fine. I love being on stage with others, and most of the time, my inspiration comes from my partner. I think about their universe, what defines them, and then I explore that world. That inspires me to create a look, find the right music, or choose the dance style that fits", text: ""}
        ],
        responsesB: [
            { text: "Where do you find the clothes you wear for a show?", next: "sc3"}
        ]
    },

    sc3: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "I find everything on Vinted or in thrift stores! Only second-hand.", src: "/images/bergamote.png" },
        ],
        responsesB: [
            { text: "Do you reuse them and keep them?", next: "sc4"}
        ]
    },

    sc4: {
        messagesB: [
            { type: "texteBlanc", pseudo:"Bergamote", text: "Yes, I keep them! With my drag family, the Familips, we’ve committed to creating new outfits for big events like Lips and Love. However, for smaller shows, we don’t create new outfits—we reuse and mix old ones 😌", src: "/images/bergamote.png" },
        ],
        responsesB: [
        ]
    }
};