/** @jsxImportSource @emotion/react */
import React from "react";

import { Contact, Projects } from '../';

import * as styles from "./main.style";

const Main = () => (
    <main css={styles.wrapper}>
        <section>
            <Projects />
        </section>
        <section>
            <Contact />
        </section>
    </main>
);

export default Main;