/* eslint-disable */

import "styled-components";
import { theme } from "./GlobalStyles";
export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
