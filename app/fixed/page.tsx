"use client";

import { useState } from "react";
import styles from "./page.module.css";

type Language = "nl" | "en";

const images = {
  people:
    "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=900",
  leader: "/Leader.PNG",
  team: "/Cleaners1.PNG",
  general:
    "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1200",
  glass:
    "https://images.pexels.com/photos/33728673/pexels-photo-33728673.jpeg?auto=compress&cs=tinysrgb&w=1200",
  floor:
    "https://cdn.pixabay.com/photo/2026/03/02/15/24/los-angeles-cs-commercial-cleaning-10152157_1280.jpg",
  handover:
    "https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=1200"
};

const officialServices = [
  "Algemene schoonmaak",
  "Glasbewassing / glazenwassen",
  "Dieptereiniging / ontsmetting",
  "Bouw- & opleveringsschoonmaak",
  "Vloer- & tapijtonderhoud",
  "Gevelreiniging",
  "Overige schoonmaak op aanvraag"
];

const content = {
  nl: {
    nav: { home: "Home", about: "Over ons", services: "Diensten", work: "Werk", contact: "Contact" },
    hero: {
      text: "Professionele schoonmaakdiensten met vaste teams, duidelijke afspraken en meetbare kwaliteit in Amsterdam.",
      viewServices: "Bekijk diensten",
      bookVisit: "Afspraak aanvragen"
    },
    about: {
      eyebrow: "Over ons",
      title: "King Cleaning staat voor schoon en zorgvuldig:",
      highlight: "lokaal, loyaal, mensgericht en transparant",
      suffix: "met de ziel van Zuidoost",
      text: "Een Amsterdams schoonmaakbedrijf uit Zuidoost, met vaste teams, korte communicatielijnen en zichtbare kwaliteit."
    },
    stats: [
      {
        value: "30+",
        title: "Jaar ervaring",
        description: "Praktische ervaring in woning-, gebouw- en onderhoudsschoonmaak in Amsterdam.",
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
        text: "Goede schoonmaak betekent de omgeving kennen, snel schakelen met beheer en bewoners, en werken met duidelijke afspraken."
      },
      {
        title: "Onze missie",
        text: "Schone en veilige leef- en werkomgevingen toegankelijk maken met constant, meetbaar onderhoud en betrouwbare teams."
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
      text: "Een indruk van de nette, verzorgde ruimtes waar King Cleaning voor staat.",
      items: [
        { label: "Algemene schoonmaak", image: images.general },
        { label: "Glasbewassing", image: images.glass },
        { label: "Vloer- & tapijtonderhoud", image: images.floor },
        { label: "Bouw- & opleveringsschoonmaak", image: images.handover }
      ]
    },
    services: {
      eyebrow: "Diensten",
      title: "Onze schoonmaakdiensten",
      text: "Kies de schoonmaak die past bij het gebouw, de frequentie en de gewenste kwaliteitsafspraken.",
      aria: "Officiele diensten van King Cleaning"
    },
    plans: [
      {
        name: "Algemene schoonmaak",
        price: "Op maat",
        description: "Voor periodiek onderhoud van gebouwen, kantoren, gedeelde ruimtes en wooncomplexen.",
        features: [
          "Algemene schoonmaak",
          "Overige schoonmaak op aanvraag"
        ]
      },
      {
        name: "Specialistische schoonmaak",
        price: "Op maat",
        description: "Voor specialistisch schoonmaakwerk dat extra aandacht of technische zorg vraagt.",
        featured: true,
        features: [
          "Glasbewassing / glazenwassen",
          "Dieptereiniging / ontsmetting",
          "Vloer- & tapijtonderhoud",
          "Gevelreiniging"
        ]
      },
      {
        name: "Project & oplevering",
        price: "Op maat",
        description: "Voor schoonmaak rondom bouw en oplevering.",
        features: [
          "Bouw- & opleveringsschoonmaak"
        ]
      }
    ],
    contact: {
      eyebrow: "Contact",
      title: "Houd uw gebouw fris",
      text: "Van periodieke schoonmaak tot specialistisch werk: King Cleaning maakt het eenvoudig om scope, planning en kwaliteit af te spreken.",
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
      text: "Professional cleaning services with fixed teams, clear agreements, and measurable quality in Amsterdam.",
      viewServices: "View Services",
      bookVisit: "Book a Visit"
    },
    about: {
      eyebrow: "About Us",
      title: "King Cleaning stands for clean and careful:",
      highlight: "local, loyal, people-oriented and transparent",
      suffix: "with the soul of Zuidoost",
      text: "An Amsterdam-based cleaning company rooted in Zuidoost, working with fixed teams, short communication lines, and visible quality."
    },
    stats: [
      {
        value: "30+",
        title: "Years experience",
        description: "Amsterdam-based practical experience in residential and building maintenance.",
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
        text: "Good cleaning is knowing the environment, switching quickly with management and residents, and working with clear agreements."
      },
      {
        title: "Our Mission",
        text: "Making clean and safe living and working environments accessible through constant, measurable maintenance with reliable teams."
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
      text: "A look at the clean, well-kept spaces King Cleaning stands for.",
      items: [
        { label: "General Cleaning", image: images.general },
        { label: "Glass Washing / Window Cleaning", image: images.glass },
        { label: "Floor & Carpet Maintenance", image: images.floor },
        { label: "Construction & Handover Cleaning", image: images.handover }
      ]
    },
    services: {
      eyebrow: "Services",
      title: "Our Cleaning Work",
      text: "Choose the cleaning scope that matches the building, frequency, and quality agreements you need.",
      aria: "Official King Cleaning services"
    },
    plans: [
      {
        name: "General Cleaning",
        price: "Custom",
        description: "For recurring maintenance of buildings, offices, shared areas, and residential complexes.",
        features: [
          "Algemene schoonmaak / general cleaning",
          "Overige schoonmaak op aanvraag / other cleaning on request"
        ]
      },
      {
        name: "Specialist Cleaning",
        price: "Custom",
        description: "For specialist cleaning work that needs extra care or technical detail.",
        featured: true,
        features: [
          "Glasbewassing / window cleaning",
          "Dieptereiniging / ontsmetting / deep cleaning and disinfection",
          "Vloer- & tapijtonderhoud / floor and carpet maintenance",
          "Gevelreiniging / facade cleaning"
        ]
      },
      {
        name: "Project & Delivery",
        price: "Custom",
        description: "For cleaning around construction and handover.",
        features: [
          "Bouw- & opleveringsschoonmaak / construction and handover cleaning"
        ]
      }
    ],
    contact: {
      eyebrow: "Contact Us",
      title: "Let's Keep Your Building Fresh",
      text: "From recurring cleaning to specialist work, King Cleaning makes it simple to agree on scope, planning, and quality.",
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
  const t = content[language];

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
          <header className={styles.header}>
            <a className={styles.brand} href="#home">
              <img className={styles.brandLogo} src="/King-Logo.png" alt="King Cleaning B.V logo" />
              <span>King Cleaning B.V</span>
            </a>
            <nav className={styles.nav}>
              <a href="#home">{t.nav.home}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#services">{t.nav.services}</a>
              <a href="#project">{t.nav.work}</a>
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
              <a className={styles.cta} href="#contact">
                {t.nav.contact}
                <span className={styles.ctaArrow}>-&gt;</span>
              </a>
            </div>
          </header>

          <div className={styles.heroCard} id="home">
            <img
              className={styles.heroImage}
              src="https://images.pexels.com/photos/4239113/pexels-photo-4239113.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Commercial cleaning work in a professional building"
            />
            <div className={styles.heroShade} />
            <div className={styles.heroInner}>
              <div className={styles.heroLead}>
                <span className={styles.pill}>King Cleaning B.V</span>
                <h1>Uw frisse start, begint bij ons</h1>
              </div>
              <div className={styles.heroAside}>
                <p>{t.hero.text}</p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryAction} href="#services">
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
            {t.gallery.items.map((item) => (
              <article key={item.label} className={styles.galleryCard}>
                <img src={item.image} alt={item.label} />
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
            {officialServices.map((service) => (
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
              <h3>Uw frisse start, begint bij ons.</h3>
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
                <a href="#about">{t.nav.about}</a>
                <a href="#services">{t.nav.services}</a>
                <a href="#project">{t.nav.work}</a>
                <a href="#contact">{t.nav.contact}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
