import React from "react";
import styles from "./Header.module.scss"
import {Nav} from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.scss";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={`${styleContainer.container} ${styles.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
}