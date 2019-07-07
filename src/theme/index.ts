
import Palette, { palette } from './styles/Palette';
import Sizing, { sizing } from './styles/Sizing';
import Spacing, { spacing } from './styles/Spacing';
import Radius, { radius } from './styles/Radius';

export type ITheme = {
  palette: Palette,
  sizing: Sizing,
  spacing: Spacing,
  radius: Radius,
};

const theme = {
  palette,
  sizing,
  spacing,
  radius,
};

export default theme;
