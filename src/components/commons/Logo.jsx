import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      data-testid="logo"
      className="text-xl lg:text-2xl font-semibold flex items-center">
      🍔 <span className="logo">Hunger Cafe</span>
    </Link>
  );
};

export default Logo;
