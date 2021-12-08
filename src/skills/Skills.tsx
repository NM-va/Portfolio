import React from "react";
import styles from "./Skills.module.scss";
import styleContainer from "../common/styles/Container.module.scss"
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={`${styles.skillsBlock} section`}>
            <div className={styleContainer.container}>
                <h2 className="textCenter">Skills</h2>
                <div className={styles.skills}>
                    <Skill title={"Js"} description={"Lorem ipsum dolor sit amet."} nameIcon={"js"} />
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet."} nameIcon={"react"} />
                    <Skill title={"Redux"} description={"Lorem ipsum dolor sit amet."} nameIcon={"redux"} />
                </div>
            </div>
        </div>
    );
}