import { useState, useEffect } from "react";
import { Dot, LogOut, User } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const user = false;

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
          <h1 className="text-xl font-semibold">
            Job<span className="px-1">Portal</span>
          </h1>
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
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">Jobs</li>
                  <li className="cursor-pointer">Browse</li>
                </ul>
              </div>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="secondary"
                      className=" text-muted-foreground"
                    >
                      <User className="mr-1 h-4 w-4" /> Muhammad Wasif
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 rounded-2xl mt-4">
                    <div className="flex-col text-center justify-center flex gap-4">
                      <div className="relative flex justify-center">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                        </Avatar>
                      </div>

                      <div>
                        <h1 className="text-xl">Hi, Muhammad Wasif</h1>
                        <p className="text-muted-foreground">
                          Full Stack Developer
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="secondary"
                          className="w-full text-muted-foreground"
                        >
                          <User className="mr-1 h-4 w-4" /> Profile
                        </Button>
                        <Button
                          variant="secondary"
                          className="w-full text-muted-foreground"
                        >
                          <LogOut className="mr-1 h-4 w-4" /> Sign out
                        </Button>
                      </div>
                      <div>
                        <ul className="flex justify-center items-center text-muted-foreground text-xs">
                          <li className="cursor-pointer">Privacy Policy</li>
                          <li>
                            {" "}
                            <Dot />
                          </li>
                          <li className="cursor-pointer">Terms of service</li>
                        </ul>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
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
