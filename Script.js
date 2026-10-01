/* =========================================================
   JENNIFER UGWOKE — PORTFOLIO INTERACTIONS
========================================================= */


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-category, .certification-card, .about-quote, .about-text"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   MOUSE FOLLOWING GLOW
========================================================= */

const glow = document.createElement("div");

glow.className = "mouse-glow";

document.body.appendChild(glow);


document.addEventListener("mousemove", (event) => {

    glow.style.left = `${event.clientX}px`;

    glow.style.top = `${event.clientY}px`;

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(
    ".nav-links a"
);

const navObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                });

                const activeLink =
                    document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );

                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    },
    {
        threshold: 0.45
    }
);

sections.forEach((section) => {

    navObserver.observe(section);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.querySelector("#current-year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}