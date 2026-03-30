import Button from "@/components/Button/Button";
import styles from "./ServiceAction.module.css";

export default function ServiceAction() {
    return (
        <section aria-labelledby="services-cta-heading" className={styles.serviceActionWrapper}>
            <div className={styles.backgroundOverlay} aria-hidden="true"></div>
            <div className={`content ${styles.serviceActionContent}`}>
                <h2 id="services-cta-heading" className="h2">There is <span className="brand">always a chair</span> for you.</h2>
                <p className="p2">Book online or walk in. No appointment needed, no pressure. Just show up and we will take care of the rest.</p>
                <Button
                    label="Schedule Now"
                    buttonType="primary"
                />
            </div>
        </section>
    )
}
