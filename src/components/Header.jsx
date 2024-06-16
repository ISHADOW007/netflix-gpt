import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {addUser,removeUser} from "../utils/userSlice"
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header=()=>{
    const showGptSearch =useSelector((store)=>store.gpt.showGptSearch)
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
      const handleGptSearchClick =()=>{
           //Toogle GPT Search
           dispatch(toggleGptSearchView());
      }
      
    const handleLanguageChange = ( e)=>{
      dispatch(changeLanguage(e.target.value))

    }


    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center" >
            <img className="w-44"
             src={LOGO}
             alt="Logo"/>
             {user&&<
              div className="flex  justify-between items-center " onChange={handleLanguageChange}>
              {showGptSearch&&
                <select className="p-2 m-2 bg-green-900 text-white">
                {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
                
              </select>}
                <button className="py-2 px-4 my-2 bg-purple-800 text-white rounded-lg"  onClick={handleGptSearchClick}>
                  { showGptSearch ?"Homepage":"GPT Search"}</button>
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