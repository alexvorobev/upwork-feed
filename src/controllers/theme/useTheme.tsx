import { createContext, FC, useContext, useEffect } from 'react';

import { useToggleState } from 'hooks/useToggleState';
import { WithChildren } from 'types/WithChildren';

import { getLocalStorageTheme, setLocalStorageTheme } from './utils/localStorageTheme';

const noop = () => {};

interface ThemeContextType {
  isThemeDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isThemeDark: false,
  toggleTheme: noop,
});

const THEME_DELAY = 0;

export const ThemeProvider: FC<WithChildren> = ({ children }) => {
  const {
    isOpen: isThemeDark,
    toggle: toggleTheme,
    setClosed: setLightTheme,
    setOpen: setDarkTheme,
  } = useToggleState(false);

  // Save theme to LS on change
  useEffect(() => {
    setTimeout(() => {
      setLocalStorageTheme(isThemeDark);
      document.documentElement.classList.remove(isThemeDark ? 'light' : 'dark');
      document.documentElement.classList.add(isThemeDark ? 'dark' : 'light');
    }, THEME_DELAY);
  }, [isThemeDark]);

  // Get saved theme from LS
  useEffect(() => {
    const savedTheme = getLocalStorageTheme();
    if (savedTheme) setDarkTheme();
    else setLightTheme();
  }, [setDarkTheme, setLightTheme]);

  return <ThemeContext.Provider value={{ toggleTheme, isThemeDark }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
