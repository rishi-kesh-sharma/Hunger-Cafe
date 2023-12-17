import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.png";

const Logo = () => {
  return (
    <Link
      to="/"
      data-testid="logo"
      className="text-xl lg:text-2xl font-semibold flex items-center">
      {/* <LogoImage />
       */}
      <img
        src={LogoImage}
        alt="logo"
        className="h-[60px] w-[60px] object-contain"
      />
    </Link>
  );
};

export default Logo;
