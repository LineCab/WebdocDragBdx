type Scenario = {
    messages: { type: "texteVert" | "texteBlanc" | "mediaBlanc" | "audioBlanc"; text: string; src: string; pseudo: string; mp?: string; img?: string; video?: string; mediaType?: "video" | "photo"; transcription?: string;}[];
    responses: { text: string; next: string}[];
};

export const scenarios: Record<string, Scenario> = {
    start: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", text: "Hello ! Aujourd'hui je te fais découvrir la scène et le monde du Drag à Bordeaux à travers ses différentes familles et collectivités !", src: "/images/orlane.png" }
        ],
        responses: [
            { text: "Dis m'en plus sur le drag !", next: "defDrag"},
            { text: "Comment ça des familles ?", next: "famille"}
        ]
    },

    defDrag: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", text: "Le drag est un art de la transformation, une performance du genre, mais aussi une histoire de révolte. C’est une scène où se joue bien plus qu’un spectacle. Pour beaucoup, c’est un espace de libération, d’exploration et de revendication", src: "/images/orlane.png" },
            { type: "audioBlanc", pseudo:"Freya Kor", src: "/images/freya.png", img: "/audios/freya-le-drag.mp3", transcription: "Le drag pour moi, c’est une opportunité artistique qui peut servir comme développement personnel ou comme thérapie. C'est une occasion en fait de pouvoir expérimenter un peu d'autres dessous, une autre version de soi-même qui peut prendre forme de la manière dont on veut, dans la direction qu’on veut qu'on soit, dans n'importe quel genre qu'on veut. Et peut nous ouvrir une voie qui de base, on peut penser que certaines voies ne peuvent pas êtres destinées pour nous et c'est une réinvention quelque part de nous mêmes, de notre genre, de notre réalité, des fois de notre sexualité et de notre place dans le monde. Et de pouvoir le faire avec des paillettes, des perruques et des collants, et bah ça fait du bien", text: ""}
        ],
        responses: [
            { text: "OK, mais du coup c’est quoi les familles et collectivités ?", next: "famille" }
        ]
    },

    famille: {
        messages: [
            { type: "texteBlanc", pseudo:"Nova", text: "Je vais t’expliquer tout ça,", src: "/images/nova.png" },
            { type: "texteBlanc", pseudo:"Nova", text: "On parle de House Drag, nous de maison Drag et de House of Ballroom. A la base, c'était des gens qui étaient jetés de chez eux parce qu'ils étaient juste différents et queer. Du coup ont été recueillis", src: "/images/nova.png" },
            { type: "texteBlanc", pseudo:"Nova", text: "Dans un monde hostile, les houses offrent un refuge à la communauté queer. Un foyer, un nom, une identité. À Bordeaux, cet héritage perciste. Des collectifs dynamiques concervent l'esprit des houses tout en réinventant leurs règles. Chaque maison à sa patte artistique ou sa spécialité. Par exemple, la familips fait des choses très familiales avec principalement des queens et TechnoCircus sont plus spécialicés dans le drag créatures", src: "/images/nova.png" },
            { type: "texteBlanc", pseudo:"Nova", text: "Ici, nous faisons tous partie d’une famille ou d'un collectif différent ! 😊 ", src: "/images/nova.png" }
        ],
        responses: [
            { text: "Je comprends mieux. Mais d'ailleurs, est-ce que le drag a un lien avec la politique ?", next: "politique"}
        ]
    },

    politique: {
        messages: [
            { type: "texteBlanc", pseudo:"Mofwazée", text: "Heyy, il y a pas longtemps j'ai fais une interview où je parle de politique, ça pourrait t'intéresser 😉", src: "/images/mofwazee.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Mofwazée", text: "", src: "/images/mofwazee.png", img: "/images/mofwazee_politique.png", video: "/videos/mofwazée-politique.mp4", transcription: "Alors il y a forcément un lien entre drag et politique. Notre existence-même est politiques. Je suis moi-même politique en tant que drag noire. Issu des îles... des colonies au final. Pour moi c'est plus que politique en fait" }
        ],
        responses: [
            { text: "D'accord, merci c'est beaucoup plus clair !", next: "baShow"}
        ]
    },

    baShow: {
        messages: [
            { type: "texteBlanc", pseudo:"Freya Kor", text: "Pour comprendre un peu mieux le monde du drag, je te propose cette bande annonce d'un show ✨⬇️ ", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_trailer.png", video: "/videos/trailer.mp4", transcription: "" }
        ],
        responses: [
            { text: "Mais comment vous faites pour organiser tout ça ?", next: "organisation"},
            { text: "Concrètement il se passe quoi pendant un show ?", next: "show1"}
        ]
    },

    organisation: {
        messages: [
            { type: "texteBlanc", pseudo:"Bergamote", mp:"bergamote", text: "Ok je vais t'expliquer tout ça :", src: "/images/bergamote.png" },
            { type: "texteBlanc", pseudo:"Bergamote", text: "L'organisation d'un show drag implique de structurer l'événement comme une compagnie de théâtre ou de danse, en réservant des salles adaptées (comme une salle de concert avec une bonne technique, du bon matériel, car les show de Drag sont presque systématiquement accompagnés de musique, de chant et/ou de danse), tout en gérant les aspects logistiques (trains, hôtels pour les artistes invités). De plus, il faut s'assurer que tout est bien coordonné pour que le public ait une expérience réussie.", src: "/images/bergamote.png" },
        ],
        responses: [
            { text: "Comment les artistes se préparent ?", next: "artiste1"},
            { text: "D'un point du vu technique comment ça se passe ?", next: "technique1"}
        ]
    },

    artiste1: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", mp:"orlane", text: "C'est plus sympa de te faire découvrir leur processus de préparation en vidéo !🎬", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Orlane", text: "", src: "/images/orlane.png", img: "/images/preparation.jpg", video: "/videos/preparation.mp4", transcription: "" }
        ],
        responses: [
            { text: "Je veux savoir comment se déroule un show !", next: "show2"}
        ]
    },

    show2: {
        messages: [
            { type: "texteBlanc", pseudo:"Freya Kor", text: "Les images parlent mieux que les mots ... Je te propose de visionner cette compilation de show afin de te donner une vision plus gobale 😊", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_show.png", video: "/videos/shows.mp4", transcription: "" },
        ],
        responses: [
            { text: "D'un point du vu technique comment ça se passe ?", next: "technique2"}
        ]
    },

    technique2: {
        messages: [
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "Je vais t'expliquer rapidement l'organisation des shows", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_metier_tech.mp3", transcription: "On était 50 sur site de l'équipe ou t'as du coup la sénographie, t’as la communication t'as heu [...] Fin ça c’est des trucs sur site mais t’as aussi pardons mais... je m'égare tellement c’est énorme. Tu as les gens au bar, t’as les gens à l'accueil, t’as les gens au merch t’as les gens à la sécurité. Là où t’as plutôt le profil accueil des victimes ensuite à l'autre côté où c’est discuter / médiation. Il y a tous ces rôles là. ", text: ""},
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "Pour ma part, étant DJ je vais t'expliquer comment je fais", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_dj.mp3", transcription: "En fait ça va commencer par écouter des sons, liker des sons, shazam ou en fait c'est ça je vais préparer une banque de données. Donc je vais créer une boîte, comme ils appellent ça, et je mets tous ces sons et je me retrouvais avec 100 ~ 200 musiques et je l'ai tri par couleur par bpm par clé par tout ça... Voilà du coup mon côté vraiment un peu maniaque c'est que tout début de son quand je lance un son c'est millimétré et je le prépare en amont", text: ""}
        ],
        responses: [
            { text: "Waw, c'est impressionnant. J'aimerais bien en savoir plus sur la communauté drag en général", next: "commudrag"}
        ]
    },



    technique1: {
        messages: [
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "Je vais t'expliquer rapidement l'organisation des shows", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_metier_tech.mp3", transcription: "On était 50 sur site de l'équipe ou t'as du coup la sénographie, t’as la communication t'as heu [...] Fin ça c’est des trucs sur site mais t’as aussi pardons mais... je m'égare tellement c’est énorme. Tu as les gens au bar, t’as les gens à l'accueil, t’as les gens au merch t’as les gens à la sécurité. Là où t’as plutôt le profil accueil des victimes ensuite à l'autre côté où c’est discuter / médiation. Il y a tous ces rôles là. ", text: ""},
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "Pour ma part, étant DJ je vais t'expliquer comment je fais", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_dj.mp3", transcription: "En fait ça va commencer par écouter des sons, liker des sons, shazam ou en fait c'est ça je vais préparer une banque de données. Donc je vais créer une boîte, comme ils appellent ça, et je mets tous ces sons et je me retrouvais avec 100 ~ 200 musiques et je l'ai tri par couleur par bpm par clé par tout ça... Voilà du coup mon côté vraiment un peu maniaque c'est que tout début de son quand je lance un son c'est millimétré et je le prépare en amont", text: ""}
        ],
        responses: [
            { text: "Ok super, est-ce que tu peux me montrer ce que ça donne lors d'un show ?", next: "show3"}
        ]
    },

    show3: {
        messages: [
            { type: "texteBlanc", pseudo:"Freya Kor", text: "Les images parlent mieux que les mots ... Je te propose de visionner cette compilation de show afin de te donner une vision plus gobale 😊", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_show.png", video: "/videos/shows.mp4", transcription: "" },
        ],
        responses: [
            { text: "J'adore le rendu ! Mais comment les artistes font pour se prépraer ?", next: "artiste2"}
        ]
    },

    artiste2: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", mp:"orlane", text: "C'est plus sympa de te faire découvrir leur processus de préparation en vidéo !🎬", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Orlane", text: "", src: "/images/orlane.png", img: "/images/preparation.jpg", video: "/videos/preparation.mp4", transcription: "" }
        ],
        responses: [
            { text: "J'aimerais bien en savoir plus sur la communauté", next: "end"}
        ]
    },



    show1: {
        messages: [
            { type: "texteBlanc", pseudo:"Freya Kor", text: "Les images parlent mieux que les mots ... Je te propose de visionner cette compilation de show afin de te donner une vision plus gobale 😊", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_show.png", video: "/videos/shows.mp4", transcription: "" },
        ],
        responses: [
            { text: "Waw, trop stylé ! Comment les artistes font pour se préparer ?", next: "artiste3"}
        ]
    },

    artiste3: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", mp:"orlane", text: "C'est plus sympa de te faire découvrir leur processus de préparation en vidéo !🎬", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Orlane", text: "", src: "/images/orlane.png", img: "/images/preparation.jpg", video: "/videos/preparation.mp4", transcription: "" }
        ],
        responses: [
            { text: "La technique derrière doit être compliquée... Comment ça se passe ?", next: "technique3"}
        ]
    },

    technique3: {
        messages: [
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "Je vais t'expliquer rapidement l'organisation des shows", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_metier_tech.mp3", transcription: "On était 50 sur site de l'équipe ou t'as du coup la sénographie, t’as la communication t'as heu [...] Fin ça c’est des trucs sur site mais t’as aussi pardons mais... je m'égare tellement c’est énorme. Tu as les gens au bar, t’as les gens à l'accueil, t’as les gens au merch t’as les gens à la sécurité. Là où t’as plutôt le profil accueil des victimes ensuite à l'autre côté où c’est discuter / médiation. Il y a tous ces rôles là. ", text: ""},
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "Pour ma part, étant DJ je vais t'expliquer comment je fais", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_dj.mp3", transcription: "En fait ça va commencer par écouter des sons, liker des sons, shazam ou en fait c'est ça je vais préparer une banque de données. Donc je vais créer une boîte, comme ils appellent ça, et je mets tous ces sons et je me retrouvais avec 100 ~ 200 musiques et je l'ai tri par couleur par bpm par clé par tout ça... Voilà du coup mon côté vraiment un peu maniaque c'est que tout début de son quand je lance un son c'est millimétré et je le prépare en amont", text: ""}
        ],
        responses: [
            { text: "Merci pour tous ces partages !", next: "end"}
        ]
    },

    end: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", text: "Voilà ! Maintenant tu sais tout sur le monde du drag et en particulier celui de Bordeaux. N'hésite pas à revisionner les médias partagés lors de notre échange 😉 Si tu souhaite recommencer l'aventure du début, tu as un bouton réinitialiser dans les paramètres", src: "/images/orlane.png" },
            { type: "texteBlanc", pseudo:"Orlane", text: "On espère que ce format t'as plu et ne te prive pas de la partager !", src: "/images/orlane.png" }
        ],
        responses: [
        ]
    },
};

