import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
    <>
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

    </>
  );
}
