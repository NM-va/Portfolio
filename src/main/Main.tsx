import React from "react";
import styles from "./Nav.module.css"

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <li className={styles.navItem}><a href="">Main</a></li>
            <li className={styles.navItem}><a href="">Skills</a></li>
            <li className={styles.navItem}><a href="">Projects</a></li>
            <li className={styles.navItem}><a href="">Contacts</a></li>
        </nav>
    );
}