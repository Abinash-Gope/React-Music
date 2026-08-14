import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Favrouite from "../pages/Favrouite";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ArtistDashboard from "../pages/ArtistDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "favrouite",
                element: <Favrouite />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "artist-dashboard",
                element: <ArtistDashboard />
            },
        ]
    }
])

export default router;