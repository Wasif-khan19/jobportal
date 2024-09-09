import Hero from "../Pages/Hero";
import Jobs from "../Pages/Jobs";
import Reviews from "../Pages/Reviews";
import Navbar from "../shared/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Jobs/>
      <Reviews/>
    </div>
  );
};

export default Layout;
