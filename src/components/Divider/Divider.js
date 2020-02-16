/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react";

import {divider} from './Divider.styles';

const Divider = () => {
    return (
        <div css={divider} role="presentation">
        </div>
    )
}

export default Divider