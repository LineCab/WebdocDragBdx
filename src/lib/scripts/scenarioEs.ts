type Scenario = {
    messages: { type: "texteVert" | "texteBlanc" | "mediaBlanc" | "audioBlanc"; text: string; src: string; pseudo: string; mp?: string; img?: string; video?: string; mediaType?: "video" | "photo"; transcription?: string;}[];
    responses: { text: string; next: string}[];
};

export const scenariosEs: Record<string, Scenario> = {
    start: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", text: "¡Hola! Hoy te voy a hacer descubrir la escena y el mundo del Drag en Burdeos a través de sus diferentes familias y colectivos", src: "/images/orlane.png" }
        ],
        responses: [
            { text: "¡Cuéntame más sobre el drag!", next: "defDrag"},
            { text: "¿Qué quieres decir con familias?", next: "famille"}
        ]
    },

    defDrag: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", text: "El drag es un arte de la transformación, una performance de género, pero también una historia de rebelión. Es una escena donde se juega mucho más que un espectáculo. Para muchos, es un espacio de liberación, exploración y reivindicación", src: "/images/orlane.png" },
            { type: "audioBlanc", pseudo:"Freya Kor", src: "/images/freya.png", img: "/audios/freya-le-drag.mp3", transcription: "El drag es una oportunidad artística que puede servir como desarrollo personal o como terapia. Es una ocasión para experimentar otros aspectos, una versión distinta de uno mismo que puede tomar la forma que queramos, cualquier género que queramos. [...] Podemos pensar que ciertos caminos no están destinados para nosotros y es una reinvención de nosotros mismos, de nuestro género, de nuestra realidad, a veces de nuestra sexualidad y nuestro lugar en el mundo. Y hacerlo con purpurina, pelucas y medias, es algo que realmente hace bien", text: ""}
        ],
        responses: [
            { text: "OK, pero ¿qué son entonces las familias y los colectivos?", next: "famille" }
        ]
    },

    famille: {
        messages: [
            { type: "texteBlanc", pseudo:"Nova", text: "Te voy a explicar todo eso", src: "/images/nova.png" },
            { type: "texteBlanc", pseudo:"Nova", text: " Hablamos de House Drag, de casa Drag y de House of Ballroom. Al principio, eran personas que fueron echadas de sus casas solo por ser diferentes y ser queer.", src: "/images/nova.png" },
            { type: "texteBlanc", pseudo:"Nova", text: "En un mundo hostil que conocemos, las houses ofrecen refugio a la comunidad queer. Un hogar, un nombre, una identidad. En Burdeos, este legado persiste. Colectivos dinámicos conservan el espíritu de las houses mientras reinventan sus reglas. Cada casa tiene su propio estilo artístico o especialidad. Por ejemplo, la Familips hace cosas muy familiares con principalmente queens, y TechnoCircus se especializa más en drag de criaturas", src: "/images/nova.png" },
            { type: "texteBlanc", pseudo:"Nova", text: "¡Aquí, todos somos parte de una familia o colectivo diferente! 😊", src: "/images/nova.png" }
        ],
        responses: [
            { text: "Ya lo entiendo mejor. Pero por cierto, ¿el drag tiene algo que ver con la política?", next: "politique"}
        ]
    },

    politique: {
        messages: [
            { type: "texteBlanc", pseudo:"Mofwazée", text: " ¡Heyy, hace poco hice una entrevista en la que hablo sobre el tema, podría interesarte! 😉", src: "/images/mofwazee.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Mofwazée", text: "", src: "/images/mofwazee.png", img: "/images/mofwazee_politique.png", video: "/videos/mofwazée-politique.mp4", transcription: "Entonces, necesariamente hay un vínculo entre el drag y la política. Nuestra propia existencia es política. Yo misma soy política como drag negra. Vengo de las islas... de las colonias, al final. Para mí, es más que político en realidad." }
        ],
        responses: [
            { text: "Vale, gracias, ahora lo tengo mucho más claro", next: "baShow"}
        ]
    },

    baShow: {
        messages: [
            { type: "texteBlanc", pseudo:"Freya Kor", text: "Para entender un poco mejor el mundo del drag, te propongo este tráiler de un show ✨⬇️", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_trailer.png", video: "/videos/trailer.mp4", transcription: "[Banda sonora]" }
        ],
        responses: [
            { text: "Pero, ¿cómo organizáis todo esto?", next: "organisation"},
            { text: "¿Qué pasa exactamente durante un show?", next: "show1"}
        ]
    },

    organisation: {
        messages: [
            { type: "texteBlanc", pseudo:"Bergamote", mp:"bergamote", text: "Ok, te voy a explicar todo eso:", src: "/images/bergamote.png" },
            { type: "texteBlanc", pseudo:"Bergamote", text: "Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nis", src: "/images/bergamote.png" },
        ],
        responses: [
            { text: " ¿Cómo se preparan los artistas?", next: "artiste1"},
            { text: "Desde el punto de vista técnico, ¿cómo se organiza?", next: "technique1"}
        ]
    },

    artiste1: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", mp:"orlane", text: "¡Es más divertido mostrarte su proceso de preparación en vídeo! 🎬", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Orlane", text: "", src: "/images/orlane.png", img: "/images/preparation.jpg", video: "/videos/preparation.mp4", transcription: "Transcription" }
        ],
        responses: [
            { text: "¡Quiero saber cómo se desarrolla un show!", next: "show2"}
        ]
    },

    show2: {
        messages: [
            { type: "texteBlanc", pseudo:"Freya Kor", text: "Las imágenes hablan mejor que las palabras... Te propongo ver esta compilación de shows para darte una visión más global 😊", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_show.png", video: "/videos/shows.mp4", transcription: "[Banda sonora]" },
        ],
        responses: [
            { text: "Desde el punto de vista técnico, ¿cómo se organiza?", next: "technique2"}
        ]
    },

    technique2: {
        messages: [
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "Voy a explicarte rápidamente la organización de los shows.", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_metier_tech.mp3", transcription: "Estábamos 50 en el sitio en el equipo, donde tenías la escenografía, la comunicación, eh... [ ] Bueno, esos son detalles en el sitio, pero también tienes, perdón, me estoy desviando tanto, es enorme. Tienes a las personas en el bar, las personas en la recepción, las personas en el merch, las personas en seguridad. Donde tienes más el perfil de recepción de víctimas, luego al otro lado donde se trata de conversación / mediación. Existen todos esos roles", text: ""},
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "En mi caso, siendo DJ, te voy a explicar cómo lo hago", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_dj.mp3", transcription: "De hecho, comienza escuchando sonidos, dándole me gusta a los sonidos, Shazam, o en realidad lo que hago es preparar una base de datos. Entonces creo una caja, como la llaman, y pongo todos esos sonidos y me encontraba con 100 ~ 200 canciones y las clasificaba por color, por BPM, por clave, por todo eso... Así que mi lado un poco maniático es que al principio de cada canción, cuando la lanzo, está milimetrada y la preparo de antemano", text: ""}
        ],
        responses: [
            { text: "¡Guau, es impresionante! Me gustaría saber más sobre la comunidad drag en general", next: "commudrag"}
        ]
    },



    technique1: {
        messages: [
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "Voy a explicarte rápidamente la organización de los shows.", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_metier_tech.mp3", transcription: "Estábamos 50 en el sitio en el equipo, donde tenías la escenografía, la comunicación, eh... [ ] Bueno, esos son detalles en el sitio, pero también tienes, perdón, me estoy desviando tanto, es enorme. Tienes a las personas en el bar, las personas en la recepción, las personas en el merch, las personas en seguridad. Donde tienes más el perfil de recepción de víctimas, luego al otro lado donde se trata de conversación / mediación. Existen todos esos roles", text: ""},
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "En mi caso, siendo DJ, te voy a explicar cómo lo hago", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_dj.mp3", transcription: "De hecho, comienza escuchando sonidos, dándole me gusta a los sonidos, Shazam, o en realidad lo que hago es preparar una base de datos. Entonces creo una caja, como la llaman, y pongo todos esos sonidos y me encontraba con 100 ~ 200 canciones y las clasificaba por color, por BPM, por clave, por todo eso... Así que mi lado un poco maniático es que al principio de cada canción, cuando la lanzo, está milimetrada y la preparo de antemano", text: ""}
        ],
        responses: [
            { text: "Ok, genial, ¿puedes mostrarme cómo se ve durante un show?", next: "show3"}
        ]
    },

    show3: {
        messages: [
            { type: "texteBlanc", pseudo:"Freya Kor", text: "Las imágenes hablan mejor que las palabras... Te propongo ver esta compilación de shows para darte una visión más global 😊", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_show.png", video: "/videos/shows.mp4", transcription: "[Banda sonora]" },
        ],
        responses: [
            { text: "¡Me encanta el resultado! Pero, ¿cómo hacen los artistas para prepararse?", next: "artiste2"}
        ]
    },

    artiste2: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", mp:"orlane", text: "¡Es más divertido mostrarte su proceso de preparación en vídeo! 🎬", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Orlane", text: "", src: "/images/orlane.png", img: "/images/preparation.jpg", video: "/videos/preparation.mp4", transcription: "Transcription" }
        ],
        responses: [
            { text: "Me gustaría saber más sobre la comunidad.", next: "commudrag"}
        ]
    },



    show1: {
        messages: [
            { type: "texteBlanc", pseudo:"Freya Kor", text: "Las imágenes hablan mejor que las palabras... Te propongo ver esta compilación de shows para darte una visión más global 😊", src: "/images/freya.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Freya Kor", text: "", src: "/images/freya.png", img: "/images/cover_show.png", video: "/videos/shows.mp4", transcription: "[Banda sonora]" },
        ],
        responses: [
            { text: "¡Wow, qué estilazo! ¿Cómo hacen los artistas para prepararse?", next: "artiste3"}
        ]
    },

    artiste3: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", mp:"orlane", text: "¡Es más divertido mostrarte su proceso de preparación en vídeo! 🎬", src: "/images/orlane.png" },
            { type: "mediaBlanc", mediaType: "video", pseudo:"Orlane", text: "", src: "/images/orlane.png", img: "/images/preparation.jpg", video: "/videos/preparation.mp4", transcription: "Transcription" }
        ],
        responses: [
            { text: "La técnica detrás debe ser complicada... ¿Cómo funciona?", next: "technique3"}
        ]
    },

    technique3: {
        messages: [
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "Voy a explicarte rápidamente la organización de los shows.", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_metier_tech.mp3", transcription: "Estábamos 50 en el sitio en el equipo, donde tenías la escenografía, la comunicación, eh... [ ] Bueno, esos son detalles en el sitio, pero también tienes, perdón, me estoy desviando tanto, es enorme. Tienes a las personas en el bar, las personas en la recepción, las personas en el merch, las personas en seguridad. Donde tienes más el perfil de recepción de víctimas, luego al otro lado donde se trata de conversación / mediación. Existen todos esos roles", text: ""},
            { type: "texteBlanc", pseudo:"JoYeuX JoYauX", text: "En mi caso, siendo DJ, te voy a explicar cómo lo hago", src: "/images/jay.png" },
            { type: "audioBlanc", pseudo:"JoYeuX JoYauX", src: "/images/jay.png", img: "/audios/jay_dj.mp3", transcription: "De hecho, comienza escuchando sonidos, dándole me gusta a los sonidos, Shazam, o en realidad lo que hago es preparar una base de datos. Entonces creo una caja, como la llaman, y pongo todos esos sonidos y me encontraba con 100 ~ 200 canciones y las clasificaba por color, por BPM, por clave, por todo eso... Así que mi lado un poco maniático es que al principio de cada canción, cuando la lanzo, está milimetrada y la preparo de antemano", text: ""}
        ],
        responses: [
            { text: "¡Gracias por compartir todo esto!", next: "commudrag"}
        ]
    },

    end: {
        messages: [
            { type: "texteBlanc", pseudo:"Orlane", text: "¡Aquí tienes! Ahora lo sabes todo sobre el mundo del drag y, en particular, sobre el de Burdeos. No dudes en volver a ver los datos compartidos durante nuestro intercambio 😉 Si quieres empezar la aventura desde el principio, tienes un botón de reinicio en los ajustes.", src: "/images/orlane.png" },
            { type: "texteBlanc", pseudo:"Orlane", text: "Esperamos que este formato te haya gustado y no dudes en compartirlo!", src: "/images/orlane.png" }
        ],
        responses: [
        ]
    },
};

