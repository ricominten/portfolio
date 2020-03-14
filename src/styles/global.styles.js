import {css} from '@emotion/core';

export const global = css`
    .vh {
        position: absolute !important;
        height: 0; 
        width: 0;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
        white-space: nowrap; /* added line */
    }
`;