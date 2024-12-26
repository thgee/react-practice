/// <reference types="@emotion/react/types/css-prop" />

import "@emotion/react";
import { ThemeType } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
