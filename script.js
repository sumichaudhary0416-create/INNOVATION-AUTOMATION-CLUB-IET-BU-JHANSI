document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadHeader();

        loadFooter();

        setupMobileMenu();

        setupScrollAnimations();

        setupProjectFilters();

        setupGallery();

        setupMembershipForm();

    }
);


/* ========================================================
   HEADER
======================================================== */

function loadHeader() {

    const header =
        document.getElementById(
            "site-header"
        );

    if (!header) {
        return;
    }

    const currentPage =
        document.body.dataset.page || "home";

    const links = [

        ["home", "index.html", "Home"],

        ["about", "about.html", "About IAC"],

        ["eie", "eie.html", "About EIE"],

        ["team", "team.html", "Team"],

        ["alumni", "alumni.html", "Alumni"],

        ["projects", "projects.html", "Projects"],

        ["events", "events.html", "Events"],

        ["gallery", "gallery.html", "Gallery"],

        ["contact", "contact.html", "Contact"],

        ["join", "join.html", "Join IAC"]

    ];

    let navHTML = "";

    links.forEach(
        ([page, url, label]) => {

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
                    aria-label="IAC Home"
                >

                    <div class="brand-logos">


                        <img
                            src="assets/logos/bu-logo.png"
                            alt="Bundelkhand University Logo"
                            class="header-logo bu-logo"
                        >


                        <span
                            class="logo-divider"
                        ></span>


                        <img
                            src="assets/logos/iac-logo.png"
                            alt="Innovation and Automation Club Logo"
                            class="header-logo iac-logo"
                        >


                        <span
                            class="logo-divider"
                        ></span>


                        <img
                            src="assets/logos/thinknext-logo.png"
                            alt="ThinkNext Technologies Logo"
                            class="header-logo thinknext-logo"
                        >


                    </div>

                </a>


                <button
                    id="menuBtn"
                    class="menu-btn"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                >
                    ☰
                </button>


                <div
                    class="nav-links"
                    id="navLinks"
                >

                    ${navHTML}

                </div>


            </nav>

        </header>

    `;

}


/* ========================================================
   FOOTER
======================================================== */

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

                        Electronics &
                        Instrumentation Engineering
                        Department,
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
                            src="assets/logos/iac-logo.png"
                            alt="IAC"
                            class="footer-iac"
                        >

                        <img
                            src="assets/logos/thinknext-logo.png"
                            alt="ThinkNext Technologies"
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
                            About EIE
                        </a>

                        <a href="team.html">
                            Team
                        </a>

                        <a href="projects.html">
                            Projects
                        </a>

                        <a href="events.html">
                            Events
                        </a>

                        <a href="join.html">
                            Join IAC
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

                        <a href="contact.html">
                            Contact
                        </a>

                    </div>

                </div>


            </div>


            <div class="footer-bottom">

                © 2026 Innovation &
                Automation Club |
                EIE | IET |
                Bundelkhand University

            </div>

        </footer>

    `;

}


/* ========================================================
   MOBILE MENU
======================================================== */

function setupMobileMenu() {

    const button =
        document.getElementById(
            "menuBtn"
        );

    const nav =
        document.getElementById(
            "navLinks"
        );

    if (!button || !nav) {
        return;
    }

    button.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "show"
            );

            const isOpen =
                nav.classList.contains(
                    "show"
                );

            button.textContent =
                isOpen
                    ? "✕"
                    : "☰";

            button.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );

    nav.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "show"
                    );

                    button.textContent =
                        "☰";

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* ========================================================
   SCROLL ANIMATIONS
======================================================== */

function setupScrollAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );

    if (!elements.length) {
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
                threshold: 0.12,

                rootMargin:
                    "0px 0px -30px 0px"
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


/* ========================================================
   PROJECT FILTER
======================================================== */

function setupProjectFilters() {

    const buttons =
        document.querySelectorAll(
            ".filter-btn"
        );

    const projects =
        document.querySelectorAll(
            ".project-card"
        );

    if (!buttons.length) {
        return;
    }

    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    buttons.forEach(
                        btn => {

                            btn.classList
                                .remove(
                                    "active"
                                );

                        }
                    );

                    button.classList.add(
                        "active"
                    );

                    const filter =
                        button.dataset.filter;

                    projects.forEach(
                        project => {

                            const category =
                                project.dataset.category;

                            if (
                                filter === "all" ||
                                filter === category
                            ) {

                                project.style.display =
                                    "block";

                            } else {

                                project.style.display =
                                    "none";

                            }

                        }
                    );

                }
            );

        }
    );

}


/* ========================================================
   GALLERY
======================================================== */

function setupGallery() {

    const images =
        document.querySelectorAll(
            ".gallery-card img"
        );

    const modal =
        document.getElementById(
            "galleryModal"
        );

    const modalImage =
        document.getElementById(
            "galleryModalImage"
        );

    const close =
        document.getElementById(
            "galleryClose"
        );

    if (
        !images.length ||
        !modal ||
        !modalImage
    ) {

        return;

    }

    images.forEach(
        image => {

            image.addEventListener(
                "click",
                () => {

                    modalImage.src =
                        image.src;

                    modal.classList.add(
                        "show"
                    );

                }
            );

        }
    );

    if (close) {

        close.addEventListener(
            "click",
            () => {

                modal.classList.remove(
                    "show"
                );

            }
        );

    }

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                modal.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* ========================================================
   MEMBERSHIP FORM
======================================================== */

function setupMembershipForm() {

    const form =
        document.getElementById(
            "membershipForm"
        );

    const message =
        document.getElementById(
            "formMessage"
        );

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            if (message) {

                message.textContent =
                    "Form is ready. Connect it with Google Sheets or Firebase to save registrations.";

            }

        }
    );

}
