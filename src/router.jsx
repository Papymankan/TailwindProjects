import EmailCard from "./Pages/EmailCard/EmailCard";
import Home from "./Pages/Home/Home";
import PricingCards from "./Pages/PricingCards/PricingCards";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/emailcard', element: <EmailCard /> },
    { path: '/pricingcards', element: <PricingCards /> },
]

export default routes