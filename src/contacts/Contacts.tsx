import React from "react";
import styles from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import stylesBtn from "../common/styles/Btn.module.scss";
import stylesInput from "../common/styles/Input.module.scss";
import stylesTextarea from "../common/styles/Textarea.module.scss";
import stylesForm from "../common/styles/Form.module.scss";

export const Contacts = () => {
    return (
        <div className={`${styles.contactsBlock} section`}>
            <h2 className="textCenter">Get in touch</h2>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>
                <div className={styles.blockInfo}>
                    <div className={styles.contacts}>
                        <div className={styles.contactsInfo}>
                            <div className={styles.title}>Phone</div>
                            <span>+79770000000</span>
                        </div>
                        <div className={styles.contactsInfo}>
                            <div className={styles.title}>Email address</div>
                            <span>nad@gmail.com</span>
                        </div>
                        <div className={styles.contactsInfo}>
                            <div className={styles.title}>Location</div>
                            <span>Russia, Moscow</span>
                        </div>
                    </div>
                    <form className={styles.formContacts}>
                        <div className={`${stylesForm.row} ${stylesForm.item}`}>
                            <div className={stylesForm.col}>
                                <label><input className={stylesInput.input} type="text" placeholder="Your name"/></label>
                            </div>
                            <div className={stylesForm.col}>
                                <label><input className={stylesInput.input} type="email" placeholder="Your email"/></label>
                            </div>
                        </div>
                        <div className={stylesForm.item}>
                            <label><input className={stylesInput.input} type="text" placeholder="Subject"/></label>
                        </div>
                        <div className={stylesForm.item}>
                            <label><textarea className={stylesTextarea.textarea} placeholder="Message"></textarea></label>
                        </div>
                        <div className={stylesBtn.btnBlock}>
                            <button className={`${stylesBtn.btn} ${stylesBtn.btnDefault}`} type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}