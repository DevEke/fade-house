import type { Metadata } from "next";
import { Gabarito, Bebas_Neue, Smooch_Sans } from "next/font/google";
import "./globals.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const gabarito = Gabarito({
  variable: "--font-body",
  subsets: ["latin"],
});

const bebas_neue = Bebas_Neue({
  variable: "--font-heading",
  weight: ["400"],
  subsets: ["latin"],
});

const smooch = Smooch_Sans({
  variable: "--font-label",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: {
    default: "Fade House | Dallas Barbershop",
    template: "%s | Fade House",
  },
  description: "Full-service barbershop in Dallas. Walk-ins always welcome. Clean cuts, great barbers, no attitude.",
  keywords: ["barbershop Dallas", "Dallas barber", "fade haircut Dallas", "walk-in barbershop Dallas", "haircut Dallas TX"],
  metadataBase: new URL(`${siteUrl}`),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "Fade House",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gabarito.variable} ${bebas_neue.variable} ${smooch.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/home_hero_background.webp" />
        <link rel="preload" as="image" href="/cta_background.webp" type="image/webp" />
      </head>
      <body>
        <Header />
        <main id="main">
          {children}
        </main>
        <Footer />
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Fade House",
            "description": "Full-service barbershop in Dallas. Walk-ins always welcome.",
            "url": siteUrl,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1234 W Davis St",
              "addressLocality": "Dallas",
              "addressRegion": "TX",
              "postalCode": "75208",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "priceRange": "$$"
          })
        }}
      />
      </body>
    </html>
  );
}
