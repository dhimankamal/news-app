import "../styles/globals.css";
import "../styles/css/bootstrap.css";
import "../styles/css/themewar-icons.css";
import "../styles/css/linea-weather-icons.css";
import "../styles/css/magro-icons.css";
import "../styles/css/lightcase.css";
import "../styles/css/slick.css";
import "../styles/css/owl.carousel.min.css";
import "../styles/css/owl.theme.default.min.css";
import "../styles/css/animate.css";
import "../styles/css/preset.css";
import "../styles/css/ignore_for_wp.css";
import "../styles/css/theme.css";
import "../styles/css/responsive.css";
import type { AppProps } from "next/app";
import TopBar from "components/TopBar";
import Navbar from "components/Navbar";
import BottomBar from "components/BottomBar";
import Footer from "components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Header Top Bar */}
      <TopBar />
      {/* Header Top Bar */}
      {/* Main Header */}
      <Navbar />
      {/* Main Header */}
      {/* Header Bottom */}
      <BottomBar />
      {/* Header Bottom */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
