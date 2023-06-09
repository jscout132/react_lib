import SignIn from "../components/SignIn"

const SignInPage = () => {
  return (
    <>
    <div className="flex flex-row justify-center">
        <div className="w-1/3">
            <h3 className="logo-font">
                Sign in to your lib-books account
            </h3>
            <p>Sign in to view all of your favorite books</p>
        </div>
    
        <div className="w-1/3">
            <SignIn/>
        </div>
    </div>
    </>
    )
}

export default SignInPage