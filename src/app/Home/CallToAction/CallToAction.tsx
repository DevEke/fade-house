import Button from "@/components/Button/Button";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
    return (
        <section aria-labelledby="home-cta-heading" className={styles.callToActionWrapper}>
            <div className={styles.backgroundOverlay} aria-hidden="true"></div>
            <div className={`content ${styles.callToActionContent}`}>
                <h2 id="home-cta-heading" className="h2">The Door&apos;s <span className="brand">always open.</span></h2>
                <p className="p2">Book online or just walk in. Either way there&apos;s a chair with your name on it.</p>
                <Button
                    label="Schedule Now"
                    buttonType="primary"
                />
            </div>
        </section>
    )
}
