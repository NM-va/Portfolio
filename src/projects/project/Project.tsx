import React from "react";
import styles from "./Skill.module.css";

type PropsType = {
    title: string
    description: string
}

export const Skill = (props: PropsType) => {
    return (
        <div className={styles.skillsItem}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}