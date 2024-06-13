import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
const Header=()=>{
    const navigate=useNavigate();
    const user= useSelector(store =>store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
         // Sign-out successful.
           navigate("/")
        }).catch((error) => {
            navigate("/error")
            // An error happened.
        });
    }
    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center" >
            <img className="w-44"
             src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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