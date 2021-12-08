import React from "react";
import styles from "./Footer.module.scss"
import {Social} from "../social/Social";
import styleContainer from "../common/styles/Container.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styleContainer.container}>
                <Social/>
            </div>
        </footer>
    );
}