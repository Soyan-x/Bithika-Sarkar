// ========================================
// LOVE REVEAL WEBSITE
// FOR BITHIKA SARKAR ❤️
// ========================================


document.addEventListener(
    "DOMContentLoaded",
    function () {


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
        // OPEN MY HEART
        // ========================================

        if (startBtn) {

            startBtn.addEventListener(
                "click",
                function () {


                    console.log(
                        "Open My Heart clicked ❤️"
                    );


                    // Start music

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


                    // Hide start screen

                    startScreen.classList.remove(
                        "active"
                    );


                    // Show reveal screen

                    revealScreen.classList.add(
                        "active"
                    );


                    // Start reveal

                    startReveal();

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


            typeText(
                typingText,
                firstText,
                100,
                function () {


                    setTimeout(
                        function () {


                            typeText(
                                message,
                                secondText,
                                45,
                                function () {


                                    setTimeout(
                                        function () {


                                            loveReveal.classList.add(
                                                "show"
                                            );


                                        },
                                        1000
                                    );


                                }
                            );


                        },
                        800
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


                if (
                    index <
                    text.length
                ) {


                    element.textContent +=
                        text.charAt(index);


                    index++;


                    setTimeout(
                        type,
                        speed
                    );


                }

                else {


                    if (callback) {

                        callback();

                    }

                }

            }


            type();

        }



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



            // Resize canvas

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



            // Animate particles

            function animateParticles() {


                ctx.clearRect(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );


                particles.forEach(
                    function (p) {


                        p.x +=
                            p.speedX;

                        p.y +=
                            p.speedY;



                        // Wrap horizontally

                        if (
                            p.x < 0
                        ) {

                            p.x =
                                canvas.width;

                        }


                        if (
                            p.x >
                            canvas.width
                        ) {

                            p.x = 0;

                        }



                        // Wrap vertically

                        if (
                            p.y < 0
                        ) {

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


    }
);