import { createContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const ModalContext = createContext(null);

const Root = () => {
    return(
        <ModalContext.Provider value={null}>
            <div className="layout">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ModalContext.Provider>
    );
}

export default Root;