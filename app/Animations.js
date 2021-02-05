/**
 *
 * animation_FadeIn
 *
 * Ejemplo de animación. Todas las animaciones tienen siempre 3 pasos:
 *       a. Seleccionamos los elementos a animar
 *       b. Hemos visto que anime se comporta mejor con CSS declarado en el atributo style del HTML
 *          Por lo tanto, si queremos hacer alguna animación, podemos iniciar los valores con anime.set
 *       c. Animamos, con un timeline mejor, para poder concatenar animaciones...
 *       d. Si queremos meter alguna función después de animar podemos meter el callback complete o usar promesas...
 *
 *
 */
const animation_FadeIn = () => {
    // Selecciona elementos a animar
    const splash = GAME_UI.pages.splash;
    const title = splash.querySelector("h1");

    // Necesitas meter algo de CSS antes de la animación??
    anime.set(splash, {
        visibility: "visible",
        opacity: 0,
    });
    anime.set(title, {
        opacity: 0,
        translateY: 50,
    });

    // Anima!
    animation_layout = anime.timeline({
        duration: 500,
        easing: "easeInOutSine",
    });

    animation_layout
        .add({
            targets: [splash],
            opacity: 1,
        })
        .add(
            {
                targets: [title],
                opacity: 1,
                translateY: 0,
            },
            "-=200"
        );
};

const animation_MenuToMain = (getTo) => {
    // Selecciona elementos a animar
    const from = document.querySelector("#swiper_page");
    const to = document.querySelector("#main_page");

    // Necesitas meter algo de CSS antes de la animación??
    anime.set(to, {
        visibility: "visible",
        translateY: "-100%",
        opacity: 0,
    });

    // Anima!
    animation_layout = anime.timeline({
        duration: 750,
        easing: "easeInOutSine",
    });

    animation_layout
        .add({
            targets: [from],
            translateY: "100%",
            opacity: 0,
        })

        .add(
            {
                targets: [to],
                translateY: "0%",
                opacity: 1,
            },
            "-=750"
        );

    animation_layout.finished.then(() => {
        game = new Game();
        game.start();
    });

    //Callback o promesas
};

/**
 * El resto de animaciones las construyes tú.
 * Recuerda que puedes guardar las animaciones del layout
 * en la variable global animation
 */
const animation_SplashToMenu = () => {
    // Selecciona elementos a animar
    const from = GAME_UI.pages.splash;
    const to = GAME_UI.pages.swiperContainer;

    let animation_logo1 = document.querySelector('.animate_logo1')
    let animation_logo2 = document.querySelector('.animate_logo2')
    let animation_logo3 = document.querySelector('.animate_logo3')

    // Necesitas meter algo de CSS antes de la animación??
    anime.set(to, {
        visibility: "visible",
        translateY: "100%",
        opacity: 0,
    });

    // Anima!
    animation_layout = anime.timeline({
        duration: 750,
        easing: "easeInOutSine",
    });
    animation_layout
        .add({
            targets: [from],
            translateY: "-100%",
            opacity: 0,
        })
        .add(
            {
                targets: [to],
                translateY: 0,
                opacity: 1,
            },
            "-=750"
        )
        .add({
            targets: [animation_logo1, animation_logo3],

            duration: 1500,
            delay: 300,
            direction: 'alternate',
            loop: 3,
            endDelay: 100,
            easing: 'easeInOutSine',

            translateX: [-150, 150, -150, 0] 
        })
        .add({
            targets: [animation_logo2],

            duration: 1500,
            delay: 300,
            direction: 'alternate',
            loop: 3,
            endDelay: 100,
            easing: 'easeInOutSine',

            translateX: [150, -150, 150, 0] 
        },"-=1900"
        );
};

/**
 *
 * Ejemplo de un popup, como vemos, es lo mismo....
 */
const animation_PopupPause = () => {
    const popup = document.querySelector("#modal_pause_window");

    anime.set(popup, {
        translateY: "20%",
        opacity: 0,
        visibility: "visible",
    });

    animation_layout = anime.timeline({
        duration: 300,
        easing: "easeOutQuad",
    });

    animation_layout.add({
        targets: popup,
        translateY: "0%",
        opacity: 1,
    });

    animation_layout.finished.then(() => {
        game.pauseOrResume();
    });
};

const animation_PopupContinue = (getTo) => {
    const popup = document.querySelector("#modal_pause_window");

    animation_layout = anime.timeline({
        duration: 300,
        easing: "easeOutQuad",
    });

    animation_layout.add({
        targets: popup,
        translateY: "-20%",
        opacity: 0,
    });

    animation_layout.finished.then(() => {
        game.pauseOrResume();

        anime.set(popup, {
            visibility: "hidden",
        });
    });
};

const animation_ConfirmIn = (getTo) => {
    const confirm = document.querySelector("#modal_confirm");

    anime.set(confirm, {
        translateY: "-20%",
        opacity: 0,
        visibility: "visible",
    });

    animation_layout = anime.timeline({
        duration: 300,
        easing: "easeOutQuad",
    });

    animation_layout.add({
        targets: confirm,
        translateY: "0%",
        opacity: 1,
    });
};

const animation_ConfirmOut = (getTo) => {
    const confirm = document.querySelector("#modal_confirm");

    animation_layout = anime.timeline({
        duration: 300,
        easing: "easeOutQuad",
    });

    animation_layout.add({
        targets: confirm,
        translateY: "-20%",
        opacity: 0,
    });

    animation_layout.finished.then(() => {
        anime.set(confirm, {
            visibility: "hidden",
        });
    });
};

const animation_MainToMenu = (getTo) => {
    const from = document.querySelector("#main_page");
    const to = document.querySelector("#swiper_page");

    let animation_logo1 = document.querySelector('.animate_logo1')
    let animation_logo2 = document.querySelector('.animate_logo2')
    let animation_logo3 = document.querySelector('.animate_logo3')

    anime.set(to, {
        visibility: "visible",
        translateY: "100%",
        opacity: 0,
    });

    animation_layout = anime.timeline({
        duration: 750,
        easing: "easeInOutSine",
    });

    animation_layout
        .add({
            targets: [from],
            translateY: "-100%",
            opacity: 0,
        })

        .add(
            {
                targets: [to],
                translateY: "0%",
                opacity: 1,
            },
            "-=750"
        )
        .add({
            targets: [animation_logo1, animation_logo3],

            duration: 1500,
            delay: 300,
            direction: 'alternate',
            loop: 3,
            endDelay: 100,
            easing: 'easeInOutSine',

            translateX: [-150, 150, -150, 0] 
        })
        .add({
            targets: [animation_logo2],

            duration: 1500,
            delay: 300,
            direction: 'alternate',
            loop: 3,
            endDelay: 100,
            easing: 'easeInOutSine',

            translateX: [150, -150, 150, 0] 
        },"-=1900"
        );

    animation_layout.finished.then(() => {
        anime.set(from, {
            visibility: "hidden",
        });

        game.ended = true;
        document.querySelector('.game').innerHTML = ''
    
    });
};