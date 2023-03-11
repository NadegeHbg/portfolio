import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const RootLayout = () => {
    const dark = 'root-layout container dark';
    const light = 'root-layout container light';
    const darkIcon = 'fa-regular fa-moon';
    const lightIcon = 'fa-regular fa-sun';

    const [theme, setTheme] = useState(dark)
    const [themeIcon, setThemeIcon] = useState(darkIcon)
    const switchTheme = () => {
        setTheme(theme === dark ? light : dark)
        setThemeIcon(themeIcon === darkIcon ? lightIcon : darkIcon)
    }

    return (
        <div className={theme}>
            <header className="header">
                <Header />
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                <i className={themeIcon} onClick={switchTheme} ></i>
            </footer>
        </div>
    );
};

export default RootLayout;