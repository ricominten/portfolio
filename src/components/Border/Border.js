/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

import img1 from '../../../static/IMG_5214.jpg';
import img2 from '../../../static/IMG_5475.jpg';
import img3 from '../../../static/IMG_6353.jpg';

import {border, image} from './Border.styles';

const Border = () => {
    return (
        <div css={border} role="presentation">
            {/*<picture>*/}
            {/*    <source media="(min-width: 1024px)" srcSet={img2} />*/}
            {/*    <source media="(min-width: 768px)" srcSet={img3} />*/}
            {/*    <img src={img1} css={image} alt="" />*/}
            {/*</picture>*/}
        </div>
    )
}

export default Border