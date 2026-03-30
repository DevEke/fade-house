import Button from "@/components/Button/Button";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section aria-labelledby="hero-heading" className={styles.heroWrapper}>
            <div className={styles.backgroundOverlay} aria-hidden="true"></div>
            <div className={`content ${styles.heroContent}`}>
                <div className={styles.halfContent}>
                    <h1 id="hero-heading" className="h1">The house <span className="brand">always cuts.</span></h1>
                    <p className="p1">Full-service barbershop in Dallas. Skilled barbers, multiple chairs, and walk-ins always welcome. Whoever you are, there&apos;s a seat for you here.</p>
                    <div className={styles.heroButtons}>
                        <Button
                            buttonType="primary"
                            label="Schedule now"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
