import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://kingcleaningbv.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "King Cleaning B.V. | Commercial Cleaning Amsterdam",
    template: "%s | King Cleaning B.V."
  },
  description:
    "Professional commercial cleaning in Amsterdam for offices, schools, gyms, restaurants, and hotels. General cleaning, deep cleaning, and window cleaning.",
  keywords: [
    "commercial cleaning Amsterdam",
    "office cleaning Amsterdam",
    "schoonmaakbedrijf Amsterdam",
    "bedrijfsschoonmaak",
    "King Cleaning",
    "window cleaning Amsterdam",
    "deep cleaning Amsterdam"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "King Cleaning B.V.",
    title: "King Cleaning B.V. | Commercial Cleaning Amsterdam",
    description:
      "Professional commercial cleaning in Amsterdam for offices, schools, gyms, restaurants, and hotels.",
    images: [
      {
        url: "/King-Logo.png",
        width: 512,
        height: 512,
        alt: "King Cleaning B.V."
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  name: "King Cleaning B.V.",
  url: siteUrl,
  logo: `${siteUrl}/King-Logo.png`,
  image: `${siteUrl}/king-prosper.jpg`,
  telephone: "+31-20-2380376",
  email: "info@kingcleaning.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Paasheuvelweg 33",
    addressLocality: "Amsterdam",
    postalCode: "1105 BG",
    addressCountry: "NL"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.3269,
    longitude: 4.9695
  },
  areaServed: {
    "@type": "City",
    name: "Amsterdam"
  },
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00"
    }
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General cleaning"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep cleaning"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Window cleaning"
        }
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
