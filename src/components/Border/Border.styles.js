import {css} from '@emotion/core';


const borderMargin = '60px';

export const border = css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    
    :after {
        content: '';
        position: absolute;
        top: ${borderMargin};
        left: ${borderMargin};
        bottom: ${borderMargin};
        right: ${borderMargin};
        background-color: #fff;
    }
`;

export const image = css`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;