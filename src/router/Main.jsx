import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Main;