import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const RootLayout = () => {
    return (
        <div className="root-layout container dark">
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