import Home from "../pages/Home"; 
import Books from "../pages/Books";
import Profile from "../pages/Profile";

    
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
]
export default routes