/* =========================================================
   IAC WEBSITE JAVASCRIPT
========================================================= */

const GOOGLE_SCRIPT_URL =
    "PASTE_YOUR_GOOGLE_APPS_SCRIPT_EXEC_URL_HERE";


document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadHeader();

        loadFooter();

        setupMobileMenu();

        setupDisabledLinks();

        setupReveal();

        setupTiltCards();

        setupCircuitBackground();

        setupScrollProgress();

        setupMembershipForm();

        setupCertificateVerifier();

        setupDynamicEvents();

    }
);


/* =========================================================
   HEADER
========================================================= */

function loadHeader() {

    const header =
        document.getElementById(
            "site-header"
        );


    if (!header) {
        return;
    }


    const currentPage =
        document.body.dataset.page
        ||
        "home";


    /* Main navigation only */

    const links = [

        ["home", "index.html", "Home"],

        ["about", "about.html", "About IAC"],

        [
            "collaboration",
            "index.html#collaboration",
            "Collaboration"
        ],

        ["eie", "eie.html", "About EIE"],

        ["team", "team.html", "Team"],

        ["alumni", "alumni.html", "Alumni"],

        ["projects", "projects.html", "Projects"],

        ["events", "events.html", "Events"],

        ["gallery", "gallery.html", "Gallery"],

        ["contact", "contact.html", "Contact"]

    ];


    let navHTML = "";


    links.forEach(
        ([page, url, label]) => {

            const active =
                page === currentPage
                    ? "active"
                    : "";


            navHTML += `

                <a
                    href="${url}"
                    class="${active}"
                >
                    ${label}
                </a>

            `;

        }
    );


    header.innerHTML = `

        <header class="site-header">

            <nav class="navbar">


                <!-- =====================================
                     LOGOS
                ====================================== -->

                <a
                    href="index.html"
                    class="brand"
                    aria-label="IAC Home"
                >

                    <div class="brand-logos">


                        <img
                            src="assets/logos/bu-logo.png"
                            alt="Bundelkhand University"
                            class="header-logo bu-logo"
                        >


                        <span
                            class="logo-divider"
                        ></span>


                        <img
                            src="assets/logos/iac-logo.jpeg"
                            alt="Innovation & Automation Club"
                            class="header-logo iac-logo"
                        >


                        <span
                            class="logo-divider"
                        ></span>


                        <img
                            src="assets/logos/thinknext-logo.jpg"
                            alt="ThinkNEXT Technologies"
                            class="header-logo thinknext-logo"
                        >


                    </div>

                </a>



                <!-- =====================================
                     DESKTOP NAVIGATION
                ====================================== -->

                <div
                    class="nav-links"
                    id="navLinks"
                >

                    ${navHTML}


                    <!-- Mobile menu also contains
                         Verify + Join -->

                    <div class="mobile-menu-actions">

                        <a
                            href="verify.html"
                            class="mobile-action-link"
                        >
                            ✓ Verify Certificate
                        </a>


                        <a
                            href="join.html"
                            class="mobile-action-link mobile-join-link"
                        >
                            Join IAC →
                        </a>

                    </div>

                </div>



                <!-- =====================================
                     RIGHT SIDE ACTION BUTTONS
                ====================================== -->

                <div class="navbar-right">


                    <div class="nav-actions">


                        <a
                            href="verify.html"
                            class="
                                nav-action-btn
                                verify-nav-btn
                            "
                        >

                            <span class="nav-action-icon">
                                ✓
                            </span>

                            <span class="nav-action-text">
                                Verify
                            </span>

                        </a>


                        <a
                            href="join.html"
                            class="
                                nav-action-btn
                                join-action-btn
                            "
                        >

                            <span class="nav-action-text">
                                Join IAC
                            </span>

                            <span>
                                →
                            </span>

                        </a>


                    </div>



                    <button
                        id="menuBtn"
                        class="menu-btn"
                        type="button"
                        aria-label="Open navigation menu"
                        aria-expanded="false"
                    >

                        <span class="menu-line"></span>
                        <span class="menu-line"></span>
                        <span class="menu-line"></span>

                    </button>


                </div>


            </nav>

        </header>

    `;

}
/* =========================================================
   FOOTER
========================================================= */

function loadFooter() {

    const footer =
        document.getElementById(
            "site-footer"
        );


    if (!footer) {
        return;
    }


    footer.innerHTML = `

        <footer class="footer">


            <div class="footer-grid">


                <div>

                    <h3>
                        Innovation & Automation Club
                    </h3>


                    <p>

                        Electronics & Instrumentation Engineering,
                        Institute of Engineering & Technology,
                        Bundelkhand University, Jhansi.

                    </p>


                    <div class="footer-logos">

                        <img
                            src="assets/logos/bu-logo.png"
                            class="footer-bu"
                            alt="Bundelkhand University"
                        >

                        <img
                            src="assets/logos/iac-logo.jpeg"
                            class="footer-iac"
                            alt="IAC"
                        >

                        <img
                            src="assets/logos/thinknext-logo.jpg"
                            class="footer-thinknext"
                            alt="ThinkNEXT"
                        >

                    </div>

                </div>


                <div>

                    <h4>
                        Quick Links
                    </h4>


                    <div class="footer-links">

                        <a href="about.html">
                            About IAC
                        </a>

                        <a href="index.html#collaboration">
                            Collaboration
                        </a>

                        <a href="eie.html">
                            About EIE
                        </a>

                        <a href="team.html">
                            Team
                        </a>

                        <a href="events.html">
                            Events
                        </a>

                        <a href="verify.html">
                            Certificate Verification
                        </a>

                    </div>

                </div>


                <div>

                    <h4>
                        Connect
                    </h4>


                    <div class="footer-links">

                        <a
                            href="mailto:iac.innovatorshub@gmail.com"
                        >
                            iac.innovatorshub@gmail.com
                        </a>


                        <a
                            href="https://www.instagram.com/iac_innovators_hub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>


                        <a
                            href="https://youtube.com/@iac_iet"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YouTube
                        </a>


                        <a
                            href="https://whatsapp.com/channel/0029Vb8HuoT545upvtF8JE3w"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp Channel
                        </a>

                    </div>

                </div>


            </div>


            <div class="footer-bottom">

                © 2026 Innovation & Automation Club
                | EIE | IET | BU

            </div>


        </footer>

    `;

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const button =
        document.getElementById(
            "menuBtn"
        );


    const navigation =
        document.getElementById(
            "navLinks"
        );


    if (
        !button
        ||
        !navigation
    ) {

        return;

    }


    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            navigation.classList.toggle(
                "show"
            );


            button.classList.toggle(
                "active"
            );


            const opened =
                navigation.classList.contains(
                    "show"
                );


            button.setAttribute(
                "aria-expanded",
                String(opened)
            );

        }
    );



    /* Close after link click */

    navigation
        .querySelectorAll("a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        closeMobileMenu();

                    }
                );

            }
        );



    /* Click outside closes menu */

    document.addEventListener(
        "click",
        event => {

            if (
                !navigation.contains(
                    event.target
                )
                &&
                !button.contains(
                    event.target
                )
            ) {

                closeMobileMenu();

            }

        }
    );



    /* Escape closes menu */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key
                ===
                "Escape"
            ) {

                closeMobileMenu();

            }

        }
    );



    /* Desktop resize */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth
                >
                1180
            ) {

                closeMobileMenu();

            }

        }
    );



    function closeMobileMenu() {

        navigation.classList.remove(
            "show"
        );


        button.classList.remove(
            "active"
        );


        button.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}

/* =========================================================
   PLACEHOLDER LINKS
========================================================= */

function setupDisabledLinks() {

    document
        .querySelectorAll(
            ".is-placeholder"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                }
            );

        });

}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

function setupReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal:not(.visible)"
        );


    if (!elements.length) {
        return;
    }


    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        elements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

        return;
    }


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "visible"
                                );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.08
            }

        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   3D TILT CARDS
========================================================= */

function setupTiltCards() {

    if (
        !window.matchMedia(
            "(hover:hover)"
        ).matches
    ) {

        return;
    }


    document
        .querySelectorAll(
            ".tilt-card"
        )
        .forEach(card => {


            if (
                card.dataset.tiltReady
                ===
                "true"
            ) {

                return;

            }


            card.dataset.tiltReady =
                "true";


            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX
                        -
                        rect.left;


                    const y =
                        event.clientY
                        -
                        rect.top;


                    const rotateY =
                        (
                            x
                            /
                            rect.width
                            -
                            0.5
                        )
                        *
                        6;


                    const rotateX =
                        (
                            y
                            /
                            rect.height
                            -
                            0.5
                        )
                        *
                        -6;


                    card.style.transform = `

                        perspective(900px)

                        rotateX(
                            ${rotateX}deg
                        )

                        rotateY(
                            ${rotateY}deg
                        )

                        translateY(-5px)

                    `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

}


/* =========================================================
   SCROLL PROGRESS
========================================================= */

function setupScrollProgress() {

    const bar =
        document.getElementById(
            "scrollProgress"
        );


    if (!bar) {
        return;
    }


    function updateProgress() {

        const available =
            document.documentElement
                .scrollHeight
            -
            window.innerHeight;


        const percentage =
            available > 0

                ? (
                    window.scrollY
                    /
                    available
                )
                *
                100

                : 0;


        bar.style.width =
            percentage
            +
            "%";

    }


    window.addEventListener(
        "scroll",
        updateProgress,
        {
            passive: true
        }
    );


    updateProgress();

}


/* =========================================================
   WORKING CIRCUIT BACKGROUND
========================================================= */

function setupCircuitBackground() {

    const canvas =
        document.getElementById(
            "techCircuitCanvas"
        );


    if (!canvas) {
        return;
    }


    const context =
        canvas.getContext(
            "2d"
        );


    if (!context) {
        return;
    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    let width =
        0;


    let height =
        0;


    let circuits =
        [];


    let pulses =
        [];


    function resize() {

        const ratio =
            Math.min(
                window.devicePixelRatio
                ||
                1,
                2
            );


        width =
            window.innerWidth;


        height =
            window.innerHeight;


        canvas.width =
            Math.floor(
                width
                *
                ratio
            );


        canvas.height =
            Math.floor(
                height
                *
                ratio
            );


        canvas.style.width =
            width
            +
            "px";


        canvas.style.height =
            height
            +
            "px";


        context.setTransform(
            ratio,
            0,
            0,
            ratio,
            0,
            0
        );


        createNetwork();

    }


    function createNetwork() {

        circuits =
            [];


        pulses =
            [];


        const amount =
            width < 600

                ? 10

                : width < 1000

                    ? 16

                    : 25;


        for (
            let index = 0;
            index < amount;
            index++
        ) {

            const circuit =
                createCircuit();


            circuits.push(
                circuit
            );


            if (
                index % 2
                ===
                0
            ) {

                pulses.push({

                    circuit: circuit,

                    progress:
                        Math.random(),

                    speed:
                        0.0013
                        +
                        Math.random()
                        *
                        0.0025

                });

            }

        }

    }


    function createCircuit() {

        const x =
            Math.random()
            *
            width;


        const y =
            Math.random()
            *
            height;


        const horizontal =
            Math.random()
            >
            0.5;


        const lengthA =
            80
            +
            Math.random()
            *
            190;


        const lengthB =
            50
            +
            Math.random()
            *
            150;


        const directionX =
            Math.random()
            >
            0.5
                ? 1
                : -1;


        const directionY =
            Math.random()
            >
            0.5
                ? 1
                : -1;


        let points;


        if (horizontal) {

            points = [

                {
                    x,
                    y
                },

                {
                    x:
                        x
                        +
                        lengthA
                        *
                        directionX,

                    y
                },

                {
                    x:
                        x
                        +
                        lengthA
                        *
                        directionX,

                    y:
                        y
                        +
                        lengthB
                        *
                        directionY
                }

            ];

        }

        else {

            points = [

                {
                    x,
                    y
                },

                {
                    x,

                    y:
                        y
                        +
                        lengthA
                        *
                        directionY
                },

                {
                    x:
                        x
                        +
                        lengthB
                        *
                        directionX,

                    y:
                        y
                        +
                        lengthA
                        *
                        directionY
                }

            ];

        }


        return {

            points,

            opacity:
                0.07
                +
                Math.random()
                *
                0.14

        };

    }


    function drawGrid() {

        const size =
            width < 600
                ? 48
                : 70;


        context.strokeStyle =
            "rgba(40,150,255,0.045)";


        context.lineWidth =
            1;


        for (
            let x = 0;
            x < width;
            x += size
        ) {

            context.beginPath();

            context.moveTo(
                x,
                0
            );

            context.lineTo(
                x,
                height
            );

            context.stroke();

        }


        for (
            let y = 0;
            y < height;
            y += size
        ) {

            context.beginPath();

            context.moveTo(
                0,
                y
            );

            context.lineTo(
                width,
                y
            );

            context.stroke();

        }

    }


    function drawCircuits() {

        circuits.forEach(
            circuit => {

                const points =
                    circuit.points;


                context.beginPath();


                context.moveTo(
                    points[0].x,
                    points[0].y
                );


                for (
                    let index = 1;
                    index < points.length;
                    index++
                ) {

                    context.lineTo(
                        points[index].x,
                        points[index].y
                    );

                }


                context.strokeStyle =
                    `rgba(
                        40,
                        217,
                        255,
                        ${circuit.opacity}
                    )`;


                context.lineWidth =
                    1;


                context.stroke();


                points.forEach(
                    point => {

                        context.beginPath();


                        context.arc(
                            point.x,
                            point.y,
                            2,
                            0,
                            Math.PI
                            *
                            2
                        );


                        context.fillStyle =
                            `rgba(
                                100,
                                230,
                                255,
                                ${circuit.opacity + 0.20}
                            )`;


                        context.fill();

                    }
                );

            }
        );

    }


    function getPosition(
        circuit,
        progress
    ) {

        const points =
            circuit.points;


        const segments =
            points.length
            -
            1;


        const scaled =
            progress
            *
            segments;


        const segment =
            Math.min(
                Math.floor(
                    scaled
                ),
                segments
                -
                1
            );


        const local =
            scaled
            -
            segment;


        const start =
            points[
                segment
            ];


        const end =
            points[
                segment
                +
                1
            ];


        return {

            x:
                start.x
                +
                (
                    end.x
                    -
                    start.x
                )
                *
                local,

            y:
                start.y
                +
                (
                    end.y
                    -
                    start.y
                )
                *
                local

        };

    }


    function drawPulses() {

        pulses.forEach(
            pulse => {

                if (
                    !reducedMotion
                ) {

                    pulse.progress +=
                        pulse.speed;


                    if (
                        pulse.progress
                        >
                        1
                    ) {

                        pulse.progress =
                            0;

                    }

                }


                const point =
                    getPosition(
                        pulse.circuit,
                        pulse.progress
                    );


                const glow =
                    context.createRadialGradient(

                        point.x,
                        point.y,
                        0,

                        point.x,
                        point.y,
                        18

                    );


                glow.addColorStop(
                    0,
                    "rgba(140,236,255,0.95)"
                );


                glow.addColorStop(
                    0.3,
                    "rgba(40,217,255,0.35)"
                );


                glow.addColorStop(
                    1,
                    "rgba(40,217,255,0)"
                );


                context.fillStyle =
                    glow;


                context.beginPath();


                context.arc(
                    point.x,
                    point.y,
                    18,
                    0,
                    Math.PI
                    *
                    2
                );


                context.fill();


                context.beginPath();


                context.arc(
                    point.x,
                    point.y,
                    2.8,
                    0,
                    Math.PI
                    *
                    2
                );


                context.fillStyle =
                    "#8cecff";


                context.fill();

            }
        );

    }


    function animate() {

        context.clearRect(
            0,
            0,
            width,
            height
        );


        drawGrid();

        drawCircuits();

        drawPulses();


        if (
            !reducedMotion
        ) {

            requestAnimationFrame(
                animate
            );

        }

    }


    resize();

    animate();


    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    resize,
                    150
                );

        }
    );

}


/* =========================================================
   JOIN FORM
========================================================= */

function setupMembershipForm() {

    const form =
        document.getElementById(
            "membershipForm"
        );


    if (!form) {
        return;
    }


    const iframe =
        document.getElementById(
            "joinSubmitFrame"
        );


    const button =
        document.getElementById(
            "membershipSubmitButton"
        );


    const message =
        document.getElementById(
            "formMessage"
        );


    if (
        !GOOGLE_SCRIPT_URL
        ||
        GOOGLE_SCRIPT_URL.includes(
            "PASTE_"
        )
    ) {

        message.textContent =
            "Registration system has not been connected yet.";


        message.className =
            "form-message error";


        return;

    }


    form.action =
        GOOGLE_SCRIPT_URL;


    let submitted =
        false;


    form.addEventListener(
        "submit",
        () => {

            if (
                !form.checkValidity()
            ) {

                return;
            }


            submitted =
                true;


            button.disabled =
                true;


            button.textContent =
                "Submitting...";


            message.className =
                "form-message";


            message.textContent =
                "";

        }
    );


    window.addEventListener(
        "message",
        event => {

            if (
                !submitted
            ) {

                return;
            }


            const data =
                event.data;


            if (
                !data
                ||
                data.type
                !==
                "IAC_JOIN_RESULT"
            ) {

                return;
            }


            submitted =
                false;


            button.disabled =
                false;


            button.textContent =
                "Submit Registration →";


            if (
                data.success
            ) {

                message.textContent =
                    data.message
                    ||
                    "Registration submitted successfully. Please check your email.";


                message.className =
                    "form-message success";


                form.reset();

            }

            else {

                message.textContent =
                    data.message
                    ||
                    "Registration could not be submitted.";


                message.className =
                    "form-message error";

            }

        }
    );


    /*
      Fallback:
      If browser blocks postMessage for some reason,
      iframe load at least restores button.
    */

    if (iframe) {

        iframe.addEventListener(
            "load",
            () => {

                if (
                    !submitted
                ) {

                    return;
                }


                setTimeout(
                    () => {

                        if (
                            submitted
                        ) {

                            button.disabled =
                                false;


                            button.textContent =
                                "Submit Registration →";

                        }

                    },
                    3000
                );

            }
        );

    }

}


/* =========================================================
   CERTIFICATE VERIFIER
========================================================= */

function setupCertificateVerifier() {

    const form =
        document.getElementById(
            "certificateForm"
        );


    if (!form) {
        return;
    }


    const input =
        document.getElementById(
            "certificateId"
        );


    const result =
        document.getElementById(
            "certificateResult"
        );


    const button =
        form.querySelector(
            'button[type="submit"]'
        );


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const id =
                input.value
                    .trim()
                    .toUpperCase();


            if (!id) {
                return;
            }


            if (
                !GOOGLE_SCRIPT_URL
                ||
                GOOGLE_SCRIPT_URL.includes(
                    "PASTE_"
                )
            ) {

                showVerificationError(
                    result,
                    "Verification system is not connected."
                );


                return;

            }


            button.disabled =
                true;


            button.textContent =
                "Verifying...";


            const callback =
                "iacCertCallback_"
                +
                Date.now();


            const script =
                document.createElement(
                    "script"
                );


            const timeout =
                setTimeout(
                    () => {

                        cleanup();


                        showVerificationError(
                            result,
                            "Verification request timed out."
                        );

                    },
                    12000
                );


            function cleanup() {

                clearTimeout(
                    timeout
                );


                if (
                    script.parentNode
                ) {

                    script.remove();

                }


                delete window[
                    callback
                ];


                button.disabled =
                    false;


                button.textContent =
                    "Verify Certificate";

            }


            window[
                callback
            ] =
                data => {

                    cleanup();


                    if (
                        !data
                        ||
                        !data.found
                    ) {

                        showVerificationError(
                            result,
                            "Certificate not found. Please check the Certificate ID."
                        );


                        return;

                    }


                    if (
                        data.valid
                        ===
                        false
                    ) {

                        showVerificationError(
                            result,
                            "This certificate is not currently valid."
                        );


                        return;

                    }


                    const certificate =
                        data.certificate;


                    result.className =
                        "verify-result valid show";


                    result.innerHTML = `

                        <h3>
                            ✅ Certificate Verified
                        </h3>


                        <div class="certificate-details">


                            ${certificateField(
                                "Certificate ID",
                                certificate.id
                            )}


                            ${certificateField(
                                "Name",
                                certificate.name
                            )}


                            ${certificateField(
                                "Event",
                                certificate.event
                            )}


                            ${certificateField(
                                "Date",
                                certificate.date
                            )}


                            ${certificateField(
                                "Status",
                                certificate.status
                            )}


                        </div>

                    `;

                };


            script.onerror =
                () => {

                    cleanup();


                    showVerificationError(
                        result,
                        "Unable to connect to verification system."
                    );

                };


            script.src =

                GOOGLE_SCRIPT_URL

                +

                "?action=verify&id="

                +

                encodeURIComponent(
                    id
                )

                +

                "&callback="

                +

                encodeURIComponent(
                    callback
                )

                +

                "&v="

                +

                Date.now();


            document.body.appendChild(
                script
            );

        }
    );

}


function certificateField(
    label,
    value
) {

    return `

        <div class="certificate-detail">

            <small>
                ${escapeHTML(label)}
            </small>

            <strong>
                ${escapeHTML(value)}
            </strong>

        </div>

    `;

}


function showVerificationError(
    element,
    text
) {

    element.className =
        "verify-result invalid show";


    element.innerHTML = `

        <h3>
            ❌ Verification Failed
        </h3>

        <p>
            ${escapeHTML(text)}
        </p>

    `;

}


/* =========================================================
   DYNAMIC EVENTS FROM GOOGLE SHEETS
========================================================= */

function setupDynamicEvents() {

    const upcoming =
        document.getElementById(
            "upcomingEvents"
        );


    const past =
        document.getElementById(
            "pastEvents"
        );


    if (
        !upcoming
        &&
        !past
    ) {

        return;
    }


    if (
        !GOOGLE_SCRIPT_URL
        ||
        GOOGLE_SCRIPT_URL.includes(
            "PASTE_"
        )
    ) {

        showEventsError(
            upcoming
        );


        return;

    }


    const callback =
        "iacEventsCallback_"
        +
        Date.now();


    const script =
        document.createElement(
            "script"
        );


    const timeout =
        setTimeout(
            () => {

                cleanup();


                showEventsError(
                    upcoming
                );

            },
            12000
        );


    function cleanup() {

        clearTimeout(
            timeout
        );


        if (
            script.parentNode
        ) {

            script.remove();

        }


        delete window[
            callback
        ];

    }


    window[
        callback
    ] =
        data => {

            cleanup();


            if (
                !data
                ||
                !data.success
            ) {

                showEventsError(
                    upcoming
                );


                return;

            }


            renderEvents(
                data.events
                ||
                [],
                upcoming,
                past
            );

        };


    script.onerror =
        () => {

            cleanup();


            showEventsError(
                upcoming
            );

        };


    script.src =

        GOOGLE_SCRIPT_URL

        +

        "?action=events&callback="

        +

        encodeURIComponent(
            callback
        )

        +

        "&v="

        +

        Date.now();


    document.body.appendChild(
        script
    );

}


/* =========================================================
   RENDER EVENTS
========================================================= */

function renderEvents(
    events,
    upcomingContainer,
    pastContainer
) {

    const upcoming =
        [];


    const completed =
        [];


    events.forEach(
        event => {

            const status =
                String(
                    event.status
                    ||
                    ""
                )
                .trim()
                .toUpperCase();


            if (
                status
                ===
                "COMPLETED"
                ||
                status
                ===
                "PAST"
            ) {

                completed.push(
                    event
                );

            }

            else {

                upcoming.push(
                    event
                );

            }

        }
    );


    if (
        upcomingContainer
    ) {

        upcomingContainer.innerHTML =

            upcoming.length

                ? upcoming
                    .map(
                        event =>
                            createEventCard(
                                event,
                                true
                            )
                    )
                    .join("")

                : `

                    <div class="empty-events">

                        <h3>
                            No Upcoming Events
                        </h3>

                        <p>
                            New events will appear here
                            when they are announced.
                        </p>

                    </div>

                `;

    }


    if (
        pastContainer
    ) {

        pastContainer.innerHTML =

            completed.length

                ? completed
                    .slice()
                    .reverse()
                    .map(
                        event =>
                            createEventCard(
                                event,
                                false
                            )
                    )
                    .join("")

                : `

                    <div class="empty-events">

                        <p>
                            Past events will appear here.
                        </p>

                    </div>

                `;

    }


    setupReveal();

    setupTiltCards();

}


/* =========================================================
   EVENT CARD
========================================================= */

function createEventCard(
    event,
    upcoming
) {

    const title =
        escapeHTML(
            event.title
            ||
            "IAC Event"
        );


    const category =
        escapeHTML(
            event.category
            ||
            "IAC EVENT"
        );


    const date =
        escapeHTML(
            formatEventDate(
                event.date
            )
        );


    const time =
        escapeHTML(
            event.time
            ||
            ""
        );


    const venue =
        escapeHTML(
            event.venue
            ||
            ""
        );


    const description =
        escapeHTML(
            event.description
            ||
            ""
        );


    const poster =
        safeImageUrl(
            event.posterUrl
        );


    const registration =
        safeExternalUrl(
            event.registrationUrl
        );


    return `

        <article
            class="event-card tilt-card reveal"
        >


            ${
                poster

                    ? `

                        <div class="event-poster">

                            <img
                                src="${escapeHTML(poster)}"
                                alt="${title}"
                                loading="lazy"
                            >

                        </div>

                    `

                    : `

                        <div
                            class="
                                event-poster
                                event-poster-placeholder
                            "
                        >
                            ⚡
                        </div>

                    `
            }


            <div class="event-card-body">


                <div class="event-card-top">


                    <span class="event-category">
                        ${category}
                    </span>


                    <span
                        class="
                            event-status
                            ${
                                upcoming
                                    ? "upcoming"
                                    : "completed"
                            }
                        "
                    >

                        ${
                            upcoming
                                ? "Upcoming"
                                : "Completed"
                        }

                    </span>


                </div>


                <h3>
                    ${title}
                </h3>


                <div class="event-meta">

                    <div>
                        📅 ${date}
                    </div>


                    ${
                        time

                            ? `

                                <div>
                                    🕒 ${time}
                                </div>

                            `

                            : ""
                    }


                    ${
                        venue

                            ? `

                                <div>
                                    📍 ${venue}
                                </div>

                            `

                            : ""
                    }

                </div>


                ${
                    description

                        ? `

                            <p class="event-description">
                                ${description}
                            </p>

                        `

                        : ""
                }


                ${
                    upcoming
                    &&
                    registration

                        ? `

                            <a
                                href="${escapeHTML(registration)}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn event-register-btn"
                            >
                                Register Now →
                            </a>

                        `

                        : ""
                }


            </div>

        </article>

    `;

}


/* =========================================================
   EVENT DATE
========================================================= */

function formatEventDate(
    value
) {

    if (!value) {
        return "Date TBA";
    }


    const text =
        String(
            value
        )
        .trim();


    /* yyyy-mm-dd */

    if (
        /^\d{4}-\d{2}-\d{2}$/
            .test(
                text
            )
    ) {

        const date =
            new Date(
                text
                +
                "T00:00:00"
            );


        return date.toLocaleDateString(

            "en-IN",

            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }

        );

    }


    /* dd/mm/yyyy */

    const match =
        text.match(
            /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
        );


    if (match) {

        const date =
            new Date(
                Number(
                    match[3]
                ),
                Number(
                    match[2]
                )
                -
                1,
                Number(
                    match[1]
                )
            );


        return date.toLocaleDateString(

            "en-IN",

            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }

        );

    }


    return text;

}


/* =========================================================
   EVENT ERROR
========================================================= */

function showEventsError(
    element
) {

    if (!element) {
        return;
    }


    element.innerHTML = `

        <div class="empty-events">

            <h3>
                Events couldn't be loaded
            </h3>

            <p>
                Please try again later.
            </p>

        </div>

    `;

}


/* =========================================================
   SECURITY HELPERS
========================================================= */

function escapeHTML(
    value
) {

    return String(
        value
        ??
        ""
    )

    .replaceAll(
        "&",
        "&amp;"
    )

    .replaceAll(
        "<",
        "&lt;"
    )

    .replaceAll(
        ">",
        "&gt;"
    )

    .replaceAll(
        '"',
        "&quot;"
    )

    .replaceAll(
        "'",
        "&#039;"
    );

}


function safeExternalUrl(
    value
) {

    const url =
        String(
            value
            ||
            ""
        )
        .trim();


    if (
        /^https?:\/\//i
            .test(
                url
            )
    ) {

        return url;

    }


    return "";

}


function safeImageUrl(
    value
) {

    const url =
        String(
            value
            ||
            ""
        )
        .trim();


    if (
        /^https?:\/\//i
            .test(
                url
            )
        ||
        /^assets\//i
            .test(
                url
            )
    ) {

        return url;

    }


    return "";

}
