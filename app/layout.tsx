import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const DESCRIPTION =
  "Brio runs real spoken interviews, scores the substance of your answers, and turns it into a portable, verifiable readiness credential.";

export const metadata: Metadata = {
  metadataBase: new URL("https://brio.so"),
  applicationName: "Brio",
  title: "Brio",
  description: DESCRIPTION,
  keywords: [
    "Brio",
    "voice-first interview",
    "readiness credential",
    "interview practice",
    "hiring",
    "verified ability",
  ],
  openGraph: {
    title: "Brio",
    description: DESCRIPTION,
    url: "/",
    siteName: "Brio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brio",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#04070f" },
    { media: "(prefers-color-scheme: dark)", color: "#04070f" },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://brio.so/#org",
      name: "Brio",
      url: "https://brio.so",
      logo: "https://brio.so/icon.svg",
      description: DESCRIPTION,
    },
    {
      "@type": "WebSite",
      "@id": "https://brio.so/#site",
      name: "Brio",
      url: "https://brio.so",
      publisher: { "@id": "https://brio.so/#org" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}
