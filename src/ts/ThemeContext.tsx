import { createContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
  theme: string;
  themeIcon: string;
  themeNameOne: string;
  themeNameTwo: string;
  switchTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: '',
  themeIcon: '',
  themeNameOne: '',
  themeNameTwo:'',
  switchTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const dark = 'root-layout container dark';
  const light = 'root-layout container light';
  const darkIcon = 'fa-regular fa-sun';
  const lightIcon = 'fa-regular fa-moon';

  const darkNameOne = 'hsl(0 0% 100%)';
  const lightNameOne = 'hsl(209, 18%, 20%)';
  
  const darkNameTwo = 'hsl(355, 100%, 63%)';
  const lightNameTwo = 'hsl(210, 23%, 50%)';

  const [theme, setTheme] = useState(dark);
  const [themeIcon, setThemeIcon] = useState(darkIcon);
  const [themeNameOne, setThemeNameOne] = useState(darkNameOne)
  const [themeNameTwo, setThemeNameTwo] = useState(darkNameTwo)

  const switchTheme = () => {
    setTheme(theme === dark ? light : dark);
    setThemeIcon(themeIcon === darkIcon ? lightIcon : darkIcon);
    setThemeNameOne(themeNameOne === darkNameOne ? lightNameOne : darkNameOne)
    setThemeNameTwo(themeNameTwo === darkNameTwo ? lightNameTwo : darkNameTwo)
  };

  return (
    <ThemeContext.Provider value={{ theme, themeIcon, themeNameOne, themeNameTwo, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
