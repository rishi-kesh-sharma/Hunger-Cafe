import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import useOnlineStatus from "./hooks/useOnlineStatus";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "./features/app/appSlice";

import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";

const App = () => {
  const { pathname } = useLocation();
  const isOnline = useOnlineStatus();
  const { isMenuOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    // close menu, if open
    isMenuOpen && dispatch(closeMenu());
  }, [pathname]);

  return (
    <>
      {isOnline ? (
        <>
          <Toaster />
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-4xl font-bold text-center">
            Oops! Connection lost
          </h1>
          <p className="text-center">
            Looks like you're offline, please check your internet connection.
          </p>
        </div>
      )}
    </>
  );
};

export default App;
