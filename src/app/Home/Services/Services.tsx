import { services } from "@/lib/constants";
import styles from "./Services.module.css";

export default function Services() {
    return (
        <section aria-labelledby="services-heading" className={styles.servicesWrapper}>
            <div className={`content ${styles.servicesContent}`}>
                <h2 id="services-heading" className="h2">What we <span className="brand">offer.</span></h2>
                <p className="p2">Clean pricing, no surprises. Every service comes with a barber who actually listens.</p>
                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <div className={styles.servicesGridItem} key={service.name}>
                            <h3 className="h3">{service.name}</h3>
                            <p className="h4 brand"><span className="screen-reader-only">Price: </span>${service.price}</p>
                            <p className="p2">{service.descriptionShort}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
