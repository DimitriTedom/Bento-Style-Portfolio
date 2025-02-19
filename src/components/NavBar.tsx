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
        <Link to="/" className="md:text-xl font-extrabold hover:SelectedOmbre duration-1000">
          <NavLink text="ABOUT" color="rgba(243, 80, 52, 1)" />
        </Link>

        <Link to="/portfolio" className="hidden md:block md:text-xl font-extrabold hover:ombre duration-1000">
          <NavLink text="PORTFOLIO" color="rgba(255, 255, 255, 1)" />
        </Link>

        <Link to="/contact" className="hidden md:block md:text-xl font-extrabold hover:ombre duration-1000">
          <NavLink text="CONTACT" color="rgba(255, 255, 255, 1)" />
        </Link>

        <img src="/mi_menu.svg" className="md:hidden" />
      </nav>
    </header>
  );
};

function NavLink({ text, color }: { text: string; color: string }) {
  return (
    <div className="relative group text-lg">
      {/* Appliquer la couleur du texte via style */}
      <span style={{ color: color }}>{text}</span>

      {/* Barre animée avec la même couleur */}
      <div 
        className="absolute left-[2px] bottom-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export default NavBar;
