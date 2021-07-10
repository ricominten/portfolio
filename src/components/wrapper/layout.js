/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./layout.style";

const Layout = ({children}) => (
    <div css={styles.container}>
        {children}
    </div>
);

export default Layout;