import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "./Main";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
]);
export default router;