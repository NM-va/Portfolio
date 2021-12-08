import React from "react";
import styles from "./SocialItem.module.scss";
import {Icon} from "react-bootstrap-icons";


type PropsType = {
    // icon: Icon
    nameIcon: string
}

// const setIconComponent = (Icon: Icon) => {
//     return <Icon color="royalblue" size={20}/>
// }

export const SocialItem = ({nameIcon}: PropsType) => {
    return (
        <li className={styles.socialItem}>
            <a href="" className={styles.socialLink}>
                <span className={`icon-${nameIcon}`}></span>
            </a>
        </li>
    );
}