import Clipboard from "./Pages/Clipboard/Clipboard";
import EmailCard from "./Pages/EmailCard/EmailCard";
import Home from "./Pages/Home/Home";
import ImageGallery from "./Pages/ImageGallery/ImageGallery";
import LoginModal from "./Pages/LoginModal/LoginModal";
import Loopstudio from "./Pages/Loopstudio/Loopstudio";
import PricingCards from "./Pages/PricingCards/PricingCards";
import ProductModal from "./Pages/ProductModal/ProductModal";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/emailcard', element: <EmailCard /> },
    { path: '/pricingcards', element: <PricingCards /> },
    { path: '/productmodal', element: <ProductModal /> },
    { path: '/imagegallery', element: <ImageGallery /> },
    { path: '/loginmodal', element: <LoginModal /> },
    { path: '/clipboard', element: <Clipboard /> },
    { path: '/loopstudio', element: <Loopstudio /> },
]

export default routes