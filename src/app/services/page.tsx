import AllServices from "./AllServices/AllServices";
import ServiceAction from "./ServiceAction/ServiceAction";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Full barbershop services in Dallas. Fades, haircuts, beard trims, hot towel shaves and more. Clear pricing, no surprises. Walk-ins always welcome.",
  openGraph: {
    title: "Services | Fade House",
    description: "Full barbershop services in Dallas. Fades, haircuts, beard trims, hot towel shaves and more. Clear pricing, no surprises. Walk-ins always welcome.",
    url: `${siteUrl}/services`,
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export default function Services() {
  return (
    <>
        <AllServices />
        <ServiceAction />
    </>
  );
}
