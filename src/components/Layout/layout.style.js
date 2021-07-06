import { css } from '@emotion/react';

export const container = css`
    position: relative;
    display: grid;
    max-width: 890px;
    margin: 230px auto;
    padding: 0 31px 0 25px;
    
    grid-template-rows: auto auto auto;
    grid-row-gap: 251px;
    
    grid-template-areas: 
        "header"
        "main"
        "footer";
`;

