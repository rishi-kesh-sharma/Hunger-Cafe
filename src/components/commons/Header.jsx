import {
  Bars3Icon,
  BuildingOfficeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { FaBloggerB } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectItemsInCart } from "../../features/cart/cartSlice";
import {
  closeLocationModal,
  openLocationModal,
  toggleMenu,
} from "../../features/app/appSlice";
import Section from "./Section";
import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
  const { isMenuOpen, isLocationModalOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const items = useSelector(selectItemsInCart);

  const router = useLocation();
  const pathname = router.pathname;
  const handleToggleMenu = () => dispatch(toggleMenu());

  return (
    <Section className="sticky w-full top-0 bg-white z-[200] border-b shadow-sm border-gray-100 mt-0 h-[70px] ">
      <Container className="flex justify-between items-center h-full">
        <div className="flex items-center gap-2 md:gap-4">
          <Logo />
        </div>
        <ul className="text-zinc-700 ml-auto gap-2 md:gap-2 lg:gap-4 items-center hidden md:flex">
          <li>
            <Link
              to=""
              className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
              <HomeIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden md:block">Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
              <BuildingOfficeIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden md:block">About</p>
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
              <FaBloggerB className="w-4 h-4 text-gray-700" /> <p>Blogs</p>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden md:block">Contact</p>
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
              <ShoppingBagIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden md:block">Cart</p>
              {
                <p className="absolute -top-1 -right-1 bg-primary text-secondary flex justify-center items-center w-5 h-5 text-xs rounded-full">
                  {items.length}
                </p>
              }
            </Link>
          </li>
        </ul>

        {!isMenuOpen ? (
          <div className="shadow-lg transition-all fixed top-full -right-[100%] bg-white h-screen p-4 px-8">
            <>
              <ul className="text-zinc-700 space-y-4">
                <li>
                  <Link
                    to="/search"
                    className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
                    <MagnifyingGlassIcon className="w-4 h-4 text-gray-700" />{" "}
                    <p>Search</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
                    <HomeIcon className="w-4 h-4 text-gray-700" /> <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
                    <BuildingOfficeIcon className="w-4 h-4 text-gray-700" />{" "}
                    <p>About</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
                    <FaBloggerB className="w-4 h-4 text-gray-700" />{" "}
                    <p>Blogs</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-gray-700" />{" "}
                    <p>Contact</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className="p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
                    <ShoppingBagIcon className="w-4 h-4 text-gray-700" />{" "}
                    <p>Cart</p>
                    {
                      <p className="absolute -top-1 -right-1 bg-primary text-secondary flex justify-center items-center w-5 h-5 text-xs rounded-full">
                        {items.length}
                      </p>
                    }
                  </Link>
                </li>
              </ul>
            </>
          </div>
        ) : (
          <div className="shadow-lg transition-all md:hidden absolute top-full right-0 bg-white h-screen pt-[1rem]  w-[200px]">
            <>
              <ul className="text-zinc-700 space-y-2 w-full ">
                <li className="border-b w-full h-full">
                  <Link
                    to="/"
                    className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
                    <HomeIcon className="w-4 h-4 text-gray-700" /> <p>Home</p>
                  </Link>
                </li>
                <li className="border-b w-full h-full">
                  <Link
                    to="/about"
                    className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
                    <BuildingOfficeIcon className="w-4 h-4 text-gray-700" />{" "}
                    <p>About</p>
                  </Link>
                </li>
                <li className="border-b w-full h-full">
                  <Link
                    to="/blogs"
                    className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
                    <FaBloggerB className="w-4 h-4 text-gray-700" />{" "}
                    <p>Blogs</p>
                  </Link>
                </li>
                <li className="border-b w-full h-full">
                  <Link
                    to="/contact"
                    className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-gray-700" />{" "}
                    <p>Contact</p>
                  </Link>
                </li>
                <li className="border-b w-full h-full">
                  <Link
                    to="/cart"
                    className="p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2">
                    <ShoppingBagIcon className="w-4 h-4 text-gray-700" />{" "}
                    <p>Cart</p>
                    {
                      <p className="absolute right-2 md:-top-1 md:-right-1 bg-primary text-white flex justify-center items-center w-5 h-5 text-xs rounded-full">
                        {items.length}
                      </p>
                    }
                  </Link>
                </li>
              </ul>
            </>
          </div>
        )}

        <button className="block md:hidden" onClick={handleToggleMenu}>
          <Bars3Icon className="w-6 h-6" />
        </button>
      </Container>
    </Section>
  );
};
export default Header;
