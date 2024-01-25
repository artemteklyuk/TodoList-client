import Lists from "../pages/Lists";
import Login from "../pages/Login";
import ListPage from "../pages/ListPage"

export const PrivateRoutes = [
    {path: "/list", element: Lists},
    {path: "/list/:id", element: ListPage},
]
export const PublicRoutes = [
    {path: "/login", element: Login},
    {path: "/registration", element: Login}
]