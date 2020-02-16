import {css} from '@emotion/core'

export const layout = css`
    margin: 50px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 20px 1fr 20px 1fr;
    grid-template-areas: 
        "header | one | even | two | odd"
    ;
    grid-column-gap: 40px;
    grid-row-gap: 20px;
`;