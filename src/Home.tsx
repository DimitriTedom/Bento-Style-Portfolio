import { Helmet } from "react-helmet-async";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="w-full flex flex-col gap-3 h-screen">
      <Helmet>
        <title>Home-Bento-Style-Portfolio</title>
        <meta
          name="description"
          content="Bienvenue sur la page d'accueil de Mon Site."
        />
        <meta property="og:title" content="Accueil - Mon Site" />
        <meta
          property="og:description"
          content="Bienvenue sur Mon Site, explorez nos services."
        />
      </Helmet>
      <NavBar/>
      <HeroSection/>
      <Section/>
      <Footer/>
    </div>
  );
}
