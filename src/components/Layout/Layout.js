/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from "react";

import {layout} from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <div css={layout}>
      {children}
    </div>
  )
}

export default Layout
