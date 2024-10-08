import getAllJobs from "../hooks/getAllJobs";
import Hero from "../Pages/Hero";
import Jobs from "../Pages/Jobs";
import SliderCarousel from "../Pages/SliderCarousel";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Layout = () => {
  getAllJobs();
  return (
    <div>
      <Navbar />
      <Hero />
      <Jobs />
      <SliderCarousel />
      <Footer />
    </div>
  );
};

export default Layout;
