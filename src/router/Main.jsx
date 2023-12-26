import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import TopBar from "../components/shared/Topbar";

const Main = () => {
    return (
        <>
            <TopBar></TopBar>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Main;