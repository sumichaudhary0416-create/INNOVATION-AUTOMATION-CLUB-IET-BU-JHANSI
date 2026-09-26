document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadHeader();

        loadFooter();

        setupMobileMenu();

        setupScrollAnimations();

        setupTiltCards();

        setupCertificateVerifier();

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


    if (!header) return;


    const currentPage =
        document.body.dataset.page || "home";


    const links = [

        ["home", "index.html", "Home"],

        ["about", "about.html", "About IAC"],

        ["eie", "eie.html", "About EIE"],

        ["team", "team.html", "Team"],

        ["projects", "projects.html", "Projects"],

        ["events", "events.html", "Events"],

        ["gallery", "gallery.html", "Gallery"],

        ["verify", "verify.html", "Verify"],

        ["contact", "contact.html", "Contact"],

        ["join", "join.html", "Join IAC"]

    ];


    let navHTML = "";


    links.forEach(
        ([page,url,label]) => {

            const active =
                page === currentPage
                    ? "active"
                    : "";


            const join =
                page === "join"
                    ? "join-nav"
                    : "";


            navHTML += `

                <a
                    href="${url}"
                    class="${active} ${join}"
                >
                    ${label}
                </a>

            `;

        }
    );


    header.innerHTML = `

        <header class="site-header">

            <nav class="navbar">


                <a
                    href="index.html"
                    class="brand"
                >

                    <div class="brand-logos">


                        <img
                            src="assets/logos/bu-logo.png"
                            alt="Bundelkhand University"
                            class="header-logo bu-logo"
                        >


                        <span class="logo-divider"></span>


                        <img
                            src="assets/logos/iac-logo.jpeg"
                            alt="IAC"
                            class="header-logo iac-logo"
                        >


                        <span class="logo-divider"></span>


                        <img
                            src="assets/logos/thinknext-logo.jpg"
                            alt="ThinkNext Technologies"
                            class="header-logo thinknext-logo"
                        >


                    </div>

                </a>


                <button
                    id="menuBtn"
                    class="menu-btn"
                    aria-label="Open menu"
                >
                    ☰
                </button>


                <div
                    id="navLinks"
                    class="nav-links"
                >

                    ${navHTML}

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


    if (!footer) return;


    footer.innerHTML = `

        <footer class="footer">


            <div class="footer-grid">


                <div>

                    <h3>
                        Innovation & Automation Club
                    </h3>

                    <p>

                        Electronics &
                        Instrumentation Engineering,
                        Institute of Engineering &
                        Technology,
                        Bundelkhand University,
                        Jhansi.

                    </p>


                    <div class="footer-logos">

                        <img
                            src="assets/logos/bu-logo.png"
                            alt="BU"
                            class="footer-bu"
                        >

                        <img
                            src="assets/logos/iac-logo.jpeg"
                            alt="IAC"
                            class="footer-iac"
                        >

                        <img
                            src="assets/logos/thinknext-logo.jpg"
                            alt="ThinkNext"
                            class="footer-thinknext"
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

                        <a href="eie.html">
                            EIE Department
                        </a>

                        <a href="team.html">
                            Team
                        </a>

                        <a href="projects.html">
                            Projects
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
                        >
                            Instagram
                        </a>

                        <a
                            href="https://youtube.com/@iac_iet"
                            target="_blank"
                        >
                            YouTube
                        </a>

                    </div>

                </div>

            </div>


            <div class="footer-bottom">

                IAC | EIE | IET | BU

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


    const nav =
        document.getElementById(
            "navLinks"
        );


    if (!button || !nav) return;


    button.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "show"
            );


            button.textContent =
                nav.classList.contains(
                    "show"
                )
                    ? "✕"
                    : "☰";

        }
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function setupScrollAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


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
                threshold: 0.10
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
   3D TEAM/FACULTY CARDS
========================================================= */

function setupTiltCards() {

    if (
        !window.matchMedia(
            "(hover:hover)"
        ).matches
    ) {
        return;
    }


    const cards =
        document.querySelectorAll(
            ".tilt-card"
        );


    cards.forEach(card => {


        card.addEventListener(
            "mousemove",
            event => {


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX
                    - rect.left;


                const y =
                    event.clientY
                    - rect.top;


                const rotateY =
                    ((x / rect.width) - 0.5)
                    * 7;


                const rotateX =
                    ((y / rect.height) - 0.5)
                    * -7;


                card.style.transform = `

                    perspective(900px)

                    rotateX(${rotateX}deg)

                    rotateY(${rotateY}deg)

                    translateY(-5px)

                `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });

}


/* =========================================================
   CERTIFICATE VERIFIER
========================================================= */

async function setupCertificateVerifier() {

    const form =
        document.getElementById(
            "certificateForm"
        );


    if (!form) return;


    const input =
        document.getElementById(
            "certificateId"
        );


    const result =
        document.getElementById(
            "certificateResult"
        );


    let certificates = [];


    try {

        const response =
            await fetch(
                "certificates.json",
                {
                    cache: "no-store"
                }
            );


        const data =
            await response.json();


        certificates =
            data.certificates || [];

    }

    catch (error) {

        console.error(
            "Certificate database error",
            error
        );

    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const id =
                input.value
                    .trim()
                    .toUpperCase();


            const certificate =
                certificates.find(
                    item =>

                        String(item.id)
                            .toUpperCase()
                            === id
                );


            if (!certificate) {

                result.className =
                    "verify-result invalid show";


                result.innerHTML = `

                    <h3>
                        ❌ Certificate Not Found
                    </h3>

                    <p>
                        Please check the certificate ID
                        and try again.
                    </p>

                `;


                return;
            }


            result.className =
                "verify-result valid show";


            result.innerHTML = `

                <h3>
                    ✅ Certificate Verified
                </h3>


                <div class="certificate-details">


                    <div class="certificate-detail">

                        <small>
                            Certificate ID
                        </small>

                        <strong>
                            ${escapeHTML(certificate.id)}
                        </strong>

                    </div>


                    <div class="certificate-detail">

                        <small>
                            Name
                        </small>

                        <strong>
                            ${escapeHTML(certificate.name)}
                        </strong>

                    </div>


                    <div class="certificate-detail">

                        <small>
                            Event
                        </small>

                        <strong>
                            ${escapeHTML(certificate.event)}
                        </strong>

                    </div>


                    <div class="certificate-detail">

                        <small>
                            Date
                        </small>

                        <strong>
                            ${escapeHTML(certificate.date)}
                        </strong>

                    </div>


                </div>

            `;

        }
    );

}


function escapeHTML(value) {

    return String(value ?? "")
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");

}
