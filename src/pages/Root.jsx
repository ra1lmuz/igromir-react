import { createContext } from "react";
import { Outlet } from "react-router-dom";
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
            </div>
        </ModalContext.Provider>
    );
}

export default Root;