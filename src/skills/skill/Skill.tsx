import React from "react";
import styles from "./Skills.module.css";
import styleContainer from "../common/styles/Container.module.css"

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={styleContainer.container}>
                <h2>Skills</h2>
                <div className={styles.skills}>
                    <div className={styles.skillsItem}>
                        <h3>HTML</h3>
                    </div>
                    <div className={styles.skillsItem}>
                        <h3>Css</h3>
                    </div>
                    <div className={styles.skillsItem}>
                        <h3>React</h3>
                    </div>
                    <div className={styles.skillsItem}>
                        <h3>Redux</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}