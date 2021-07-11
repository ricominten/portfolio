/** @jsxImportSource @emotion/react */
import React from "react";

import * as styles from "./projects.style";

import content from '../../content';
import Article from "../article";

const Projects = () => (
    <div css={styles.wrapper}>
        <h2>Projects</h2>
        {content.map((article) => (
            <Article article={article} key={article.title} />
        ))}
    </div>
);

export default Projects;