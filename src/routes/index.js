import  {Home}  from "../resources/views";
import Details from "../resources/views/Details";

const publicRoutes =[
    {
        path:"/",
        component: Home,
    },
    {
        path:"/details",
        component:Details,
    }
]

export {publicRoutes}



