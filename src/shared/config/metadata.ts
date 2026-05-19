import type { Metadata } from "next";
import { APP_URL } from "@/shared/config/env";
import { imageSrc, images } from "@/shared/data/images";

const siteName = "Consorcio HYGACON";
const siteTitle =
  "Consorcio HYGACON | Ingenieria, Construccion y Saneamiento";
const siteDescription =
  "Consorcio HYGACON ejecuta proyectos de ingenieria, construccion, saneamiento, metalmecanica y servicios generales en Peru. Servicios integrales con enfoque en seguridad, medio ambiente y responsabilidad social.";
const ogImage = imageSrc(images["677bc326"]);

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: siteTitle,
    template: "%s | Consorcio HYGACON",
  },
  description: siteDescription,
  applicationName: siteName,
  generator: "Next.js",
  keywords: [
    "Consorcio HYGACON",
    "ingenieria",
    "construccion",
    "saneamiento",
    "metalmecanica",
    "mineria",
    "obras civiles",
    "infraestructura",
    "consultoria",
    "supervision",
    "Peru",
    "Arequipa",
    "maquinaria",
    "proyectos",
    "servicios integrales",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "construction",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: APP_URL,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Logotipo de Consorcio HYGACON",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    other: {
      "contact:phone": "974628766",
      "contact:email": "hygaconperu@gmail.com",
      "contact:email_alt": "hayro_hyrum@gmail.com",
      "contact:address": "Av. Libertad N° 2058, Cocachacra, Arequipa, Peru",
      "contact:address_alt": "Calle Hipolito Unanue N° 140, Arequipa, Peru",
      "company:ruc": "20611996251",
    },
  },
};
