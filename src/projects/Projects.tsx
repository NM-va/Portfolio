import React from "react";
import styles from "./Skills.module.css";
import styleContainer from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={styleContainer.container}>
                <h2>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"Js"} description={"Lorem ipsum dolor sit amet."}/>
                    <Skill title={"Css"} description={"Lorem ipsum dolor sit amet."}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet."}/>
                </div>
            </div>
        </div>
    );
}