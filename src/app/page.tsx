import CallToAction from "./Home/CallToAction/CallToAction";
import Hero from "./Home/Hero/Hero";
import Info from "./Home/Info/Info";
import Reviews from "./Home/Reviews/Reviews";
import Services from "./Home/Services/Services";
import Team from "./Home/Team/Team";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fade House | Dallas Barbershop",
  description: "Full-service barbershop in Dallas. Walk-ins always welcome. Clean cuts, great barbers, no attitude.",
  openGraph: {
    title: "Fade House | Dallas Barbershop",
    description: "Full-service barbershop in Dallas. Walk-ins always welcome. Clean cuts, great barbers, no attitude.",
    url: `${siteUrl}`,
  },
  alternates: {
    canonical: `${siteUrl}`,
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Services />
      <Team />
      <Reviews />
      <CallToAction />
    </>
  );
}
