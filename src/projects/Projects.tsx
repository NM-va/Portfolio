import React, { CSSProperties } from "react";
import styles from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.scss"
import {Project} from "./project/Project";
import todoImg from "./../assets/img/todolist.jpg";
import socialImg from "./../assets/img/social_networks.jpg";

export const Projects = () => {
    const social: CSSProperties = {
        backgroundImage: `url("${socialImg}")`
    }

    const todo = {
        backgroundImage: `url("${todoImg}")`
    }
    
    return (
        <div className={`${styles.projectsBlock} section`}>
            <div className={styleContainer.container}>
                <h2 className="textCenter">My works</h2>
                <div className={styles.projects}>
                    <Project title={"Social network"} description={"Lorem ipsum dolor sit amet."}
                             style={social} />
                    <Project title={"Todo"} description={"Lorem ipsum dolor sit amet."}
                             style={todo}/>
                    <Project title={"Project"} description={"Lorem ipsum dolor sit amet."}
                             style={social}/>
                </div>
            </div>
        </div>
    );
}