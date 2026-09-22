// ========================================
// LOVE REVEAL WEBSITE
// FOR BITHIKA SARKAR ❤️
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const startBtn = document.getElementById("startBtn");
    const startScreen = document.getElementById("startScreen");
    const revealScreen = document.getElementById("revealScreen");

    const bgMusic = document.getElementById("bgMusic");

    const typingText = document.getElementById("typingText");
    const message = document.getElementById("message");

    const loveReveal = document.getElementById("loveReveal");

    let autoScrollStarted = false;
    let userInteracted = false;


    // ========================================
    // OPEN MY HEART
    // ========================================

    startBtn.addEventListener("click", function () {

        // Start music
        if (bgMusic) {

            bgMusic.volume = 0.55;

            bgMusic.play().catch(function (error) {
                console.log("Music:", error);
            });

        }


        // Hide start screen
        startScreen.classList.remove("active");


        // Show reveal screen
        revealScreen.classList.add("active");


        // Start reveal
        startReveal();


        // Start automatic scrolling
        setTimeout(function () {
            startAutoScroll();
        }, 2500);

    });


    // ========================================
    // REVEAL TEXT
    // ========================================

    function startReveal() {

        const firstText = "Bithika...";

        const secondText =
            "There is something my heart has been trying to say.";


        typeText(
            typingText,
            firstText,
            100,
            function () {

                setTimeout(function () {

                    typeText(
                        message,
                        secondText,
                        45,
                        function () {

                            setTimeout(function () {

                                loveReveal.classList.add("show");

                            }, 700);

                        }
                    );

                }, 700);

            }
        );

    }


    // ========================================
    // TYPING EFFECT
    // ========================================

    function typeText(element, text, speed, callback) {

        if (!element) {
            return;
        }


        element.textContent = "";

        let index = 0;


        function type() {

            if (index < text.length) {

                element.textContent +=
                    text.charAt(index);

                index++;

                setTimeout(type, speed);

            } else {

                if (callback) {
                    callback();
                }

            }

        }


        type();

    }


    // ========================================
    // AUTOMATIC SCROLL
    // ========================================

    function startAutoScroll() {

        if (autoScrollStarted) {
            return;
        }

        autoScrollStarted = true;


        let scrollSpeed = 0.6;


        function autoScroll() {

            // Stop automatic scrolling if
            // user manually touches the screen
            if (userInteracted) {
                return;
            }


            window.scrollBy(
                0,
                scrollSpeed
            );


            const currentPosition =
                window.innerHeight +
                window.scrollY;

            const pageHeight =
                document.documentElement.scrollHeight;


            // If reached bottom
            if (
                currentPosition >=
                pageHeight - 5
            ) {

                return;

            }


            requestAnimationFrame(
                autoScroll
            );

        }


        autoScroll();

    }


    // ========================================
    // DETECT USER MANUAL SCROLL
    // ========================================

    window.addEventListener(
        "wheel",
        function () {

            userInteracted = true;

        },
        {
            passive: true
        }
    );


    window.addEventListener(
        "touchstart",
        function () {

            userInteracted = true;

        },
        {
            passive: true
        }
    );


    window.addEventListener(
        "touchmove",
        function () {

            userInteracted = true;

        },
        {
            passive: true
        }
    );


    // ========================================
    // PARTICLES
    // ========================================

    const canvas =
        document.getElementById("particles");


    if (canvas) {

        const ctx =
            canvas.getContext("2d");


        let particles = [];


        function resizeCanvas() {

            canvas.width =
                window.innerWidth;

            canvas.height =
                window.innerHeight;

        }


        resizeCanvas();


        window.addEventListener(
            "resize",
            resizeCanvas
        );


        // Create particles

        for (let i = 0; i < 90; i++) {

            particles.push({

                x:
                    Math.random() *
                    window.innerWidth,

                y:
                    Math.random() *
                    window.innerHeight,

                size:
                    Math.random() *
                    2.5 + 0.5,

                speedX:
                    (
                        Math.random() - 0.5
                    ) * 0.4,

                speedY:
                    (
                        Math.random() - 0.5
                    ) * 0.4,

                opacity:
                    Math.random() *
                    0.8 + 0.2

            });

        }


        // Animate particles

        function animateParticles() {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );


            particles.forEach(function (p) {

                p.x += p.speedX;
                p.y += p.speedY;


                // Horizontal wrapping

                if (p.x < 0) {
                    p.x = canvas.width;
                }

                if (p.x > canvas.width) {
                    p.x = 0;
                }


                // Vertical wrapping

                if (p.y < 0) {
                    p.y = canvas.height;
                }

                if (p.y > canvas.height) {
                    p.y = 0;
                }


                // Draw particle

                ctx.beginPath();

                ctx.arc(
                    p.x,
                    p.y,
                    p.size,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    "rgba(255, 150, 210, " +
                    p.opacity +
                    ")";


                ctx.shadowBlur = 10;

                ctx.shadowColor =
                    "rgba(255, 100, 180, 0.8)";


                ctx.fill();

            });


            requestAnimationFrame(
                animateParticles
            );

        }


        animateParticles();

    }

});
