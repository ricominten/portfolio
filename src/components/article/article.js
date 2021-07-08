/** @jsxImportSource @emotion/react */
import React from "react";

import { Arrow } from "../icons";
import * as styles from "./article.style";

const Article = ({article}) => (
    <article css={styles.wrapper}>
        <h1 css={styles.title}>{article.title}</h1>
        <img css={styles.img} src={article.image} alt={article.alt} />
        <p dangerouslySetInnerHTML={{__html: article.about}}/>
        <p dangerouslySetInnerHTML={{__html: article.tech}}/>
        <div css={styles.buttonGroup}>
            <a css={styles.button} href={article.link} target="_blank" rel="noopener noreferrer">
                To project
                <Arrow/>
            </a>
            <a css={styles.button} href={article.github} target="_blank" rel="noopener noreferrer">
                Github
                <Arrow/>
            </a>
        </div>
    </article>
);

export default Article;