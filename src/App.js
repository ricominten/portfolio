/** @jsxImportSource @emotion/react */
import React  from 'react';
import {Global} from "@emotion/react";

import {Layout, Header, Footer, Main} from "./components";
import * as styles from "./App.style";

const App = () => (
    <>
        <Global styles={styles.global} />
        <Layout>
            <Header />
            <Main />
            <Footer />
        </Layout>
    </>
);

export default App;
