// ========================================
// LOVE REVEAL WEBSITE
// FOR BITHIKA SARKAR ❤️
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // GET ELEMENTS
    // ========================================

    const startBtn =
        document.getElementById("startBtn");

    const startScreen =
        document.getElementById("startScreen");

    const revealScreen =
        document.getElementById("revealScreen");

    const bgMusic =
        document.getElementById("bgMusic");

    const typingText =
        document.getElementById("typingText");

    const message =
        document.getElementById("message");

    const loveReveal =
        document.getElementById("loveReveal");


    // ========================================
    // AUTO SCROLL SETTINGS
    // ========================================

    // আগের speed
    const scrollSpeed = 0.6;

    // Auto-scroll চলছে কিনা
    let autoScrollRunning = false;

    // User বর্তমানে manually scroll করছে কিনা
    let userInteracting = false;

    // Resume করার timer
    let resumeTimer = null;


    // ========================================
    // OPEN MY HEART
    // ========================================

    if (startBtn) {

        startBtn.addEventListener(
            "click",
            function () {

                console.log(
                    "Open My Heart clicked ❤️"
                );


                // ------------------------------
                // Start music
                // ------------------------------

                if (bgMusic) {

                    bgMusic.volume = 0.55;

                    bgMusic.play().catch(
                        function (error) {

                            console.log(
                                "Music could not start:",
                                error
                            );

                        }
                    );

                }


                // ------------------------------
                // Hide start screen
                // ------------------------------

                startScreen.classList.remove(
                    "active"
                );


                // ------------------------------
                // Show reveal screen
                // ------------------------------

                revealScreen.classList.add(
                    "active"
                );


                // ------------------------------
                // Start text reveal
                // ------------------------------

                startReveal();


                // ------------------------------
                // Start auto-scroll
                // ------------------------------

                setTimeout(
                    function () {

                        startAutoScroll();

                    },
                    2500
                );

            }
        );

    }


    // ========================================
    // START REVEAL
    // ========================================

    function startReveal() {

        const firstText =
            "Bithika...";


        const secondText =
            "There is something my heart has been trying to say.";


        // First text

        typeText(
            typingText,
            firstText,
            100,
            function () {


                setTimeout(
                    function () {


                        // Second text

                        typeText(
                            message,
                            secondText,
                            45,
                            function () {


                                setTimeout(
                                    function () {


                                        // Show love dashboard

                                        if (loveReveal) {

                                            loveReveal.classList.add(
                                                "show"
                                            );

                                        }


                                    },
                                    700
                                );


                            }
                        );


                    },
                    700
                );


            }
        );

    }


    // ========================================
    // TYPING EFFECT
    // ========================================

    function typeText(
        element,
        text,
        speed,
        callback
    ) {

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


                setTimeout(
                    type,
                    speed
                );


            } else {


                if (callback) {

                    callback();

                }

            }

        }


        type();

    }


    // ========================================
    // AUTO SCROLL
    // ========================================

    function startAutoScroll() {

        // যদি user manually scroll করে,
        // তাহলে এখনই auto-scroll শুরু করবে না

        if (userInteracting) {

            return;

        }


        // যদি already চলছে,
        // তাহলে নতুন loop তৈরি করবে না

        if (autoScrollRunning) {

            return;

        }


        autoScrollRunning = true;


        function scrollStep() {


            // ------------------------------
            // User manually scrolling
            // ------------------------------

            if (userInteracting) {

                autoScrollRunning = false;

                return;

            }


            // ------------------------------
            // Scroll down
            // ------------------------------

            window.scrollBy(
                0,
                scrollSpeed
            );


            // ------------------------------
            // Check bottom
            // ------------------------------

            const currentPosition =
                window.innerHeight +
                window.scrollY;


            const pageHeight =
                document.documentElement.scrollHeight;


            if (
                currentPosition >=
                pageHeight - 5
            ) {

                autoScrollRunning = false;

                return;

            }


            // Continue

            requestAnimationFrame(
                scrollStep
            );

        }


        requestAnimationFrame(
            scrollStep
        );

    }


    // ========================================
    // TOUCH START
    // ========================================

    window.addEventListener(
        "touchstart",
        function () {

            // Auto-scroll pause

            userInteracting = true;


            // Existing timer cancel

            if (resumeTimer) {

                clearTimeout(
                    resumeTimer
                );

            }

        },
        {
            passive: true
        }
    );


    // ========================================
    // TOUCH MOVE
    // ========================================

    window.addEventListener(
        "touchmove",
        function () {

            // যতক্ষণ finger দিয়ে scroll করবে,
            // auto-scroll বন্ধ থাকবে

            userInteracting = true;


            if (resumeTimer) {

                clearTimeout(
                    resumeTimer
                );

            }

        },
        {
            passive: true
        }
    );


    // ========================================
    // TOUCH END
    // ========================================

    window.addEventListener(
        "touchend",
        function () {

            // Finger screen থেকে সরেছে

            userInteracting = false;


            // আগের timer cancel

            if (resumeTimer) {

                clearTimeout(
                    resumeTimer
                );

            }


            // 0.6 second পরে আবার শুরু

            resumeTimer = setTimeout(
                function () {

                    startAutoScroll();

                },
                600
            );

        },
        {
            passive: true
        }
    );


    // ========================================
    // TOUCH CANCEL
    // ========================================

    window.addEventListener(
        "touchcancel",
        function () {

            userInteracting = false;


            if (resumeTimer) {

                clearTimeout(
                    resumeTimer
                );

            }


            resumeTimer = setTimeout(
                function () {

                    startAutoScroll();

                },
                600
            );

        },
        {
            passive: true
        }
    );


    // ========================================
    // PC MOUSE WHEEL
    // ========================================

    window.addEventListener(
        "wheel",
        function () {

            // Pause auto-scroll

            userInteracting = true;


            if (resumeTimer) {

                clearTimeout(
                    resumeTimer
                );

            }


            // Mouse wheel থামার
            // 0.6 second পরে আবার শুরু

            resumeTimer = setTimeout(
                function () {

                    userInteracting = false;

                    startAutoScroll();

                },
                600
            );

        },
        {
            passive: true
        }
    );


    // ========================================
    // PARTICLES
    // ========================================

    const canvas =
        document.getElementById(
            "particles"
        );


    if (canvas) {


        const ctx =
            canvas.getContext("2d");


        let particles = [];


        // ====================================
        // RESIZE CANVAS
        // ====================================

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


        // ====================================
        // CREATE PARTICLES
        // ====================================

        for (
            let i = 0;
            i < 90;
            i++
        ) {


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
                        Math.random() -
                        0.5
                    ) * 0.4,

                speedY:
                    (
                        Math.random() -
                        0.5
                    ) * 0.4,

                opacity:
                    Math.random() *
                    0.8 + 0.2

            });

        }


        // ====================================
        // ANIMATE PARTICLES
        // ====================================

        function animateParticles() {


            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );


            particles.forEach(
                function (p) {


                    // Move

                    p.x += p.speedX;

                    p.y += p.speedY;


                    // Horizontal wrap

                    if (p.x < 0) {

                        p.x =
                            canvas.width;

                    }


                    if (
                        p.x >
                        canvas.width
                    ) {

                        p.x = 0;

                    }


                    // Vertical wrap

                    if (p.y < 0) {

                        p.y =
                            canvas.height;

                    }


                    if (
                        p.y >
                        canvas.height
                    ) {

                        p.y = 0;

                    }


                    // Draw

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

                }
            );


            requestAnimationFrame(
                animateParticles
            );

        }


        animateParticles();

    }

});
