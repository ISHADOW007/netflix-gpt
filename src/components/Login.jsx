import Header from "./Header";
import { useState } from "react";
const Login= ()=>{
    const [isSignInForm,setIsSignInForm] =useState(true);
    const toggleSignInform=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                  alt="logo"/>
            </div>
            <form className="p-12 bg-black absolute w-3/12 my-24 mx-auto right-0 left-0 text-white bg-opacity-100 ">
                <h1 className="font-bold text-2xl py-4">{isSignInForm ? "Sign In":"Sign up"} </h1>
                {!isSignInForm &&
                <input type="Full Name" placeholder="Password"  className="p-4 my-4 w-full bg-gray-700 cursor-pointer"/>}
                <input type="text" placeholder="Email Address " className="p-4 my-4 w-full bg-gray-700 cursor-pointer"/>
                <input type="Password" placeholder="Password"  className="p-4 my-4 w-full bg-gray-700 cursor-pointer"/>
                <button className="p-4 my-6 h-14 bg-red-700 w-full rounded-lg ">{isSignInForm ? "Sign In":"Sign up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInform}>{isSignInForm ? "New to Netflix? Sign up now":"Already registered? Sign in Now."}</p>
            </form>
           
        </div>
    )
}
export default Login;