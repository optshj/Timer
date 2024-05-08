import "styled-components";
import { ThemeTypes } from "../_styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeTypes {}
}