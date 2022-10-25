import { GoogleLogin } from "@react-oauth/google"
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

export default function LoginScreen({loginHandler}){

    async function handleLogin(response){
        let responseData = response.credential;
        loginHandler(responseData);
    };

    return(
        <div className="login-screen">
            <GoogleLogin onSuccess={handleLogin} />
        </div>
    )
}