// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { signInWithPopup } from "firebase/auth"
// import { auth, provider } from "../config/firebase"

// interface Props {
//     children: React.ReactNode;
// }

// const AuthChecker = ({ children }: Props) => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         if(!auth.currentUser){
//             navigate("../")
//             signInWithPopup(auth, provider)
//         }
//     })
//   return (
//     <>
//         {children}
//     </>
//   )
// }

// export default AuthChecker

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

interface Props {
    children: React.ReactNode;
}

const AuthChecker =({ children }: Props) => {
    const navigate = useNavigate();

    const signInOnClick = async () => {
      const response = await signInWithPopup(auth, Providers.google);
      console.log(response)
  }
    
  useEffect(() => {
    const auth_state = onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInOnClick()
        navigate('/');
        
      }
    });
    return () => auth_state();
  }, [auth, navigate]);

  return (
    <>{children}</>
  )
}

export default AuthChecker