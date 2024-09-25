import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ProfilePopover from "./ProfilePopover";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { user } = useSelector((store) => store.auth);

  // Listen to scroll and update the isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-white ${
        isScrolled ? "backdrop-blur-lg bg-opacity-70" : ""
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto h-14 bg-white">
        {/* left side */}
        <div className="">
          <Link to="/">
            <h1 className="text-xl font-semibold">
              Job<span className="px-1">Portal</span>
            </h1>
          </Link>
        </div>

        {/* right side */}
        <div className="flex gap-8 items-center">
          {!user ? (
            <div className="space-x-2">
              <Link to="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-10 items-center">
              <div>
                <ul className="flex gap-4 text-md text-muted-foreground font-semibold">
                  <Link to="/">
                    <li className="cursor-pointer ">Home</li>
                  </Link>
                  <Link to="/jobs">
                    <li className="cursor-pointer">Jobs</li>
                  </Link>
                  <Link to="/browse">
                    <li className="cursor-pointer">Browse</li>
                  </Link>
                </ul>
              </div>
              <div>
                <ProfilePopover />
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
