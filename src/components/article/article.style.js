import { css } from '@emotion/react';


export const wrapper = css`
    margin-bottom: 32px;
`;

export const title = css`
    font-family: var(--font-h3-family);
    font-weight: var(--font-h3-weight);
    font-size: var(--font-h3-size);
    line-height: var(--font-h3-line-height);
    letter-spacing: var(--font-h3-letter-spacing);
`;

export const img = css`
    width: 100%;
`;

export const buttonGroup = css`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 16px;
`;

export const button = css`
    position: relative;
    width: auto;
    font-family: var(--font-button-family);
    font-weight: var(--font-button-weight);
    font-size: var(--font-button-size);
    line-height: var(--font-button-line-height);
    letter-spacing: var(--font-button-letter-spacing);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    column-gap: 6px;
    text-decoration: none;
    border-radius: 5px;
    color: var(--font-colour);
    
    &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--colour-button);
        z-index: 0;
    }
    
    &:hover, &:focus {
        color: var(--colour-button-hover);
        
        &:after {
            background: var(--colour-button-hover);
        }
    }
    
    &:focus {
        border: 1px solid var(--colour-button-hover);
        outline: 2px solid var(--colour-button-light);
        outline-offset: 3px;
    }
`;

export const arrow = css`
`;

