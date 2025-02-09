import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google"

const GoogleAuthWrapper = () => {
    return(<GoogleOAuthProvider clientId="781680502229-anpgfpvkghnmlb16je2ia9d6h1qt74bq.apps.googleusercontent.com">
        <Login />
    </GoogleOAuthProvider>)
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <>

            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<GoogleAuthWrapper/>} />
        </>
    )
);


function App() {


    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
