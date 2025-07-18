import { Link } from "react-router-dom"
import Badge from "./Badge"
import { NavLink } from "./NavBar"

const Footer = () => {
  return (
    <div className="cardBorder bg-CardBgColor rounded-full flex justify-between items-center grow p-5 w-full">
        <h1 className="md:text-2xl font-extrabold hover:ombre duration-1000">Portfolio 2024</h1>
        <ul className="md:text-2xl flex-between gap-3">
        <Link to="/" className="md:text-xl font-extrabold hover:SelectedOmbre duration-1000">
          <NavLink text="ABOUT" color="rgba(243, 80, 52, 1)" />
        </Link>

        <Link to="/portfolio" className="hidden md:block md:text-xl font-extrabold hover:ombre duration-1000">
          <NavLink text="PORTFOLIO" color="rgba(255, 255, 255, 1)" />
        </Link>

        <Link to="/contact" className="hidden md:block md:text-xl font-extrabold hover:ombre duration-1000">
          <NavLink text="CONTACT" color="rgba(255, 255, 255, 1)" />
        </Link>
        </ul>
        <Badge content="AVAILABLE FOR JOB" />
    </div>
  )
}

export default Footer