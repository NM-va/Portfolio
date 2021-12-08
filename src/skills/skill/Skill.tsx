import React from "react";
import styles from "./Skill.module.scss";

type PropsType = {
    title: string
    description: string
    nameIcon: string
}

export const Skill = ({title, description, nameIcon}: PropsType) => {
    return (
        <div className={styles.skillsItem}>
            <div className={`${styles.icon} icon-${nameIcon}`}></div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}