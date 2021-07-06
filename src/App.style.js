import { css } from '@emotion/react';

export const global = css`
    body {
        --colour-black: #000000;
        --colour-white: #ffffff;
    
    
        --font-title: 'Space Mono', monospace;
        --font-body: 'Work Sans', sans-serif;
        
        --font-h1-family: var(--font-title);
        --font-h1-weight: 400;
        --font-h1-size: 24px;
        --font-h1-line-height: 36px;
        --font-h1-letter-spacing: 0.015em;
        
        --font-h2-family: var(--font-title);
        --font-h3-weight: 400;
        --font-h2-size: 24px;
        --font-h2-line-height: 36px;
        --font-h2-letter-spacing: 0.015em;
        
        --font-h3-family: var(--font-body);
        --font-h3-weight: 600;
        --font-h3-size: 16px;
        --font-h3-line-height: 24px;
        --font-h3-letter-spacing: 0.015em;
        
        --font-body-family: var(--font-body);
        --font-body-weight: 400;
        --font-body-size: 16px;
        --font-body-line-height: 24px;
        --font-body-letter-spacing: 0.015em;
        
        --font-bold-family: var(--font-body);
        --font-bold-weight: 600;
        
        --font-button-family: var(--font-title);
        --font-button-weight: 400;
        --font-button-size: 16px;
        --font-button-line-height: 24px;
        --font-button-letter-spacing: 0.015em;
        
        --font-colour: var(--font-black)
    }
    
    body {
        background: var(--colour-white);
        color: var(--font-colour);
    
        h1 {
            font-family: var(--font-h1-family);
            font-weight: var(--font-h1-weight);
            font-size: var(--font-h1-size);
            line-height: var(--font-h1-line-height);
            letter-spacing: var(--font-h1-letter-spacing);
        }
        
        h2 {
            font-family: var(--font-h2-family);
            font-weight: var(--font-h2-weight);
            font-size: var(--font-h2-size);
            line-height: var(--font-h2-line-height);
            letter-spacing: var(--font-h2-letter-spacing);
        }
        
        
        h3 {
            font-family: var(--font-h3-family);
            font-weight: var(--font-h3-weight);
            font-size: var(--font-h3-size);
            line-height: var(--font-h3-line-height);
            letter-spacing: var(--font-h3-letter-spacing);
        }
        
        body {
            font-family: var(--font-body-family);
            font-weight: var(--font-body-weight);
            font-size: var(--font-body-size);
            line-height: var(--font-body-line-height);
            letter-spacing: var(--font-body-letter-spacing);
        }
    }
`;
