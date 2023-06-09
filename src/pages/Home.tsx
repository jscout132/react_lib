import SignIn from "../components/SignIn"
import BookSquare from "../components/BookSquare"
import HomeImage from "../components/HomeImage"
const Home = () => {
  return (
    <>
        <div className="flex flex-row justify-center">
            <SignIn/>
            <HomeImage/>

        </div>
        <div className="logo-light pb-3">
            <h3 className="logo-font text-2xl pt-4">New Books</h3>
            <BookSquare/>
        </div>
        <div>
          note: the 4 newest books load here, but sometimes they load super slowly when first connecting to the database
        </div>
       
    </>
  )
}

export default Home