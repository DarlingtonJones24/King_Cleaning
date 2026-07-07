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
      headline: "Schone ruimtes. Sterkere bedrijven.",
      text: "Onder leiding van King Prosper bieden wij professionele schoonmaakdiensten voor bedrijven van elk type, waaronder ziekenhuizen, kantoren, restaurants, winkelruimtes en commerciele locaties in Amsterdam.",
      founderTitle: "Professioneel schoonmaakteam",
      aboutUsTitle: "Over ons",
      aboutUsText:
        "Wij helpen organisaties in Amsterdam met betrouwbare schoonmaak, duidelijke afspraken en vaste teams die uw locatie representeren.",
      missionTitle: "Onze missie",
      mission:
        "Uitzonderlijke, betrouwbare en professionele schoonmaakdiensten leveren met vakmanschap en aandacht.",
      visionTitle: "Onze visie",
      vision:
        "De vertrouwde leider in commerciele schoonmaak zijn en de standaard zetten voor kwaliteit, integriteit en klanttevredenheid."
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
      selectorTitle: "Selecteer uw dienst",
      selectorHint: "Kies één dienst. Uw selectie wordt meegestuurd met de aanvraag.",
      summaryTitle: "Geselecteerde dienst",
      summaryEmpty: "Nog geen dienst geselecteerd.",
      pricingPrompt: "Selecteer hierboven een dienst om de bijbehorende tarieven te bekijken.",
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
      formService: "Type dienst",
      formServiceHint: "Kies een of meerdere diensten",
      formSquareMeters: "Oppervlakte (m²)",
      formWindowType: "Glasbewassing",
      formWindowInterior: "Binnenramen",
      formWindowExterior: "Buitenramen",
      formEstimateTitle: "Geschatte startprijs",
      formEstimateTotal: "Totaal indicatie",
      formEstimateHint: "Indicatieve prijs op basis van uw oppervlakte en geselecteerde dienst.",
      formEstimateCustom: "Maatwerk offerte — wij nemen contact met u op voor een exacte prijs.",
      formEstimateCleaners: "Schoonmakers",
      formEstimateTime: "Geschatte tijd",
      formEstimateTier: "Tariefklasse",
      formMessage: "Extra opmerkingen (optioneel)",
      formSubmit: "Aanvraag versturen",
      formSending: "Versturen…",
      formSuccess: "Bedankt! Uw bericht is verzonden naar info@kingcleaning.nl. Wij reageren binnen 24 uur.",
      formError: "Verzenden mislukt. Probeer het opnieuw of mail direct naar info@kingcleaning.nl.",
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
      headline: "Clean Spaces. Stronger Businesses.",
      text: "Led by King Prosper, we provide professional cleaning services for businesses of all types, including hospitals, offices, restaurants, retail spaces, and commercial facilities in Amsterdam.",
      founderTitle: "Professional cleaning team",
      aboutUsTitle: "About Us",
      aboutUsText:
        "We help Amsterdam organisations with reliable cleaning, clear agreements, and dedicated teams that represent your location professionally.",
      missionTitle: "Our Mission",
      mission:
        "To deliver exceptional, reliable, and professional cleaning services with craftsmanship and care.",
      visionTitle: "Our Vision",
      vision:
        "To be the trusted leader in commercial cleaning, setting the standard for quality, integrity, and customer satisfaction."
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
      selectorTitle: "Select your service",
      selectorHint: "Choose one service. Your selection is included with your request.",
      summaryTitle: "Selected service",
      summaryEmpty: "No service selected yet.",
      pricingPrompt: "Select a service above to view the matching rates and details.",
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
      formService: "Service type",
      formServiceHint: "Select one or more services",
      formSquareMeters: "Floor area (m²)",
      formWindowType: "Window cleaning",
      formWindowInterior: "Interior windows",
      formWindowExterior: "Exterior windows",
      formEstimateTitle: "Estimated starting price",
      formEstimateTotal: "Estimated total",
      formEstimateHint: "Indicative price based on your floor area and selected service.",
      formEstimateCustom: "Custom quote — we will contact you with an exact price.",
      formEstimateCleaners: "Cleaners",
      formEstimateTime: "Estimated time",
      formEstimateTier: "Pricing tier",
      formMessage: "Additional notes (optional)",
      formSubmit: "Send Request",
      formSending: "Sending…",
      formSuccess: "Thank you! Your message was sent to info@kingcleaning.nl. We will respond within 24 hours.",
      formError: "Could not send your message. Please try again or email info@kingcleaning.nl directly.",
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

type WindowType = "interior" | "exterior";

type QuoteResult = {
  tierLabel: string;
  cleaners: string | null;
  time: string;
  price: string;
  isCustomQuote: boolean;
};

const standardTierBounds = [250, 500, 750, 1000, 1500, 2500, 4000];
const windowTierBounds = [250, 500, 1000, 2000];

function getTierIndex(sqm: number, bounds: number[]) {
  if (!Number.isFinite(sqm) || sqm <= 0) return -1;
  for (let index = 0; index < bounds.length; index += 1) {
    if (sqm <= bounds[index]) return index;
  }
  return bounds.length;
}

function getStandardQuote(service: "general" | "deep", sqm: number): QuoteResult | null {
  const tierIndex = getTierIndex(sqm, standardTierBounds);
  if (tierIndex < 0) return null;

  const rows = service === "general" ? generalPricing.rows : deepPricing.rows;
  const row = rows[tierIndex];
  if (!row) return null;

  const price = row[3];
  return {
    tierLabel: row[0],
    cleaners: row[1],
    time: row[2],
    price,
    isCustomQuote: price.toLowerCase().includes("custom")
  };
}

function getWindowQuote(windowType: WindowType, sqm: number): QuoteResult | null {
  const tierIndex = getTierIndex(sqm, windowTierBounds);
  if (tierIndex < 0) return null;

  const rows = windowType === "interior" ? interiorWindowPricing.rows : exteriorWindowPricing.rows;
  const row = rows[tierIndex];
  if (!row) return null;

  const price = row[2];
  return {
    tierLabel: row[0],
    cleaners: null,
    time: row[1],
    price,
    isCustomQuote: price.toLowerCase().includes("custom")
  };
}

function getServiceQuote(service: ServiceKey, sqm: number, windowType: WindowType): QuoteResult | null {
  if (service === "window") return getWindowQuote(windowType, sqm);
  return getStandardQuote(service, sqm);
}

function parseEuroPrice(price: string) {
  const match = price.match(/€([\d,.]+)/);
  if (!match) return null;
  return Number.parseFloat(match[1].replace(/\./g, "").replace(",", "."));
}

function AboutPillarIcon({ type }: { type: "about" | "mission" | "vision" }) {
  if (type === "about") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "mission") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function FixedHomePage() {
  const [language, setLanguage] = useState<Language>("nl");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceKey | null>(null);
  const [formServices, setFormServices] = useState<ServiceKey[]>([]);
  const [squareMeters, setSquareMeters] = useState("");
  const [windowType, setWindowType] = useState<WindowType>("interior");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuWasOpenRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
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

  const selectService = (key: ServiceKey) => {
    setSelectedService(key);
    setFormServices((current) => (current.includes(key) ? current : [...current, key]));
  };

  const toggleFormService = (key: ServiceKey) => {
    setFormServices((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key]
    );
  };

  const parsedSquareMeters = Number.parseFloat(squareMeters);
  const selectedSummary = selectedService ? s.options[selectedService] : "";
  const formServicesSummary = formServices.map((key) => s.options[key]).join(", ");
  const formQuotes = formServices
    .map((service) => ({
      service,
      label: s.options[service],
      quote:
        parsedSquareMeters > 0 ? getServiceQuote(service, parsedSquareMeters, windowType) : null
    }))
    .filter((item): item is { service: ServiceKey; label: string; quote: QuoteResult } => !!item.quote);

  const numericQuoteTotal = formQuotes.reduce((total, item) => {
    if (item.quote.isCustomQuote) return total;
    const value = parseEuroPrice(item.quote.price);
    return value === null ? total : total + value;
  }, 0);

  const hasCustomQuote = formQuotes.some((item) => item.quote.isCustomQuote);

  const formatQuoteSummary = () => {
    if (!formServices.length || !formQuotes.length) return "";

    const header = [
      `${language === "nl" ? "Diensten" : "Services"}: ${formServicesSummary}`,
      `${language === "nl" ? "Oppervlakte" : "Floor area"}: ${parsedSquareMeters} m²`
    ];

    if (formServices.includes("window")) {
      header.push(
        `${s.formWindowType}: ${windowType === "interior" ? s.formWindowInterior : s.formWindowExterior}`
      );
    }

    const serviceBlocks = formQuotes.map((item) => {
      const lines = [
        `— ${item.label}`,
        `${t.contact.formEstimateTier}: ${item.quote.tierLabel}`,
        item.quote.cleaners ? `${t.contact.formEstimateCleaners}: ${item.quote.cleaners}` : null,
        `${t.contact.formEstimateTime}: ${item.quote.time}`,
        `${t.contact.formEstimateTitle}: ${item.quote.isCustomQuote ? t.contact.formEstimateCustom : item.quote.price}`
      ].filter(Boolean);

      return lines.join("\n");
    });

    const totalLine =
      !hasCustomQuote && numericQuoteTotal > 0
        ? `\n${t.contact.formEstimateTotal}: €${numericQuoteTotal.toLocaleString(language === "nl" ? "nl-NL" : "en-GB")}`
        : hasCustomQuote
          ? `\n${t.contact.formEstimateTotal}: ${t.contact.formEstimateCustom}`
          : "";

    return [...header, "", ...serviceBlocks].join("\n") + totalLine;
  };

  const aboutPillars = [
    { type: "about" as const, title: t.about.aboutUsTitle, text: t.about.aboutUsText },
    { type: "mission" as const, title: t.about.missionTitle, text: t.about.mission },
    { type: "vision" as const, title: t.about.visionTitle, text: t.about.vision }
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formServices.length || parsedSquareMeters <= 0 || !formQuotes.length || formStatus === "sending") return;

    const form = event.currentTarget;
    const honey = (form.elements.namedItem("_honey") as HTMLInputElement | null)?.value;
    if (honey) return;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const quoteSummary = formatQuoteSummary();
    const fullMessage = [quoteSummary, message.trim()].filter(Boolean).join("\n\n");
    const subject =
      language === "nl"
        ? `Nieuwe aanvraag — ${formServicesSummary} (${parsedSquareMeters} m²)`
        : `New request — ${formServicesSummary} (${parsedSquareMeters} m²)`;

    setFormStatus("sending");
    try {
      const body = new FormData();
      body.append("name", name);
      body.append("email", email);
      body.append("phone", phone);
      body.append("message", fullMessage);
      body.append("service_type", formServicesSummary);
      body.append("square_meters", String(parsedSquareMeters));
      body.append(
        "estimated_price",
        hasCustomQuote
          ? t.contact.formEstimateCustom
          : `€${numericQuoteTotal.toLocaleString(language === "nl" ? "nl-NL" : "en-GB")}`
      );
      body.append("quote_details", quoteSummary);
      if (formServices.includes("window")) {
        body.append(
          "window_type",
          windowType === "interior" ? s.formWindowInterior : s.formWindowExterior
        );
      }
      body.append("_subject", subject);
      body.append("_template", "table");
      body.append("_replyto", email);
      body.append("_captcha", "false");

      const res = await fetch("https://formsubmit.co/ajax/info@kingcleaning.nl", {
        method: "POST",
        body,
        headers: { Accept: "application/json" }
      });
      if (!res.ok) throw new Error("submit failed");
      setFormStatus("success");
      setMessage("");
      setSquareMeters("");
      setFormServices([]);
      form.reset();
    } catch {
      setFormStatus("error");
    }
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
    const resetHorizontalScroll = () => {
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const onTouchMove = (event: TouchEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-table-scroll='true']")) return;

      const start = touchStartRef.current;
      const touch = event.touches[0];
      if (!start || !touch) return;

      const deltaX = Math.abs(touch.clientX - start.x);
      const deltaY = Math.abs(touch.clientY - start.y);
      if (deltaX > deltaY && deltaX > 10) {
        event.preventDefault();
      }
    };

    const onTouchEnd = () => {
      touchStartRef.current = null;
    };

    resetHorizontalScroll();
    window.addEventListener("scroll", resetHorizontalScroll, { passive: true });
    window.addEventListener("resize", resetHorizontalScroll);
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("scroll", resetHorizontalScroll);
      window.removeEventListener("resize", resetHorizontalScroll);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

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
        <div className={styles.tableWrap} data-table-scroll="true">
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
            <a className={styles.brand} href="#home" onClick={(event) => navigateToSection(event, "home")} aria-label="King Cleaning B.V">
              <img className={styles.brandLogoFull} src="/King-Logo.png" alt="" />
              <span className={styles.brandText}>King Cleaning B.V</span>
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

      <section className={`${styles.section} ${styles.aboutSection}`} id="about">
        <div className={styles.container}>
          <div className={styles.aboutSplit}>
            <div className={styles.aboutCopy}>
              <div className={styles.aboutEyebrow}>{t.about.eyebrow}</div>
              <h2>{t.about.headline}</h2>
              <p className={styles.aboutIntro}>{t.about.text}</p>

              <div className={styles.aboutPillars}>
                {aboutPillars.map((pillar) => (
                  <article key={pillar.type} className={styles.aboutPillar}>
                    <span className={styles.aboutPillarIcon}>
                      <AboutPillarIcon type={pillar.type} />
                    </span>
                    <div>
                      <h3>{pillar.title}</h3>
                      <p>{pillar.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <figure className={styles.founderCard}>
              <div className={styles.founderImageWrap}>
                <img src={images.founder} alt="King Cleaning professional team" />
                <figcaption className={styles.founderCaption}>
                  <strong>King Cleaning</strong>
                  <span>{t.about.founderTitle}</span>
                </figcaption>
              </div>
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

      <section className={`${styles.section} ${styles.pricingSection}`} id="services">
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
            <div className={styles.serviceOptions} role="radiogroup" aria-label={s.selectorTitle}>
              {serviceOrder.map((key) => {
                const active = selectedService === key;
                return (
                  <button
                    key={key}
                    type="button"
                    className={`${styles.serviceOption} ${active ? styles.serviceOptionActive : ""}`}
                    role="radio"
                    aria-checked={active}
                    onClick={() => selectService(key)}
                  >
                    <span className={styles.serviceOptionCheck} aria-hidden="true">{active ? "●" : "○"}</span>
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

          <div className={styles.pricingResults}>
            {!selectedService ? (
              <p className={styles.pricingPrompt}>{s.pricingPrompt}</p>
            ) : (
              <>
                {selectedService === "general" &&
                  renderPricingTable(s.options.general, generalPricing.rate, generalPricing.rows, generalPricing.includes)}

                {selectedService === "deep" &&
                  renderPricingTable(s.options.deep, deepPricing.rate, deepPricing.rows, deepPricing.includes)}

                {selectedService === "window" && (
                  <article className={styles.pricingBlock}>
                    <div className={styles.pricingHeader}>
                      <h3>{s.options.window}</h3>
                    </div>
                    <div className={styles.windowPricingGrid}>
                      <div>
                        <p><strong>{s.interiorWindows}</strong> — {s.startingRate}: {interiorWindowPricing.rate} {s.perHour}</p>
                        <div className={styles.tableScrollRegion}>
                          <p className={styles.tableScrollHint}>{s.tableScrollHint}</p>
                          <div className={styles.tableWrap} data-table-scroll="true">
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
                          <div className={styles.tableWrap} data-table-scroll="true">
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
                )}

                <article className={styles.pricingBlock}>
                  <div className={styles.pricingHeader}>
                    <h3>{s.additionalCharges}</h3>
                  </div>
                  <div className={styles.tableScrollRegion}>
                    <p className={styles.tableScrollHint}>{s.tableScrollHint}</p>
                    <div className={styles.tableWrap} data-table-scroll="true">
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
              </>
            )}
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

      <section className={`${styles.section} ${styles.footerSection}`} id="contact">
        <div className={styles.container}>
          <div className={styles.centerIntro}>
            <div className={styles.sectionEyebrow}>{t.contact.eyebrow}</div>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>

          <div className={styles.contactPanel}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <input className={styles.honeyField} type="text" name="_honey" tabIndex={-1} autoComplete="off" />
              {formStatus === "success" && <p className={styles.formNoticeSuccess}>{t.contact.formSuccess}</p>}
              {formStatus === "error" && <p className={styles.formNoticeError}>{t.contact.formError}</p>}
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
              <fieldset className={styles.formFieldset}>
                <legend>{t.contact.formService}</legend>
                <p className={styles.formFieldHint}>{t.contact.formServiceHint}</p>
                <div className={styles.formServiceGroup}>
                  {serviceOrder.map((key) => {
                    const active = formServices.includes(key);
                    return (
                      <label key={key} className={`${styles.formServiceOption} ${active ? styles.formServiceOptionActive : ""}`}>
                        <input
                          type="checkbox"
                          name="service_type"
                          value={key}
                          checked={active}
                          onChange={() => toggleFormService(key)}
                        />
                        <span>{s.options[key]}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
              <label>
                <span>{t.contact.formSquareMeters}</span>
                <input
                  name="square_meters"
                  type="number"
                  min={1}
                  step={1}
                  inputMode="numeric"
                  placeholder="250"
                  value={squareMeters}
                  onChange={(event) => setSquareMeters(event.target.value)}
                  required
                />
              </label>
              {formServices.includes("window") && (
                <fieldset className={styles.formFieldset}>
                  <legend>{t.contact.formWindowType}</legend>
                  <div className={styles.formChoiceGroup}>
                    <label className={styles.formChoice}>
                      <input
                        type="radio"
                        name="window_type"
                        value="interior"
                        checked={windowType === "interior"}
                        onChange={() => setWindowType("interior")}
                      />
                      <span>{s.formWindowInterior}</span>
                    </label>
                    <label className={styles.formChoice}>
                      <input
                        type="radio"
                        name="window_type"
                        value="exterior"
                        checked={windowType === "exterior"}
                        onChange={() => setWindowType("exterior")}
                      />
                      <span>{s.formWindowExterior}</span>
                    </label>
                  </div>
                </fieldset>
              )}
              {formQuotes.length > 0 && (
                <div className={styles.formQuoteEstimate}>
                  <strong>{t.contact.formEstimateTitle}</strong>
                  {formQuotes.map((item) => (
                    <div key={item.service} className={styles.formQuoteItem}>
                      <p className={styles.formQuoteService}>{item.label}</p>
                      <p className={styles.formQuotePrice}>
                        {item.quote.isCustomQuote ? t.contact.formEstimateCustom : item.quote.price}
                      </p>
                      <ul className={styles.formQuoteDetails}>
                        <li>
                          <span>{t.contact.formEstimateTier}</span>
                          <strong>{item.quote.tierLabel}</strong>
                        </li>
                        {item.quote.cleaners && (
                          <li>
                            <span>{t.contact.formEstimateCleaners}</span>
                            <strong>{item.quote.cleaners}</strong>
                          </li>
                        )}
                        <li>
                          <span>{t.contact.formEstimateTime}</span>
                          <strong>{item.quote.time}</strong>
                        </li>
                      </ul>
                    </div>
                  ))}
                  {formQuotes.length > 1 && (
                    <p className={styles.formQuoteTotal}>
                      {t.contact.formEstimateTotal}:{" "}
                      {hasCustomQuote
                        ? t.contact.formEstimateCustom
                        : `€${numericQuoteTotal.toLocaleString(language === "nl" ? "nl-NL" : "en-GB")}`}
                    </p>
                  )}
                  <p className={styles.formQuoteHint}>{t.contact.formEstimateHint}</p>
                </div>
              )}
              <label>
                <span>{t.contact.formMessage}</span>
                <textarea name="message" rows={4} value={message} onChange={(event) => setMessage(event.target.value)} />
              </label>
              <button
                className={styles.primaryAction}
                type="submit"
                disabled={!formServices.length || parsedSquareMeters <= 0 || !formQuotes.length || formStatus === "sending"}
              >
                {formStatus === "sending" ? t.contact.formSending : t.contact.formSubmit}
              </button>
            </form>
          </div>

          <div className={styles.siteFooterBand}>
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
