import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from '../ThemeContext';
import Header from "../Components/Header/Header";

const RootLayout = () => {
    const { theme } = useContext(ThemeContext);


    return (
        <div className={theme}>
            <header className="header">
                <Header />
            </header>
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;