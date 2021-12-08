import React from "react";
import styles from "./NavItem.module.scss";

type PropsType = {
    name: string
}

export const NavItem = ({name}:PropsType) => {
    return (
        <li className={styles.navItem}>
            <a href="" className={styles.navLink}>{name}</a>
        </li>
    );
}