"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFocusManagement } from "@/hooks/useFocusManagement";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useEffect, useState } from "react";
import { IconX, IconMenu4 } from "@tabler/icons-react";
import { useScrollLock } from "@/hooks/useScrollLock";
import styles from "./Header.module.css";
import Image from "next/image";


export default function Header() {
    const [ open, setOpen ] = useState(false);
    const { triggerRef, firstFocusableRef } = useFocusManagement(open);
    const trapRef = useFocusTrap(open);
    const pathname = usePathname();

    function onNavClick() {
        setOpen(false);
    }

    useScrollLock(open);

    useEffect(() => {
        function onResize() {
          if (window.innerWidth > 768) setOpen(false);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        if (open) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    return (
        <header className={styles.headerWrapper}>
            <a href="#main" className={styles.skipLink}>Skip to main content</a>
            <div className={`content ${styles.headerContent}`}>
                <Link href="/" aria-label="Fade House home" className={styles.logoWrapper}>
                    <Image src="/logo-white.svg" width={24} height={24} alt="" />
                    <span className={styles.logoText}>Fade House</span>
                </Link>
                <nav className={styles.headerNavContainer} aria-label="Primary" >
                    <Link className={`
                        ${styles.headerNavLink}
                        ${pathname === "/" && styles.headerNavLinkActive}
                    `} href="/">Home</Link>
                    <Link className={`
                        ${styles.headerNavLink}
                        ${pathname === "/services" && styles.headerNavLinkActive}
                    `} href="/services">Services</Link>
                    <Link className={`
                        ${styles.headerNavLink}
                        ${pathname === "/about" && styles.headerNavLinkActive}
                    `} href="/about">About</Link>
                </nav>
                <button
                    ref={triggerRef}
                    className={styles.headerMenuWrapper}
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    {
                        open
                        ? <IconX className={styles.headerMenuIcon} aria-hidden />
                        : <IconMenu4 className={styles.headerMenuIcon} aria-hidden/>
                    }
                </button>
            </div>
            <div
                ref={trapRef}
                id="mobile-menu"
                style={{pointerEvents: open ? "auto" : "none"}}
                aria-label="mobile-primary"
                aria-hidden={!open}
                className={`${styles.headerMobileMenu} ${ open ? styles.headerMobileMenuOpen : "" }`}
            >
                <Link tabIndex={open ? 0 : -1} ref={firstFocusableRef} onClick={onNavClick} className={styles.headerMobileLink} href="/">Home</Link>
                <Link tabIndex={open ? 0 : -1} onClick={onNavClick} className={styles.headerMobileLink} href="/services">Services</Link>
                <Link tabIndex={open ? 0 : -1} onClick={onNavClick} className={styles.headerMobileLink} href="/about">About</Link>
            </div>
        </header>
    )
}
