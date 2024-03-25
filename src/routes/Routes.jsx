import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Bookmarks from "../pages/Bookmarks";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/blogs",
                element: <Blogs />,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
            },
            {
                path: "/blog/:id",
                element: <Blog />,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        element: <Content />
                    },
                    {
                        path: 'author',
                        element: <Author />
                    }
                ]
            },
            {
                path: "/bookmarks",
                element: <Bookmarks />,
            },
        ]
    },

]);