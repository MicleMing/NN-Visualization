import Palette from '../styles/Palette';
import Sizing from '../styles/Sizing';
import { ITheme } from '../';

function palette<T extends keyof Palette, K extends keyof Palette[T]>(
  name: T,
  sub?: K,
) {
  return (theme: ITheme) => {
    return sub ? theme.palette[name][sub] : theme.palette[name];
  };
}

function sizing<T extends keyof Sizing, K extends keyof Sizing[T]>(
  name: T,
  sub: K,
) {
  return (theme: ITheme) => theme.sizing[name][sub];
}

export {
  palette,
  sizing,
};
