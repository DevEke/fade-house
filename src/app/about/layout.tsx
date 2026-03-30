export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <link rel="preload" as="image" href="/about_hero_background.webp" type="image/webp"/>
        <link rel="preload" as="image" href="/cta_background.webp" type="image/webp" />
        {children}
      </>
    );
  }
