import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerWrapper}>
            <div className={`content ${styles.footerContent}`} >
                <div className={styles.footerSectionContainer}>
                    <Link href="/" aria-label="Fade House home" className={styles.footerLogoWrapper}>
                        <Image  src="/logo-white.svg" width={48} height={48} alt="" />
                        <span className={styles.footerLogoText}>Fade House</span>
                    </Link>
                    <p className="p2">© {new Date().getFullYear()} Fade House. All rights reserved.</p>
                </div>
                <div className={styles.footerSectionContainer}>
                    <h3 className="h4">Hours</h3>
                    <p className="p2">Tue - Fri - <span className="accent">9am - 7pm</span></p>
                    <p className="p2">Saturday - <span className="accent">9am - 5pm</span></p>
                    <p className="p2">Sun - Mon - <span className="accent">Closed</span></p>
                </div>
                <address className={styles.footerSectionContainer}>
                    <h3 className="h4">Find Us</h3>
                    <p className="p2">1234 W Davis St</p>
                    <p className="p2">Oak Cliff, Dallas, TX 75208</p>
                    <p className="p2"><span className="accent">@fadehousedallas</span></p>
                </address>
            </div>
        </footer>
    )
}
