import { info } from "@/lib/constants";
import { IconSquareRotatedFilled } from "@tabler/icons-react";
import styles from "./Info.module.css";

export default function Info() {
    return (
        <section  aria-label="Shop information" className={styles.infoWrapper}>
            <div className={styles.infoTrack}>
                {[0, 1, 2, 3].map((copy) => (
                    <div className={styles.infoContent} key={copy} aria-hidden={copy !== 0}>
                        {info.map((x, i) => (
                            <div className={styles.infoItem} key={i}>
                                <IconSquareRotatedFilled className={styles.infoBullet} size={9} aria-hidden="true" />
                                <span className="h4 text">{x}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}
