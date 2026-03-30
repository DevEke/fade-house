import type { Icon } from "@tabler/icons-react";
import styles from "./Button.module.css";

type ButtonProps = {
    label: string;
    icon?: Icon;
    buttonType: "primary" | "secondary";
    onClick?: () => void;
}

export default function Button({label, icon: Icon, buttonType, onClick}: ButtonProps) {
    return (
        <button
            type="submit"
            className={`
                ${styles.buttonWrapper}
                ${buttonType === 'primary' ? styles.buttonPrimary : styles.buttonSecondary}
            `}
            onClick={onClick}
        >
            <span className={styles.buttonLabel}>{ label }</span>
            { Icon && <Icon className={styles.buttonIcon} size={18} aria-hidden="true" /> }
        </button>
    )
}
