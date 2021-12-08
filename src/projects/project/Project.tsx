import React, { CSSProperties } from "react";
import styles from "./Project.module.scss";
import stylesBtn from "../../common/styles/Btn.module.scss";

type PropsType = {
    title: string
    description: string
    style: CSSProperties | undefined
}

export const Project = ({title, description,  style}: PropsType) => {

    return (
        <div className={styles.projectsItem}>
            <div className={styles.img} style={style}></div>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className={stylesBtn.btnContainer}>
                <a href="" className={`${stylesBtn.btn} ${stylesBtn.btnDefault}`}>Watch</a>
            </div>
        </div>
    );
}