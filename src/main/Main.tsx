import React from "react";
import styles from "./Main.module.scss";
import styleContainer from "../common/styles/Container.module.scss"
import stylesBtn from "../common/styles/Btn.module.scss";

export const Main = () => {
    return (
        <div className={`${styles.mainBlock} section`}>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>
                <div className={styles.avatar}></div>
                <div className={styles.text}>
                    <h6>Hello, My name is</h6>
                    <h1>Nadezhda Malenkova</h1>
                    <h4>I am frontend developer from Moscow, Russia. I have rich experience in web site
                        building and customization.</h4>
                    <div className={styles.btnContainerMain}>
                        <a className={`${stylesBtn.btn} ${stylesBtn.btnCustom}`} href="">Donwload CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
}