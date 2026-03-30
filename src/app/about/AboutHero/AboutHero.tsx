import styles from "./AboutHero.module.css"

export default function AboutHero() {
    return (
        <section aria-labelledby="about-hero-heading" className={styles.aboutHeroWrapper}>
            <div className={styles.backgroundOverlay} aria-hidden="true"></div>
            <div className={`content ${styles.aboutHeroContent}`}>
                <div className={styles.halfContent}>
                    <h1 id="about-hero-heading" className="h1">A <span className="brand">Dallas barbershop.</span> Through and through.</h1>
                    <p className="p1">Fade House was built for Dallas. The neighborhood shows up here, and the shop reflects that. Walk in as a stranger, leave feeling like a regular.</p>
                </div>
            </div>
        </section>
    )
}
