/** @jsxImportSource @emotion/react */
import React from "react";

import { Arrow } from "../icons";
import * as styles from "./contact.style";

const Contact = () => (
    <div css={styles.wrapper}>
        <h2>Contact</h2>
        <p>
            I’m a <b>front-end engineer</b> with a background in industrial design, I strive to create <b>interfaces</b>
            {' '}and front-end systems that work for everyone, and that support <b>accessibility</b> needs.
        </p>

        <div css={styles.buttonGroup}>
            <a css={styles.button} href="https://github.com/ricominten" target="_blank" rel="noopener noreferrer">
                Github
                <Arrow/>
            </a>
            <a css={styles.button} href="https://twitter.com/ricominten" target="_blank" rel="noopener noreferrer">
                Twitter
                <Arrow/>
            </a>
            <a css={styles.button} href="https://www.linkedin.com/in/rico-minten/" target="_blank" rel="noopener noreferrer">
                LinkedIn
                <Arrow/>
            </a>
        </div>
    </div>
);

export default Contact;