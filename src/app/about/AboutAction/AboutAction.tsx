import Button from "@/components/Button/Button";
import styles from "./AboutAction.module.css";

export default function AboutAction() {
    return (
        <section aria-labelledby="about-cta-heading" className={styles.aboutActionWrapper}>
            <div className={styles.backgroundOverlay} aria-hidden="true"></div>
            <div className={`content ${styles.aboutActionContent}`}>
                <h2 id="about-cta-heading" className="h2">The house that <span className="brand">fades together,</span> stays together.</h2>
                <p className="p2">Built in Dallas, our team reflects the city itself. Diverse, detail-driven, and deeply connected to the people we serve. Every barber brings a balanced skillset and a genuine understanding of what walks through the door. Each visit is approached with focus and care, because a great cut is never just a cut.</p>
                <Button
                    label="Schedule Now"
                    buttonType="primary"
                />
            </div>
        </section>
    )
}
