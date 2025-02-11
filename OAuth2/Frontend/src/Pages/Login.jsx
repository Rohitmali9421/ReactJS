import React from 'react'
import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"
function Login() {
    const responseGoogle = async (authResult) => {
        try {
            if (authResult.code)
                console.log(authResult.code);
            const res = await axios.post("http://localhost:3000/google", { code: authResult.code })
            console.log(res);

        } catch (error) {
            console.error(error)
        }
    }
    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code",
    })


    return (
        <div>
            <button onClick={googleLogin} > Login </button>
        </div>
    )
}

export default Login
