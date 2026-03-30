export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <link rel="preload" as="image" href="/cta_background.webp" type="image/webp" />
        {children}
      </>
    );
  }
