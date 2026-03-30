import { services } from "@/lib/constants"
import styles from "./AllServices.module.css";
import { IconSquareRotatedFilled } from "@tabler/icons-react";

export default function AllServices() {
    return (
        <section aria-labelledby="all-services-heading" className={styles.allServicesWrapper}>
            <div className={`content ${styles.allServicesContent}`}>
                <h2 id="all-services-heading" className="h2">Everything we <span className="brand">offer.</span></h2>
                <p className="p2">Everything we offer, clearly priced. No tiers, no surprises. Show up, pick your service, sit down.</p>
                <div className={styles.allServicesGrid}>
                    {services.map((service) => (
                        <div className={styles.allServicesGridItem} key={service.name}>
                            <div className={styles.allServicesHeading}>
                                <div className={styles.left}>
                                    <h3 className="h3">{service.name}</h3>
                                    <p className="h4 brand"><span className="screen-reader-only">Price: </span>${service.price}</p>
                                </div>
                                <div role="img" className={styles.right} aria-label={`Duration: ${service.time} minutes`}>
                                    <p className="h5 text" aria-hidden="true">{service.time}</p>
                                    <p className="h4 text" aria-hidden="true">min</p>
                                </div>
                            </div>
                            <p className="p2">{service.descriptionLong}</p>
                            <h4 className="screen-reader-only">What&apos;s included</h4>
                            <ul className={styles.allServicesIncluded}>
                                {service.included.map((item) => (
                                    <li className={styles.allServicesIncludedItem} key={item}>
                                        <IconSquareRotatedFilled className="brand" size={9} aria-hidden="true" />
                                        <p className="p2">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
