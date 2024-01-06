import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import TopBar from "../components/shared/TopBar";
import Footer from "../components/shared/Footer";

const Main = () => {
    return (
        <>
            <TopBar></TopBar>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;