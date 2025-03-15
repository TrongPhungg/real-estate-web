import { Home } from "../resources/views";
import Details from "../resources/views/Details";


const publicRoutes =[
    {
        path:"/",
        component: Home,
    },
    {
        path:"/Details",
        component:Details,
    }
]

export {publicRoutes}