"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

type Language = "nl" | "en";

const galleryImage = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&fit=crop`;

const galleryImageExternal = (url: string) =>
  `${url}${url.includes("?") ? "&" : "?"}w=900&h=675&fit=crop`;

const images = {
  hero:
    "https://cdn.pixabay.com/photo/2026/03/02/15/24/los-angeles-cs-commercial-cleaning-10152157_1280.jpg",
  people:
    "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=900",
  leader: "/Leader.PNG",
  team: "/Cleaners1.PNG",
  general:
    "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200",
  offices: galleryImage("33728673"),
  schools: galleryImage("4484078"),
  gyms: galleryImageExternal(
    "https://cdn.pixabay.com/photo/2026/03/02/15/24/los-angeles-cs-commercial-cleaning-10152157_1280.jpg"
  ),
  staircases: galleryImage("4107112"),
  restaurants: galleryImage("8440062"),
  hotels: galleryImage("4239091"),
  glass:
    "https://images.pexels.com/photos/33728673/pexels-photo-33728673.jpeg?auto=compress&cs=tinysrgb&w=1200",
  floor:
    "https://cdn.pixabay.com/photo/2026/03/02/15/24/los-angeles-cs-commercial-cleaning-10152157_1280.jpg",
  handover:
    "https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=1200"
};

const galleryFocus = ["center", "center", "center", "center 68%", "center 78%", "center"];

const content = {
  nl: {
    nav: { home: "Home", about: "Over ons", services: "Diensten", work: "Werk", contact: "Contact" },
    hero: {
      headline: "Uw frisse start, begint bij ons",
      text: "Professionele schoonmaak voor kantoren, scholen, sportscholen, trappenhuizen, restaurants en hotels in Amsterdam.",
      viewServices: "Bekijk diensten",
      bookVisit: "Afspraak aanvragen"
    },
    about: {
      eyebrow: "Over ons",
      title: "King Cleaning staat voor schoon en zorgvuldig:",
      highlight: "lokaal, loyaal, mensgericht en transparant",
      suffix: "met de ziel van Zuidoost",
      text: "Een Amsterdams schoonmaakbedrijf uit Zuidoost voor commerciele locaties, met vaste teams, korte communicatielijnen en zichtbare kwaliteit."
    },
    stats: [
      {
        value: "10+",
        title: "Jaar ervaring",
        description: "Ervaring in schoonmaak voor kantoren, scholen, sportscholen, trappenhuizen, restaurants en hotels.",
        tone: "featured"
      },
      { value: "1 dag", title: "Reactietijd", description: "Reactie op meldingen binnen een werkdag." },
      { value: "Vast", title: "Lokale teams", description: "Vaste gezichten uit Zuidoost die de buurt kennen." },
      {
        image: images.people,
        title: "Mensgericht",
        description: "Respectvolle omgang, duidelijke instructies en representatieve uitstraling."
      },
      {
        value: "KPI's",
        title: "Kwaliteitscontrole",
        description: "Visuele rapportages, logboekopvolging en periodieke evaluatie."
      }
    ],
    principles: [
      {
        title: "Onze visie",
        text: "Goede schoonmaak betekent de locatie kennen, snel schakelen met facility managers en werken met duidelijke afspraken."
      },
      {
        title: "Onze missie",
        text: "Schone en veilige werkomgevingen en publieke ruimtes leveren met constant, meetbaar onderhoud en betrouwbare teams."
      }
    ],
    process: {
      eyebrow: "Onze mensen & werkwijze",
      title: "Hoe King Cleaning werkt",
      text: "Een direct aangestuurd bedrijf met vaste schoonmaakteams, duidelijke taakplanning en kwaliteitsopvolging per gebouw.",
      cards: [
        { name: "Directie & planning", role: "Onder leiding van King Prosper Asem", image: images.leader },
        { name: "Vaste lokale schoonmaakteams", role: "Algemene en specialistische schoonmaak", image: images.team },
        { name: "Kwaliteit & communicatie", role: "Rapportages, logboeken en opvolging", image: images.people }
      ]
    },
    gallery: {
      eyebrow: "Diensten",
      title: "Achter het werk",
      text: "Een indruk van de commerciele locaties waar King Cleaning dagelijks voor zorgt.",
      items: [
        { label: "Kantoren", image: images.offices },
        { label: "Scholen", image: images.schools },
        { label: "Sportscholen", image: images.gyms },
        { label: "Trappenhuizen", image: images.staircases },
        { label: "Restaurants", image: images.restaurants },
        { label: "Hotels", image: images.hotels }
      ]
    },
    services: {
      eyebrow: "Diensten",
      title: "Onze schoonmaakdiensten",
      text: "Schoonmaak op maat voor commerciele locaties, met duidelijke planning, vaste teams en kwaliteitscontrole.",
      aria: "Sectoren en diensten van King Cleaning",
      sectors: [
        "Kantoren",
        "Scholen",
        "Sportscholen",
        "Trappenhuizen",
        "Restaurants",
        "Hotels"
      ]
    },
    plans: [
      {
        name: "Contract schoonmaak",
        price: "Op maat",
        description: "Voor dagelijks of periodiek onderhoud van kantoren, scholen, sportscholen en trappenhuizen.",
        features: [
          "Algemene schoonmaak",
          "Trappenhuizen en gemeenschappelijke ruimtes",
          "Vloer- en sanitaire ruimtes"
        ]
      },
      {
        name: "Horeca & hospitality",
        price: "Op maat",
        description: "Voor restaurants en hotels waar hygiëne, presentatie en flexibele planning essentieel zijn.",
        featured: true,
        features: [
          "Restaurants",
          "Hotels",
          "Keukens, lobby's en gastruimtes",
          "Dieptereiniging op aanvraag"
        ]
      },
      {
        name: "Specialistisch werk",
        price: "Op maat",
        description: "Voor glas, gevels, vloeren en oplevering na bouw of renovatie.",
        features: [
          "Glasbewassing",
          "Gevelreiniging",
          "Vloer- & tapijtonderhoud",
          "Bouw- & opleveringsschoonmaak"
        ]
      }
    ],
    contact: {
      eyebrow: "Contact",
      title: "Houd uw locatie fris",
      text: "Van kantoren en scholen tot restaurants en hotels: King Cleaning maakt het eenvoudig om scope, planning en kwaliteit af te spreken.",
      tagline: "Uw frisse start, begint bij ons.",
      getStarted: "Neem contact op",
      reach: "Bereikbaar via",
      business: "Bedrijfsgegevens",
      director: "Directeur: King Prosper Asem",
      quick: "Snelle links"
    },
    buttons: { bookPackage: "Vraag deze dienst aan" }
  },
  en: {
    nav: { home: "Home", about: "About", services: "Services", work: "Work", contact: "Contact" },
    hero: {
      headline: "Your fresh start begins with us",
      text: "Professional cleaning for offices, schools, gyms, staircases, restaurants, and hotels in Amsterdam.",
      viewServices: "View Services",
      bookVisit: "Book a Visit"
    },
    about: {
      eyebrow: "About Us",
      title: "King Cleaning stands for clean and careful:",
      highlight: "local, loyal, people-oriented and transparent",
      suffix: "with the soul of Zuidoost",
      text: "An Amsterdam-based commercial cleaning company rooted in Zuidoost, working with fixed teams, short communication lines, and visible quality."
    },
    stats: [
      {
        value: "10+",
        title: "Years experience",
        description: "Experience cleaning offices, schools, gyms, staircases, restaurants, and hotels.",
        tone: "featured"
      },
      { value: "1 day", title: "Response time", description: "Response to notifications within one business day." },
      { value: "Fixed", title: "Local teams", description: "Regular faces from Zuidoost who know the neighbourhood." },
      {
        image: images.people,
        title: "People-oriented",
        description: "Respectful treatment, clear instructions, and representative clothing."
      },
      {
        value: "KPIs",
        title: "Quality checks",
        description: "Visual reports, logbook follow-up, and periodic evaluation."
      }
    ],
    principles: [
      {
        title: "Our Vision",
        text: "Good cleaning means knowing the site, responding quickly to facility managers, and working with clear agreements."
      },
      {
        title: "Our Mission",
        text: "Delivering clean and safe workplaces and public spaces through consistent, measurable maintenance with reliable teams."
      }
    ],
    process: {
      eyebrow: "Our People & Process",
      title: "How King Cleaning Works",
      text: "A director-led company with fixed cleaning teams, clear task planning, and quality follow-up for every building.",
      cards: [
        { name: "Director & Planning", role: "Led by King Prosper Asem", image: images.leader },
        { name: "Fixed Local Cleaning Teams", role: "General & specialist cleaning", image: images.team },
        { name: "Quality & Communication", role: "Reports, logbooks & follow-up", image: images.people }
      ]
    },
    gallery: {
      eyebrow: "Services",
      title: "Behind the Work",
      text: "A look at the commercial locations King Cleaning supports every day.",
      items: [
        { label: "Offices", image: images.offices },
        { label: "Schools", image: images.schools },
        { label: "Gyms", image: images.gyms },
        { label: "Staircases", image: images.staircases },
        { label: "Restaurants", image: images.restaurants },
        { label: "Hotels", image: images.hotels }
      ]
    },
    services: {
      eyebrow: "Services",
      title: "Our Cleaning Work",
      text: "Tailored cleaning for commercial locations, with clear planning, fixed teams, and quality control.",
      aria: "King Cleaning sectors and services",
      sectors: [
        "Offices",
        "Schools",
        "Gyms",
        "Staircases",
        "Restaurants",
        "Hotels"
      ]
    },
    plans: [
      {
        name: "Contract Cleaning",
        price: "Custom",
        description: "For daily or recurring maintenance of offices, schools, gyms, and staircases.",
        features: [
          "General cleaning",
          "Staircases and shared areas",
          "Floors and sanitary spaces"
        ]
      },
      {
        name: "Hospitality",
        price: "Custom",
        description: "For restaurants and hotels where hygiene, presentation, and flexible planning matter.",
        featured: true,
        features: [
          "Restaurants",
          "Hotels",
          "Kitchens, lobbies, and guest areas",
          "Deep cleaning on request"
        ]
      },
      {
        name: "Specialist Work",
        price: "Custom",
        description: "For glass, facades, floors, and post-construction handover cleaning.",
        features: [
          "Window cleaning",
          "Facade cleaning",
          "Floor and carpet maintenance",
          "Construction and handover cleaning"
        ]
      }
    ],
    contact: {
      eyebrow: "Contact Us",
      title: "Let's Keep Your Location Fresh",
      text: "From offices and schools to restaurants and hotels, King Cleaning makes it simple to agree on scope, planning, and quality.",
      tagline: "Your fresh start begins with us.",
      getStarted: "Get Started",
      reach: "Reach Out",
      business: "Business Details",
      director: "Director: King Prosper Asem",
      quick: "Quick Links"
    },
    buttons: { bookPackage: "Book This Package" }
  }
};

const footerImages = [
  "https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/33728673/pexels-photo-33728673.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://cdn.pixabay.com/photo/2026/03/02/15/24/los-angeles-cs-commercial-cleaning-10152157_1280.jpg",
  "https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=900"
];

const emailLink = (subject: string) =>
  `mailto:info@kingcleaning.nl?subject=${encodeURIComponent(subject)}`;

export default function FixedHomePage() {
  const [language, setLanguage] = useState<Language>("nl");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuWasOpenRef = useRef(false);
  const t = content[language];

  const closeMenu = () => setMenuOpen(false);

  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    menuWasOpenRef.current = false;
    setMenuOpen(false);

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const headerOffset = window.matchMedia("(max-width: 820px)").matches ? 76 : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.pushState(null, "", `#${sectionId}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      menuWasOpenRef.current = true;
      const firstLink = document.querySelector<HTMLElement>("#mobile-menu a");
      firstLink?.focus();
      return;
    }

    if (menuWasOpenRef.current) {
      menuToggleRef.current?.focus();
      menuWasOpenRef.current = false;
    }
  }, [menuOpen]);

  return (
    <main
      className={styles.page}
      style={{
        background:
          "radial-gradient(circle at top left, rgba(127, 180, 173, 0.22), transparent 26%), linear-gradient(180deg, #edf5f3 0%, #f8faf8 38%, #f6f4ef 100%)"
      }}
    >
      <section className={styles.heroWrap}>
        <div className={styles.container}>
          <header className={`${styles.header} ${menuOpen ? styles.headerMenuOpen : ""}`}>
            <a className={styles.brand} href="#home" onClick={(event) => navigateToSection(event, "home")}>
              <img className={styles.brandLogo} src="/King-Logo.png" alt="King Cleaning B.V logo" />
              <span>King Cleaning B.V</span>
            </a>
            <nav className={styles.nav} aria-label="Main navigation">
              <a href="#home" onClick={(event) => navigateToSection(event, "home")}>{t.nav.home}</a>
              <a href="#about" onClick={(event) => navigateToSection(event, "about")}>{t.nav.about}</a>
              <a href="#services" onClick={(event) => navigateToSection(event, "services")}>{t.nav.services}</a>
              <a href="#project" onClick={(event) => navigateToSection(event, "project")}>{t.nav.work}</a>
            </nav>
            <div className={styles.headerActions}>
              <div className={styles.languageToggle} aria-label="Language selector">
                <button
                  className={language === "nl" ? styles.languageActive : ""}
                  type="button"
                  onClick={() => setLanguage("nl")}
                  aria-pressed={language === "nl"}
                >
                  NL
                </button>
                <button
                  className={language === "en" ? styles.languageActive : ""}
                  type="button"
                  onClick={() => setLanguage("en")}
                  aria-pressed={language === "en"}
                >
                  EN
                </button>
              </div>
              <a className={styles.cta} href="#contact" onClick={(event) => navigateToSection(event, "contact")}>
                {t.nav.contact}
                <span className={styles.ctaArrow}>-&gt;</span>
              </a>
            </div>
            <button
              ref={menuToggleRef}
              className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </header>

          <div className={styles.heroCard} id="home">
            <img
              className={styles.heroImage}
              src={images.hero}
              alt="Professional commercial floor cleaning in a business facility"
            />
            <div className={styles.heroShade} />
            <div className={styles.heroInner}>
              <div className={styles.heroLead}>
                <span className={styles.pill}>King Cleaning B.V</span>
                <h1>{t.hero.headline}</h1>
              </div>
              <div className={styles.heroAside}>
                <p>{t.hero.text}</p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryAction} href="#services" onClick={(event) => navigateToSection(event, "services")}>
                    {t.hero.viewServices}
                  </a>
                  <a className={styles.secondaryAction} href={emailLink("Book a visit with King Cleaning B.V")}>
                    {t.hero.bookVisit}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.container}>
          <div className={styles.sectionEyebrow}>{t.about.eyebrow}</div>
          <div className={styles.centerIntro}>
            <h2>
              {t.about.title}
              <span> {t.about.highlight}</span>
              <br />
              {t.about.suffix}
            </h2>
            <p>{t.about.text}</p>
          </div>

          <div className={styles.statsGrid}>
            {t.stats.map((item) => (
              <article
                key={item.title}
                className={`${styles.statCard} ${
                  item.tone === "featured" ? styles.statFeatured : ""
                } ${item.image ? styles.statImageCard : ""}`}
              >
                {item.image ? (
                  <>
                    <img className={styles.cardImage} src={item.image} alt={item.title} />
                    <div className={styles.imageCardText}>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <strong>{item.value}</strong>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </>
                )}
              </article>
            ))}
          </div>

          <div className={styles.principlesGrid}>
            {t.principles.map((item) => (
              <article key={item.title} className={styles.principleCard}>
                <div className={styles.iconBubble}>KC</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.teamSection}`}>
        <div className={styles.container}>
          <div className={styles.splitHeading}>
            <div>
              <div className={styles.sectionEyebrow}>{t.process.eyebrow}</div>
              <h2>{t.process.title}</h2>
            </div>
            <p>{t.process.text}</p>
          </div>

          <div className={styles.teamGrid}>
            {t.process.cards.map((member) => (
              <article key={member.name} className={styles.teamCard}>
                <img src={member.image} alt={member.name} />
                <div className={styles.teamMeta}>
                  <span>{member.role}</span>
                  <h3>{member.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.gallerySection}`} id="project">
        <div className={styles.container}>
          <div className={styles.centerIntro}>
            <div className={styles.sectionEyebrow}>{t.gallery.eyebrow}</div>
            <h2>{t.gallery.title}</h2>
            <p>{t.gallery.text}</p>
          </div>

          <div className={styles.galleryGrid}>
            {t.gallery.items.map((item, index) => (
              <article key={item.label} className={styles.galleryCard}>
                <img
                  src={item.image}
                  alt={`${item.label} cleaning service`}
                  width={900}
                  height={675}
                  loading="lazy"
                  style={{ objectPosition: galleryFocus[index] ?? "center" }}
                />
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="services">
        <div className={styles.container}>
          <div className={styles.splitHeading}>
            <div>
              <div className={styles.sectionEyebrow}>{t.services.eyebrow}</div>
              <h2>{t.services.title}</h2>
            </div>
            <p>{t.services.text}</p>
          </div>

          <div className={styles.servicePills} aria-label={t.services.aria}>
            {t.services.sectors.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>

          <div className={styles.planGrid}>
            {t.plans.map((plan) => (
              <article
                key={plan.name}
                className={`${styles.planCard} ${plan.featured ? styles.planFeatured : ""}`}
              >
                <div className={styles.planHeader}>
                  <span>{plan.name}</span>
                  <strong>{plan.price}</strong>
                  <p>{plan.description}</p>
                </div>
                <ul className={styles.featureList}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className={styles.planButton} href={emailLink(`King Cleaning inquiry - ${plan.name}`)}>
                  {t.buttons.bookPackage}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.footerSection}`} id="contact">
        <div className={styles.container}>
          <div className={styles.centerIntro}>
            <div className={styles.sectionEyebrow}>{t.contact.eyebrow}</div>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>

          <div className={styles.footerGallery}>
            {footerImages.map((image, index) => (
              <img key={image} src={image} alt={`King Cleaning service preview ${index + 1}`} />
            ))}
          </div>

          <div className={styles.contactPanel}>
            <div className={styles.contactLead}>
              <span>King Cleaning B.V</span>
              <h3>{t.contact.tagline}</h3>
              <a className={styles.primaryAction} href={emailLink("King Cleaning website inquiry")}>
                {t.contact.getStarted}
              </a>
            </div>

            <div className={styles.contactLinks}>
              <div>
                <span>{t.contact.reach}</span>
                <a href="mailto:info@kingcleaning.nl">info@kingcleaning.nl</a>
                <a href="tel:+31202380376">+31 - 020-2380376</a>
                <a href="tel:+31622813149">+31 - 622813149</a>
              </div>
              <div>
                <span>{t.contact.business}</span>
                <p>{t.contact.director}</p>
                <p>Paasheuvelweg 33, 1105 BG Amsterdam</p>
              </div>
              <div>
                <span>{t.contact.quick}</span>
                <a href="#about" onClick={(event) => navigateToSection(event, "about")}>{t.nav.about}</a>
                <a href="#services" onClick={(event) => navigateToSection(event, "services")}>{t.nav.services}</a>
                <a href="#project" onClick={(event) => navigateToSection(event, "project")}>{t.nav.work}</a>
                <a href="#contact" onClick={(event) => navigateToSection(event, "contact")}>{t.nav.contact}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={language === "nl" ? "Navigatiemenu" : "Navigation menu"}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuPanel}>
          <div className={styles.mobileMenuHeader}>
            <span className={styles.mobileMenuTitle}>Menu</span>
            <button
              className={styles.mobileMenuClose}
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              {language === "nl" ? "Sluiten" : "Close"}
            </button>
          </div>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <a href="#home" onClick={(event) => navigateToSection(event, "home")}>
              {t.nav.home}
            </a>
            <a href="#about" onClick={(event) => navigateToSection(event, "about")}>
              {t.nav.about}
            </a>
            <a href="#services" onClick={(event) => navigateToSection(event, "services")}>
              {t.nav.services}
            </a>
            <a href="#project" onClick={(event) => navigateToSection(event, "project")}>
              {t.nav.work}
            </a>
            <a href="#contact" onClick={(event) => navigateToSection(event, "contact")}>
              {t.nav.contact}
            </a>
          </nav>
          <div className={styles.mobileMenuFooter}>
            <div className={styles.languageToggle} aria-label="Language selector">
              <button
                className={language === "nl" ? styles.languageActive : ""}
                type="button"
                onClick={() => setLanguage("nl")}
                aria-pressed={language === "nl"}
              >
                NL
              </button>
              <button
                className={language === "en" ? styles.languageActive : ""}
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>
            <a className={styles.mobileMenuCta} href="#contact" onClick={(event) => navigateToSection(event, "contact")}>
              {t.nav.contact}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
