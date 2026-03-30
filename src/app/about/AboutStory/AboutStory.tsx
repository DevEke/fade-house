import styles from "./AboutStory.module.css";

export default function AboutStory() {
    return (
        <section aria-labelledby="about-story-heading" className={styles.aboutStoryWrapper}>
            <div className={styles.backgroundOverlay} aria-hidden="true"></div>
            <div className={`content ${styles.aboutStoryContent}`}>
                <div className={styles.aboutStoryDetails}>
                    <h2 id="about-story-heading" className="h2">Since <span className="brand">day one</span></h2>
                    <p className="p1">Fade House started simple. A shop, some chairs, and a belief that Dallas deserved a barbershop that took the craft seriously without taking itself too seriously. No gimmicks, no membership tiers, no attitude at the door.</p>
                    <p className="p1">We built the shop around one idea. A great barbershop is a place people come back to. Not because they have to, but because it feels right. The cut is consistent, the barbers know their stuff, and nobody makes you feel out of place for walking in off the street.</p>
                </div>
                <div role="img" className={styles.aboutStoryEstablished} aria-label="Established 2018, Dallas, TX">
                    <p className="h4" aria-hidden="true">EST 2018</p>
                    <p className="h3 text" aria-hidden="true">Dallas, TX</p>
                </div>
            </div>
        </section>
    )
}
