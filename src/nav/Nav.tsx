import React from "react";
import styles from "./Nav.module.scss";
import { NavItem } from "./NavItem/NavItem";

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <NavItem name={"Main"}/>
                <NavItem name={"Skills"}/>
                <NavItem name={"Projects"}/>
                <NavItem name={"Contacts"}/>
            </ul>
        </nav>
    );
}