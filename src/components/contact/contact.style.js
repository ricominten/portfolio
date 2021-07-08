import { css } from '@emotion/react';


export const wrapper = css`
    position: sticky;
    top: 250px;
`;



export const buttonGroup = css`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 32px;
`;

export const button = css`
width: auto;
    font-family: var(--font-button-family);
    font-weight: var(--font-button-weight);
    font-size: var(--font-button-size);
    line-height: var(--font-button-line-height);
    letter-spacing: var(--font-button-letter-spacing);
    padding: 12px 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    column-gap: 6px;
    text-decoration: none;
    border-radius: 5px;
    color: var(--font-colour);
    background-color: var(--colour-button);
    
    &:hover, &:focus {
        background: var(--colour-button-hover);
        outline: none;
    }
`;
