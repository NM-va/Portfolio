import React from "react";
import styles from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css"

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <div className={styles.avatar}></div>
                <div className={styles.text}>
                    <h6>Hello, My name is</h6>
                    <h1>Nairobi Gadot</h1>
                    <h4>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. ipsum dolor sit amet, consectetur adipisicing elit. Officiis, soluta.</h4>
                </div>
            </div>
        </div>
    );
}