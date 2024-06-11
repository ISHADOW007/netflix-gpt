import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidateData } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const emailRef = useRef(); // useRef to refer to the element
    const passwordRef = useRef();
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonsClick = () => {
        // Validate the form data
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email);
        console.log(password);
        const message = checkValidateData(email, password);
        setErrorMessage(message);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="logo"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="p-12 bg-black absolute w-3/12 my-24 mx-auto right-0 left-0 text-white bg-opacity-100">
                <h1 className="font-bold text-2xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 cursor-pointer" />}
                <input ref={emailRef} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 cursor-pointer" />
                <input ref={passwordRef} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 cursor-pointer" />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <button className="p-4 my-6 h-14 bg-red-700 w-full rounded-lg" onClick={handleButtonsClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign in Now."}
                </p>
            </form>
        </div>
    )
}

export default Login;
