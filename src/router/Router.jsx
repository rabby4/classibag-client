import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "./Main";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import About from "../pages/about/About";
import Collections from "../pages/collections/Collections";

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
                path: '/collections',
                element: <Collections></Collections>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);
export default router;