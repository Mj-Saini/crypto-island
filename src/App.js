import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Statitics from "./components/Statitics";
import FeedBack from "./components/FeedBack";
import HowWork from "./components/HowWork";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Pumps from "./components/Pumps";
import Try from "./components/Try";
import Loader from "./components/Loader";
import BackTop from "./components/BackTop";

function App() {
  return (
    <div className="overflow-hidden">
      <Loader />
      <BackTop />
      <Hero />
      <Statitics />
      <Pumps />
      <FeedBack />
      <HowWork />
      <AboutUs />
      <Faq />
      <Footer />
      {/* <Try /> */}
    </div>
  );
}

export default App;
