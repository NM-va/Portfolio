import React from "react";
import styles from "./Social.module.scss"
import {SocialItem} from "./socialItem/SocialItem";

// import { Facebook} from 'react-bootstrap-icons';
// import { Linkedin } from 'react-bootstrap-icons';
// import { Twitter } from 'react-bootstrap-icons';
// import { Youtube } from 'react-bootstrap-icons';

export const Social = () => {
    return (
        <ul className={styles.social}>
            <SocialItem nameIcon={"facebook"} />
            <SocialItem nameIcon={"linkedin2"} />
            <SocialItem nameIcon={"twitter"} />
            <SocialItem nameIcon={"youtube"} />
        </ul>
    );
}