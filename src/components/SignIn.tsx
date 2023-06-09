import { Link } from "react-router-dom"
import { signInWithPopup } from "firebase/auth"
import { auth, Providers } from "../config/firebase"
import FeaturedBook from "./FeaturedBook";

const signInOnClick = async () => {
  const response = await signInWithPopup(auth, Providers.google);
  if (response.user){
      location.reload();
  }
}

const SignIn = () => {
  return (
    <>
    <div className="border-2 dark-border m-4 rounded-lg logo-light">
      {
      !auth.currentUser ? 
          <div>
            <h4 className="logo-font light-logo-font logo-color py-4 px-2 text-2xl">Sign In to view books</h4>
            <Link to='/' onClick={signInOnClick}>
              <button className="rounded logo-color p-3 shadow-md light-logo-color my-4">Sign In</button>
            </Link>
          </div>
      :
        <FeaturedBook/>
      }
    </div>
    
    </>

  )
}

export default SignIn