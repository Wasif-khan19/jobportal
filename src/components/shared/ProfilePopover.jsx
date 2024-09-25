import { Dot, LogOut, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setLogout } from "../redux/authSlice";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const ProfilePopover = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    toast.success("Logged out successfully");
    dispatch(setLogout());
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" className=" text-muted-foreground ">
            <User className="mr-1 h-4 w-4 " /> {user?.fullname}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-80 rounded-2xl mt-4">
          <div className="flex-col text-center justify-center flex gap-4">
            <div className=" flex justify-center">
              <Avatar className="h-20 w-20 border">
                <AvatarImage src={user?.profile?.profilePhoto} alt="P" />
              </Avatar>

              
            </div>

            <div>
              <h1 className="text-xl">Hi, {user?.fullname}</h1>
              <p className="text-muted-foreground">{user?.bio}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                className="w-full text-muted-foreground"
              >
                <Link className="flex items-center" to="/profile">
                  <User className="mr-1 h-4 w-4" /> Profile
                </Link>
              </Button>
              <Button
                onClick={handleLogout}
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
  );
};

export default ProfilePopover;
