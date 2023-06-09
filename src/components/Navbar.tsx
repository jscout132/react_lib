import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, Providers } from "../config/firebase";

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () =>{
      console.log('sign out on click ran')
      signOut(auth)
      location.reload();
    }
    
    const signInOnClick = async () => {
      const response = await signInWithPopup(auth, Providers.google);
      if (response.user){
          console.log('sign in on click ran')
          location.reload();
      }
  }

    const dropDown=()=>{
        setIsVisible(!isVisible)
    }

    const clicked=() =>{
        setIsVisible(false)
    }
  return (
<nav className="w-full flex items-center justify-between flex-wrap logo-color p-6">
      <div className="flex items-center flex-shrink-0 mr-6"> 
        <Link to='/' onClick={ clicked } className="light-logo-font text-2xl logo-color">lib-books</Link>
        
        </div>
      <div className="block">
        <button onClick={dropDown} 
                className="flex items-center px-3 py-2 light-logo-color border light-border m-4 rounded">
                    X
        </button>
      </div>
      { isVisible ? (
        <div className="w-full block flex-grow items-center logo-color">
            <div className="text-sm lg:flex-grow logo-color">

                <button>
                    <div className="px-4">
                        <Link to='/books' onClick={ clicked } className="light-logo-font logo-color text-xl">books</Link>
                    </div>
                </button>
                {
                  !auth.currentUser ?
                  <button>
                    <div className="px-4">
                      <Link to='/' onClick={ () => {signInOnClick()} } className="light-logo-font logo-color text-xl">
                        sign in 
                      </Link>
                    </div>
                  </button>
                  :
                  <button>
                    <div className="px-4">
                      <Link to='/' onClick={ signOutOnClick } className="light-logo-font logo-color text-xl">sign out</Link>
                    </div>
                  </button>
                }
            </div>
        </div>
        ) : (
            // this colon is the or of the if statement started above
            // if the nav isn't visible, return this empty div
        <></>
      ) }
    </nav>
  );
}

export default Navbar;
