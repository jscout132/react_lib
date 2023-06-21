import Home from "../pages/Home"; 
import Books from "../pages/Books";
import Profile from "../pages/Profile";
import SingleBook from "../pages/SingleBook";
import Example from "../pages/Example";

import bookId from "../components/BookInfo";

const isbn = '9780062698190'

    
interface RouteTypes {
    path: string,
    component: ()=>JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteTypes[]= [
    {
        path:"/",
        component:Home,
        name:"Home",
        protected: false
    },
    {
        path:"/books",
        component:Books,
        name:"Books",
        protected: true
    },
    {
        path:"/profile",
        component:Profile,
        name:"Profile",
        protected: true
    },
    {
        path:"/singlebook",
        component:SingleBook,
        name:"Single Book",
        protected: true
    },
    {
        path:`/book/${ bookId }`,
        component:Home,
        name:"Home",
        protected: false
    }
]
export default routes