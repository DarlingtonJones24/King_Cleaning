"use client";

import type { FormEvent, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

type Language = "nl" | "en";
type ServiceKey = "general" | "deep" | "window";

const images = {
  hero:
    "https://cdn.pixabay.com/photo/2026/03/02/15/24/los-angeles-cs-commercial-cleaning-10152157_1280.jpg",
  founder: "/king-prosper.jpg",
  planning: "/Leader.PNG",
  team: "/Cleaners1.PNG",
  quality: "/quality%20and%20communication.jpg",
  offices: "/offices.jpg",
  schools: "/schools.jpg",
  gyms: "/gyms.webp",
  staircases:
    "https://files.autoblogging.ai/images/how-to-clean-office-elevators-and-stairwells-best-practices-for-shared-office-buildings-in-london(dzyc).jpg_01.jpeg",
  restaurants: "/restaurant.webp",
  hotels: "/hotels.jpg"
};

const galleryFocus = ["center", "center", "center", "center 68%", "center 78%", "center"];

const content = {
  nl: {
    nav: { home: "Home", about: "Over ons", services: "Diensten", work: "Impressie", contact: "Contact" },
    hero: {
      headline: "Uw frisse start, begint bij ons",
      viewServices: "Bekijk diensten",
      contactUs: "Neem contact op",
      scrollHint: "Scroll voor meer"
    },
    about: {
      eyebrow: "Over King Cleaning",
      title: "Over King Cleaning",
      text: "Onder leiding van King Prosper bieden wij professionele schoonmaakdiensten voor bedrijven van elk type, waaronder ziekenhuizen, kantoren, restaurants, winkelruimtes en commerciele locaties in Amsterdam.",
      founderTitle: "Oprichter van King Cleaning",
      missionTitle: "Onze missie",
      mission:
        "Uitzonderlijke, betrouwbare en professionele schoonmaakdiensten leveren met vakmanschap en aandacht.",
      visionTitle: "Onze visie",
      vision:
        "Onze visie is om de vertrouwde leider in commerciele schoonmaak te zijn en de standaard te zetten voor kwaliteit, integriteit en klanttevredenheid."
    },
    stats: [
      {
        value: "20+",
        title: "Jaar ervaring",
        description: "Betrouwbare, professionele schoonmaak met decennia aan vakkennis."
      },
      {
        value: "24 uur",
        title: "Reactie binnen 24 uur",
        description: "Snelle communicatie en prompte service wanneer u ons nodig heeft."
      },
      {
        value: "Voordelig",
        title: "Betaalbare langetermijnoplossingen",
        description: "Flexibele en kosteneffectieve plannen die blijvende waarde bieden."
      },
      {
        value: "Vast",
        title: "Betrouwbaar & professioneel team",
        description: "Volledig getraind, betrouwbaar personeel met de hoogste standaarden."
      }
    ],
    process: {
      eyebrow: "Onze mensen & werkwijze",
      title: "Hoe King Cleaning werkt",
      text: "Een direct aangestuurd bedrijf met vaste schoonmaakteams, duidelijke taakplanning en kwaliteitsopvolging per gebouw.",
      cards: [
        { name: "Directie & planning", role: "Onder leiding van King Prosper Asem", image: images.planning },
        { name: "Vaste lokale schoonmaakteams", role: "Algemene en specialistische schoonmaak", image: images.team },
        { name: "Kwaliteit & communicatie", role: "Rapportages, logboeken en opvolging", image: images.quality, alt: "Professionele samenwerking en opvolging" }
      ]
    },
    gallery: {
      eyebrow: "Diensten",
      title: "Werk in beeld",
      text: "Van kantoren en scholen tot restaurants en hotels: King Cleaning maakt het eenvoudig om afspraken te maken over scope, planning en kwaliteit.",
      items: [
        {
          label: "Kantoren",
          alt: "Schoonmaker reinigt de vloer in een kantoor",
          image: images.offices
        },
        {
          label: "Scholen",
          alt: "Professionele schoonmaak in een school",
          image: images.schools
        },
        {
          label: "Sportscholen",
          alt: "Schone fitnessruimte na professionele schoonmaak",
          image: images.gyms
        },
        {
          label: "Trappenhuizen",
          alt: "Schoonmaak van trappenhuizen in kantoorgebouwen",
          image: images.staircases
        },
        {
          label: "Restaurants",
          alt: "Nette restaurantomgeving na schoonmaak",
          image: images.restaurants
        },
        {
          label: "Hotels",
          alt: "Verzorgde hotelkamer na professionele schoonmaak",
          image: images.hotels
        }
      ]
    },
    services: {
      eyebrow: "Diensten",
      title: "Prijzen & pakketten",
      text: "Duidelijke starttarieven per uur, met maatwerk voor grotere of complexere locaties.",
      selectorTitle: "Selecteer uw diensten",
      selectorHint: "Kies een of meerdere diensten. Uw selectie wordt meegestuurd met de aanvraag.",
      summaryTitle: "Geselecteerde diensten",
      summaryEmpty: "Nog geen diensten geselecteerd.",
      options: {
        general: "Algemene schoonmaak",
        deep: "Dieptereiniging",
        window: "Glasbewassing"
      },
      perHour: "per uur, per schoonmaker",
      startingRate: "Starttarief",
      buildingSize: "Gebouwgrootte",
      cleaners: "Schoonmakers",
      time: "Tijd",
      startingPrice: "Startprijs",
      includes: "Inclusief",
      additionalCharges: "Extra kosten",
      service: "Dienst",
      requirement: "Vereiste",
      charge: "Toeslag",
      customQuote: "Maatwerk offerte",
      siteAssessment: "Locatiebeoordeling",
      interiorWindows: "Binnenramen",
      exteriorWindows: "Buitenramen",
      tableScrollHint: "Veeg naar rechts voor alle kolommen →"
    },
    contact: {
      eyebrow: "Contact",
      title: "Neem contact op",
      text: "Vraag een offerte aan of plan een kennismaking. Wij reageren binnen 24 uur.",
      formName: "Naam",
      formEmail: "E-mail",
      formPhone: "Telefoon",
      formMessage: "Bericht",
      formSubmit: "Aanvraag versturen",
      reach: "Bereikbaar via",
      business: "Bedrijfsgegevens",
      director: "Directeur: King Prosper Asem",
      quick: "Snelle links",
      copyright: "© King Cleaning B.V. Alle rechten voorbehouden."
    }
  },
  en: {
    nav: { home: "Home", about: "About", services: "Services", work: "Gallery", contact: "Contact" },
    hero: {
      headline: "Your fresh start begins with us",
      viewServices: "View Services",
      contactUs: "Contact Us",
      scrollHint: "Scroll for more"
    },
    about: {
      eyebrow: "About King Cleaning",
      title: "About King Cleaning",
      text: "Led by King Prosper, we provide professional cleaning services for businesses of all types, including hospitals, offices, restaurants, retail spaces, and commercial facilities in Amsterdam.",
      founderTitle: "Founder of King Cleaning",
      missionTitle: "Our Mission",
      mission:
        "To provide exceptional, reliable and professional cleaning services with professionalism.",
      visionTitle: "Our Vision",
      vision:
        "Our vision is to be the trusted leader in commercial cleaning, setting the standard for quality, integrity, and customer satisfaction."
    },
    stats: [
      {
        value: "20+",
        title: "Years of Experience",
        description: "Delivering trusted, professional cleaning services backed by decades of industry expertise."
      },
      {
        value: "24 hrs",
        title: "Response Within 24 Hours",
        description: "Fast communication and prompt service when you need us most."
      },
      {
        value: "Value",
        title: "Affordable Long-Term Solutions",
        description: "Flexible and cost-effective cleaning plans designed to provide lasting value for your business."
      },
      {
        value: "Trusted",
        title: "Trusted & Professional Team",
        description: "Fully trained, reliable staff committed to the highest standards of cleanliness and customer care."
      }
    ],
    process: {
      eyebrow: "Our People & Process",
      title: "How King Cleaning Works",
      text: "A director-led company with fixed cleaning teams, clear task planning, and quality follow-up for every building.",
      cards: [
        { name: "Director & Planning", role: "Led by King Prosper Asem", image: images.planning },
        { name: "Fixed Local Cleaning Teams", role: "General & specialist cleaning", image: images.team },
        { name: "Quality & Communication", role: "Reports, logbooks & follow-up", image: images.quality, alt: "Professional partnership and follow-up" },
      ]
    },
    gallery: {
      eyebrow: "Services",
      title: "Work in Pictures",
      text: "From offices and schools to restaurants and hotels, King Cleaning makes it simple to agree on scope, planning, and quality.",
      items: [
        {
          label: "Offices",
          alt: "Cleaner cleaning the floor in an open-plan office",
          image: images.offices
        },
        {
          label: "Schools",
          alt: "Professional cleaning in a school",
          image: images.schools
        },
        {
          label: "Gyms",
          alt: "Spotless gym after professional cleaning",
          image: images.gyms
        },
        {
          label: "Staircases",
          alt: "Cleaning stairwells in office buildings",
          image: images.staircases
        },
        {
          label: "Restaurants",
          alt: "Tidy restaurant after professional cleaning",
          image: images.restaurants
        },
        {
          label: "Hotels",
          alt: "Well-kept hotel room after professional cleaning",
          image: images.hotels
        }
      ]
    },
    services: {
      eyebrow: "Services",
      title: "Pricing & Packages",
      text: "Clear hourly starting rates, with customised quotes for larger or more complex buildings.",
      selectorTitle: "Select your services",
      selectorHint: "Choose one or more services. Your selection is included with your request.",
      summaryTitle: "Selected services",
      summaryEmpty: "No services selected yet.",
      options: {
        general: "General Cleaning",
        deep: "Deep Cleaning",
        window: "Window Cleaning"
      },
      perHour: "per hour, per cleaner",
      startingRate: "Starting rate",
      buildingSize: "Building Size",
      cleaners: "Cleaners Required",
      time: "Time Required",
      startingPrice: "Starting Price",
      includes: "Includes",
      additionalCharges: "Additional Charges",
      service: "Service",
      requirement: "Requirement",
      charge: "Additional Charge",
      customQuote: "Custom Quote",
      siteAssessment: "Site Assessment",
      interiorWindows: "Interior Windows",
      exteriorWindows: "Exterior Windows",
      tableScrollHint: "Swipe right to see all columns →"
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Get in Touch",
      text: "Request a quote or schedule an introduction. We respond within 24 hours.",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone",
      formMessage: "Message",
      formSubmit: "Send Request",
      reach: "Reach Out",
      business: "Business Details",
      director: "Director: King Prosper Asem",
      quick: "Quick Links",
      copyright: "© King Cleaning B.V. All rights reserved."
    }
  }
};

const generalPricing = {
  rate: "€27",
  rows: [
    ["Up to 250 m²", "1", "2 Hours", "€54"],
    ["251 - 500 m²", "1", "3 Hours", "€81"],
    ["501 - 750 m²", "2", "4 Hours", "€216"],
    ["751 - 1,000 m²", "2", "5 Hours", "€270"],
    ["1,001 - 1,500 m²", "3", "6 Hours", "€486"],
    ["1,501 - 2,500 m²", "4", "7 Hours", "€756"],
    ["2,501 - 4,000 m²", "5", "8 Hours", "€1,080"],
    ["4,000+ m²", "Custom Team", "Site Assessment", "Custom Quote"]
  ],
  includes: [
    "Floors, surfaces and common areas",
    "Kitchen and restroom sanitation",
    "Desks and reception areas",
    "Break areas and kitchens",
    "Trash removal and restocking"
  ]
};

const deepPricing = {
  rate: "€35",
  rows: generalPricing.rows.map((row, index) =>
    index === 0
      ? ["Up to 250 m²", "1", "2 Hours", "€70"]
      : index === 1
        ? ["251 - 500 m²", "1", "3 Hours", "€105"]
        : index === 2
          ? ["501 - 750 m²", "2", "4 Hours", "€280"]
          : index === 3
            ? ["751 - 1,000 m²", "2", "5 Hours", "€350"]
            : index === 4
              ? ["1,001 - 1,500 m²", "3", "6 Hours", "€630"]
              : index === 5
                ? ["1,501 - 2,500 m²", "4", "7 Hours", "€980"]
                : index === 6
                  ? ["2,501 - 4,000 m²", "5", "8 Hours", "€1,400"]
                  : row
  ),
  includes: [
    "Everything in General Cleaning, plus:",
    "Detailed restroom scrubbing",
    "Window sills and door frames",
    "Storage areas and behind furniture",
    "Deep cleaning of microwaves, fridges and ovens (inside)",
    "Interior detail cleaning",
    "Ideal for seasonal refreshes and pre-event cleaning"
  ]
};

const interiorWindowPricing = {
  rate: "€30",
  rows: [
    ["Up to 250 m²", "2 Hours", "€60"],
    ["251 - 500 m²", "3 Hours", "€90"],
    ["501 - 1,000 m²", "4 Hours", "€120"],
    ["1,001 - 2,000 m²", "5 Hours", "€150"],
    ["2,001+ m²", "Custom Quote", "Custom Quote"]
  ]
};

const exteriorWindowPricing = {
  rate: "€32",
  rows: interiorWindowPricing.rows.map((row, index) =>
    index === 0
      ? ["Up to 250 m²", "2 Hours", "€64"]
      : index === 1
        ? ["251 - 500 m²", "3 Hours", "€96"]
        : index === 2
          ? ["501 - 1,000 m²", "4 Hours", "€128"]
          : index === 3
            ? ["1,001 - 2,000 m²", "5 Hours", "€160"]
            : row
  )
};

const additionalCharges = [
  ["Each Additional Floor", "Per visit", "+€20 per visit"],
  ["Each Additional Bathroom", "Over 4 bathrooms", "+€10 per bathroom"],
  ["Emergency / Same-Day Cleaning", "Same-day request", "+15% surcharge"],
  ["Deep Clean of Fridge, Oven or Microwave", "Per appliance", "From €25 per appliance"],
  ["High-Level Window Access Equipment", "Inspection required", "Quoted upon inspection"]
];

const serviceOrder: ServiceKey[] = ["general", "deep", "window"];

export default function FixedHomePage() {
  const [language, setLanguage] = useState<Language>("nl");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<ServiceKey[]>([]);
  const [message, setMessage] = useState("");
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuWasOpenRef = useRef(false);
  const t = content[language];
  const s = t.services;

  const closeMenu = () => setMenuOpen(false);

  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    menuWasOpenRef.current = false;
    setMenuOpen(false);

    const target = document.getElementById(sectionId);
    if (!target) return;

    const headerOffset = window.matchMedia("(max-width: 820px)").matches ? 76 : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.pushState(null, "", `#${sectionId}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  const toggleService = (key: ServiceKey) => {
    setSelectedServices((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key]
    );
  };

  const selectedSummary = selectedServices.map((key) => s.options[key]).join(", ");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!selectedServices.length) {
      event.preventDefault();
      return;
    }
    const form = event.currentTarget;
    const messageField = form.elements.namedItem("message") as HTMLTextAreaElement | null;
    if (!messageField) return;

    const prefix =
      language === "nl"
        ? `Geselecteerde diensten: ${selectedSummary}\n\n`
        : `Selected services: ${selectedSummary}\n\n`;
    messageField.value = `${prefix}${message}`.trim();
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 820px)");
    const syncMenuState = () => {
      if (!mobileQuery.matches) {
        setMenuOpen(false);
      }
    };

    syncMenuState();
    document.body.style.overflow = menuOpen && mobileQuery.matches ? "hidden" : "";

    mobileQuery.addEventListener("change", syncMenuState);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      mobileQuery.removeEventListener("change", syncMenuState);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      menuWasOpenRef.current = true;
      document.querySelector<HTMLElement>("#mobile-menu a")?.focus();
      return;
    }
    if (menuWasOpenRef.current) {
      menuToggleRef.current?.focus();
      menuWasOpenRef.current = false;
    }
  }, [menuOpen]);

  const renderPricingTable = (
    title: string,
    rate: string,
    rows: string[][],
    includes: string[],
    fourColumns = true
  ) => (
    <article className={styles.pricingBlock}>
      <div className={styles.pricingHeader}>
        <h3>{title}</h3>
        <p>
          {s.startingRate}: <strong>{rate}</strong> {s.perHour}
        </p>
      </div>
      <div className={styles.tableScrollRegion}>
        <p className={styles.tableScrollHint}>{s.tableScrollHint}</p>
        <div className={styles.tableWrap}>
          <table className={styles.pricingTable}>
            <thead>
              <tr>
                <th>{s.buildingSize}</th>
                {fourColumns && <th>{s.cleaners}</th>}
                <th>{s.time}</th>
                <th>{s.startingPrice}</th>
              </tr>
            </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${title}-${rowIndex}-${cellIndex}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div className={styles.includesList}>
        <strong>{s.includes}</strong>
        <ul>
          {includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );

  return (
    <main
      className={styles.page}
      style={{
        background:
          "radial-gradient(circle at top left, rgba(127, 180, 173, 0.22), transparent 26%), linear-gradient(180deg, #edf5f3 0%, #f8faf8 38%, #f6f4ef 100%)"
      }}
    >
      <section className={styles.heroWrap}>
          <header className={`${styles.header} ${menuOpen ? styles.headerMenuOpen : ""}`}>
            <a className={styles.brand} href="#home" onClick={(event) => navigateToSection(event, "home")}>
              <img className={styles.brandLogo} src="/King-Logo.png" alt="King Cleaning B.V" />
            </a>
            <nav className={styles.nav} aria-label="Main navigation">
              <a href="#home" onClick={(event) => navigateToSection(event, "home")}>{t.nav.home}</a>
              <a href="#about" onClick={(event) => navigateToSection(event, "about")}>{t.nav.about}</a>
              <a href="#services" onClick={(event) => navigateToSection(event, "services")}>{t.nav.services}</a>
              <a href="#project" onClick={(event) => navigateToSection(event, "project")}>{t.nav.work}</a>
            </nav>
            <div className={styles.headerActions}>
              <div className={styles.languageToggle} aria-label="Language selector">
                <button className={language === "nl" ? styles.languageActive : ""} type="button" onClick={() => setLanguage("nl")} aria-pressed={language === "nl"}>NL</button>
                <button className={language === "en" ? styles.languageActive : ""} type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
              </div>
              <a className={styles.cta} href="#contact" onClick={(event) => navigateToSection(event, "contact")}>
                {t.nav.contact}
                <span className={styles.ctaArrow} aria-hidden="true">→</span>
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
              <span /><span /><span />
            </button>
          </header>

          <div className={styles.heroCard} id="home">
            <img className={styles.heroImage} src={images.hero} alt="Professional commercial cleaning" />
            <div className={styles.heroShade} />
            <div className={styles.heroInner}>
              <div className={styles.heroLead}>
                <h1>{t.hero.headline}</h1>
              </div>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="#services" onClick={(event) => navigateToSection(event, "services")}>
                  {t.hero.viewServices}
                </a>
                <a className={styles.secondaryAction} href="#contact" onClick={(event) => navigateToSection(event, "contact")}>
                  {t.hero.contactUs}
                </a>
              </div>
              <a className={styles.scrollHint} href="#about" onClick={(event) => navigateToSection(event, "about")}>
                {t.hero.scrollHint}
              </a>
            </div>
          </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.container}>
          <div className={styles.aboutSplit}>
            <div className={styles.aboutCopy}>
              <div className={styles.sectionEyebrow}>{t.about.eyebrow}</div>
              <h2>{t.about.title}</h2>
              <p>{t.about.text}</p>
              <div className={styles.missionVision}>
                <div>
                  <h3>{t.about.missionTitle}</h3>
                  <p>{t.about.mission}</p>
                </div>
                <div>
                  <h3>{t.about.visionTitle}</h3>
                  <p>{t.about.vision}</p>
                </div>
              </div>
            </div>
            <figure className={styles.founderCard}>
              <img src={images.founder} alt="King Prosper Asem" />
              <figcaption>
                <strong>King Prosper Asem</strong>
                <span>{t.about.founderTitle}</span>
              </figcaption>
            </figure>
          </div>

          <div className={styles.statsGrid}>
            {t.stats.map((item, index) => (
              <article key={item.title} className={`${styles.statCard} ${index === 0 ? styles.statFeatured : ""}`}>
                <strong>{item.value}</strong>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.teamSection}`}>
        <div className={styles.container}>
          <div className={styles.processHeading}>
            <div className={styles.sectionEyebrow}>{t.process.eyebrow}</div>
            <h2>{t.process.title}</h2>
            <p>{t.process.text}</p>
          </div>
          <div className={styles.teamGrid}>
            {t.process.cards.map((member) => (
              <article key={member.name} className={styles.teamCard}>
                <img
                  key={member.image}
                  src={member.image}
                  alt={"alt" in member && member.alt ? member.alt : member.name}
                  loading="lazy"
                />
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
                  alt={"alt" in item && item.alt ? item.alt : `${item.label} cleaning service`}
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
          <div className={styles.centerIntro}>
            <div className={styles.sectionEyebrow}>{s.eyebrow}</div>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </div>

          <div className={styles.serviceSelector}>
            <div className={styles.selectorIntro}>
              <h3>{s.selectorTitle}</h3>
              <p>{s.selectorHint}</p>
            </div>
            <div className={styles.serviceOptions}>
              {serviceOrder.map((key) => {
                const active = selectedServices.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    className={`${styles.serviceOption} ${active ? styles.serviceOptionActive : ""}`}
                    aria-pressed={active}
                    onClick={() => toggleService(key)}
                  >
                    <span className={styles.serviceOptionCheck}>{active ? "✓" : "+"}</span>
                    <span>{s.options[key]}</span>
                  </button>
                );
              })}
            </div>
            <div className={styles.selectionSummary}>
              <strong>{s.summaryTitle}</strong>
              <p>{selectedSummary || s.summaryEmpty}</p>
            </div>
          </div>

          {renderPricingTable(s.options.general, generalPricing.rate, generalPricing.rows, generalPricing.includes)}
          {renderPricingTable(s.options.deep, deepPricing.rate, deepPricing.rows, deepPricing.includes)}

          <article className={styles.pricingBlock}>
            <div className={styles.pricingHeader}>
              <h3>{s.options.window}</h3>
            </div>
            <div className={styles.windowPricingGrid}>
              <div>
                <p><strong>{s.interiorWindows}</strong> — {s.startingRate}: {interiorWindowPricing.rate} {s.perHour}</p>
                <div className={styles.tableScrollRegion}>
                  <p className={styles.tableScrollHint}>{s.tableScrollHint}</p>
                  <div className={styles.tableWrap}>
                  <table className={styles.pricingTable}>
                    <thead>
                      <tr>
                        <th>{s.buildingSize}</th>
                        <th>{s.time}</th>
                        <th>{s.startingPrice}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {interiorWindowPricing.rows.map((row, rowIndex) => (
                        <tr key={`interior-${rowIndex}`}>
                          {row.map((cell, cellIndex) => (
                            <td key={`interior-${rowIndex}-${cellIndex}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
              <div>
                <p><strong>{s.exteriorWindows}</strong> — {s.startingRate}: {exteriorWindowPricing.rate} {s.perHour}</p>
                <div className={styles.tableScrollRegion}>
                  <p className={styles.tableScrollHint}>{s.tableScrollHint}</p>
                  <div className={styles.tableWrap}>
                  <table className={styles.pricingTable}>
                    <thead>
                      <tr>
                        <th>{s.buildingSize}</th>
                        <th>{s.time}</th>
                        <th>{s.startingPrice}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exteriorWindowPricing.rows.map((row, rowIndex) => (
                        <tr key={`exterior-${rowIndex}`}>
                          {row.map((cell, cellIndex) => (
                            <td key={`exterior-${rowIndex}-${cellIndex}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className={styles.pricingBlock}>
            <div className={styles.pricingHeader}>
              <h3>{s.additionalCharges}</h3>
            </div>
            <div className={styles.tableScrollRegion}>
              <p className={styles.tableScrollHint}>{s.tableScrollHint}</p>
              <div className={styles.tableWrap}>
              <table className={styles.pricingTable}>
                <thead>
                  <tr>
                    <th>{s.service}</th>
                    <th>{s.requirement}</th>
                    <th>{s.charge}</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalCharges.map(([service, requirement, charge]) => (
                    <tr key={service}>
                      <td>{service}</td>
                      <td>{requirement}</td>
                      <td>{charge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.footerSection}`} id="contact">
        <div className={styles.container}>
          <div className={styles.centerIntro}>
            <div className={styles.sectionEyebrow}>{t.contact.eyebrow}</div>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>

          <div className={styles.contactPanel}>
            <form
              className={styles.contactForm}
              action="https://formsubmit.co/info@kingcleaning.nl"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="Nieuwe aanvraag via King Cleaning website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://kingcleaningbv.nl/#contact" />
              <input type="hidden" name="selected_services" value={selectedSummary} />
              <input className={styles.honeyField} type="text" name="_honey" tabIndex={-1} autoComplete="off" />
              <label>
                <span>{t.contact.formName}</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>{t.contact.formEmail}</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                <span>{t.contact.formPhone}</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label>
                <span>{t.contact.formMessage}</span>
                <textarea name="message" rows={4} value={message} onChange={(event) => setMessage(event.target.value)} required />
              </label>
              <div className={styles.formSummary}>
                <strong>{s.summaryTitle}</strong>
                <p>{selectedSummary || s.summaryEmpty}</p>
              </div>
              <button className={styles.primaryAction} type="submit" disabled={!selectedServices.length}>
                {t.contact.formSubmit}
              </button>
            </form>
          </div>

          <footer className={styles.siteFooter}>
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
          </footer>
          <p className={styles.copyright}>{t.contact.copyright}</p>
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
            <button className={styles.mobileMenuClose} type="button" aria-label="Close menu" onClick={closeMenu}>
              {language === "nl" ? "Sluiten" : "Close"}
            </button>
          </div>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <a href="#home" onClick={(event) => navigateToSection(event, "home")}>{t.nav.home}</a>
            <a href="#about" onClick={(event) => navigateToSection(event, "about")}>{t.nav.about}</a>
            <a href="#services" onClick={(event) => navigateToSection(event, "services")}>{t.nav.services}</a>
            <a href="#project" onClick={(event) => navigateToSection(event, "project")}>{t.nav.work}</a>
            <a href="#contact" onClick={(event) => navigateToSection(event, "contact")}>{t.nav.contact}</a>
          </nav>
          <div className={styles.mobileMenuFooter}>
            <div className={styles.languageToggle} aria-label="Language selector">
              <button className={language === "nl" ? styles.languageActive : ""} type="button" onClick={() => setLanguage("nl")} aria-pressed={language === "nl"}>NL</button>
              <button className={language === "en" ? styles.languageActive : ""} type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
            </div>
            <a className={styles.mobileMenuCta} href="#contact" onClick={(event) => navigateToSection(event, "contact")}>{t.nav.contact}</a>
          </div>
        </div>
      </div>
    </main>
  );
}
