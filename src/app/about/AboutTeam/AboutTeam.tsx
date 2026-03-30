import { team } from "@/lib/constants";
import styles from "./AboutTeam.module.css";

export default function AboutTeam() {
    return (
        <section aria-labelledby="about-team-heading" className={styles.aboutTeamWrapper}>
            <div className={`content ${styles.aboutTeamContent}`}>
                <h2 id="about-team-heading" className="h2">Meet your <span className="brand">barbers</span></h2>
                <p className="p2">Every barber here takes pride in what they do. Find your person and stick with them, or try someone new every time. Either way you&apos;re in good hands.</p>
                <div className={styles.aboutTeamGrid}>
                    {
                        team.map((barber) => (
                            <article className={styles.aboutTeamGridItem} key={barber.name}>
                                <div aria-hidden="true" className={styles.aboutTeamImage}></div>
                                <div className={styles.aboutTeamGridItemContent}>
                                    <div className={styles.aboutTeamGridFlex}>
                                        <div className={styles.left}>
                                            <h3 className="h3">{barber.name}</h3>
                                            <p className="h4 brand"><span className="screen-reader-only">From: </span>{barber.location}</p>
                                        </div>
                                        <div role="img" className={styles.right} aria-label={`${barber.experience} years of experience`}>
                                            <p className="h3 text" aria-hidden="true">{barber.experience}</p>
                                            <p className="h4" aria-hidden="true"> yrs</p>
                                        </div>
                                    </div>
                                    <p className="p2">{barber.bioLong}</p>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
