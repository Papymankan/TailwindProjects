import EmailCard from "./Pages/EmailCard/EmailCard";
import Home from "./Pages/Home/Home";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/emailcard', element: <EmailCard /> },
]

export default routes