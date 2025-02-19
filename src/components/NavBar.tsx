import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="flex w-full items-center">
      <Link to="/">
        <div className="w-16 h-16 flex justify-center items-center rounded-full cardBorder bg-CardBgColor">
          <img src="/logo.svg" alt="logo" className="w-8 h-8 hover:LogoOmbre hover:LogoAnimation" />
        </div>
      </Link>
      <nav className="cardBorder bg-CardBgColor rounded-full flex justify-between items-center grow p-5">
        <Link to="/" className="text-lg md:text-xl font-extrabold text-SecoTextColor hover:SelectedOmbre duration-1000">
          ABOUT
        </Link>
        <Link to="/portfolio" className="hidden md:block text-lg md:text-xl font-extrabold hover:ombre duration-1000">
          PORTFOLIO
        </Link>
        <Link to="/contact" className="hidden md:block text-lg md:text-xl font-extrabold hover:ombre duration-1000">
          CONTACT
        </Link>
        <img src="/mi_menu.svg" className="md:hidden" />
      </nav>
    </header>
  );
};

export default NavBar;
