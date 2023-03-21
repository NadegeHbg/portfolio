import { createContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
  theme: string;
  themeIcon: string;
  switchTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: '',
  themeIcon: '',
  switchTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const dark = 'root-layout container dark';
  const light = 'root-layout container light';
  const darkIcon = 'fa-regular fa-moon';
  const lightIcon = 'fa-regular fa-sun';

  const [theme, setTheme] = useState(dark);
  const [themeIcon, setThemeIcon] = useState(darkIcon);

  const switchTheme = () => {
    setTheme(theme === dark ? light : dark);
    setThemeIcon(themeIcon === darkIcon ? lightIcon : darkIcon);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeIcon, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
