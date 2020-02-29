import {css} from '@emotion/core';


export const title = css`
    color: #000;
    
    > span {
        display: block;
    }
`;

export const svg = css`
    width: 50%;
    height: auto;
`;

export const intro = css`
    font-family: Helvetica, sans-serif;
    color: #333333;
`;

export const list = css`
    list-style: none;
`;

export const link = css`
    position: relative;
    display: flex;
    align-items: center;
    font-family: Helvetica, sans-serif;
    color: #333333;
    text-decoration: none;
    box-shadow: none;
    
    > svg {
        width: 40px;
        height: 40px;
        margin-right: 7px;
    }
    
    :after {
        content: '';
        position: absolute;
        left: 19px;
        right: calc(100% - 19px);
        bottom: 2px;
        height: 1px;
        background-color: #000000;
        transition: all 0.25s ease;
    }
    
    :hover:after {
        right: 0;
    }
`;