import {css} from '@emotion/core';

export const divider = css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    :after {
        content: '';
        display: block;
        height: 100%;
        width: 1px;
        background-color: #333;
    }
`;
