import AboutAction from "./AboutAction/AboutAction";
import AboutHero from "./AboutHero/AboutHero";
import AboutStory from "./AboutStory/AboutStory";
import AboutTeam from "./AboutTeam/AboutTeam";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Fade House is a full-service barbershop built for Dallas. Learn about the shop, the story, and the barbers behind it.",
  openGraph: {
    title: "About | Fade House",
    description: "Fade House is a full-service barbershop built for Dallas. Learn about the shop, the story, and the barbers behind it.",
    url: `${siteUrl}/about`,
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function About() {
    return (
        <>
            <AboutHero />
            <AboutStory />
            <AboutTeam />
            <AboutAction />
        </>
    )
}
