import EmailCard from "./Pages/EmailCard/EmailCard";
import Home from "./Pages/Home/Home";
import PricingCards from "./Pages/PricingCards/PricingCards";
import ProductModal from "./Pages/ProductModal/ProductModal";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/emailcard', element: <EmailCard /> },
    { path: '/pricingcards', element: <PricingCards /> },
    { path: '/productmodal', element: <ProductModal /> },
]

export default routes