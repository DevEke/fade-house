
import { team } from "@/lib/constants";
import styles from "./Team.module.css";

export default function Team() {
    return (
        <section aria-labelledby="team-heading" className={styles.teamWrapper}>
            <div className={`content ${styles.teamContent}`}>
                <h2 id="team-heading" className="h2">Meet your <span className="brand">barbers</span></h2>
                <p className="p2">One house, one team. Find your person, stick with them, or try someone new. Either way you&apos;re in good hands.</p>
                <div className={styles.teamGrid}>
                    {team.map((barber) => (
                        <div className={styles.teamGridItem} key={barber.name}>
                            <div aria-hidden="true" className={styles.teamGridImage}></div>
                            <div className={styles.teamGridContent}>
                                <h3 className="h3">{barber.name}</h3>
                                <p className="h4 brand"><span className="screen-reader-only">From: </span>{barber.location}</p>
                                <p className="p2">{barber.bioShort}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
