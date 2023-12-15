import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
]);
export default router;