import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {addUser,removeUser} from "../utils/userSlice"
import { LOGO } from "../utils/constants";


const Header=()=>{
    const navigate=useNavigate();
    const dispatch= useDispatch();
    const user= useSelector(store =>store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
         // Sign-out successful.
           
        }).catch((error) => {
            navigate("/error")
            // An error happened.
        });
    }
    useEffect(()=>{
        // these get call when user is signup and signin
        const unsubscribe=onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user; 
            dispatch(addUser({uid: uid, email:email, displayName :displayName,photoURL:photoURL}));
            navigate("/browse")
            } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/" )
          }
        });
        //unsubscribe when componenets unmouts
        return ()=>unsubscribe();
      },[]);
    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center" >
            <img className="w-44"
             src={LOGO}
             alt="Logo"/>
             {user&&<div className="flex  justify-between items-center ">
                <img className="w-12 h-8 m-4"
                   src={user?.photoURL}
                   alt="usericon"
                   />
                <button className="bg-red-500 font-bold text-white "  onClick={handleSignOut}>(Sign Out)  </button>
             </div>}
        </div>
    );
}
export default Header;