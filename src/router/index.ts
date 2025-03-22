import { createBrowserRouter } from "react-router-dom";
import Materials from "../pages/Materials";
import Editor from "../pages/Editor";
import Home from "../pages/Home";

export default createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/materials',
        Component: Materials
    },
    {
        path: '/editor',
        Component: Editor
    }
])