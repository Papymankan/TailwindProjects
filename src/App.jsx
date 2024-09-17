import { useLocation, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./router.jsx";
import { useEffect } from "react";

function App() {
  const router = useRoutes(routes);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {router}
    </>
  );
}

export default App;
