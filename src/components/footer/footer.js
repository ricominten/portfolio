/** @jsxImportSource @emotion/react */
import React from "react";

import * as styles from "./footer.style";

const Footer = () => (
    <footer css={styles.wrapper}>
        <p css={styles.footer}>
            <span css={styles.copy}>&copy;</span>
            &nbsp;
            {new Date().getFullYear()}
        </p>
    </footer>
);

export default Footer;