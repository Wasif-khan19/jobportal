import { setLoading, setUser } from "@/components/redux/authSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { USER_API_ENDPOINT } from "@/utils/api";
import axios from "axios";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Login() {
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSumitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
       
          
        },
        withCredentials: true,
      });
      if (res.data.success) {
        
        dispatch(setUser(res.data.user))
        navigate("/");
        toast.message(res.data.message);
      }
    } catch (error) {
      toast.message(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <div className="py-10 px-10">
        <Link to="/">
          <Button variant="ghost">
            <ChevronLeft className="mr-1 h-4 w-4" /> Back
          </Button>
        </Link>
      </div>
      <form onSubmit={onSumitHandler}>
        <div className="w-full justify-center flex">
          <div className="flex items-center justify-center">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-2xl font-semibold">Welcome Back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your account
                </p>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jhony@onlyfans.com"
                    required
                    name="email"
                    value={input.email}
                    onChange={changeEventHandler}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    name="password"
                    value={input.password}
                    onChange={changeEventHandler}
                  />
                </div>
                <div className="flex justify-between">
                  <RadioGroup defaultValue="comfortable">
                    <div className="flex gap-3">
                      <div className="flex items-center space-x-1">
                        <Input
                          type="radio"
                          name="role"
                          value="student"
                          checked={input.role === "student"}
                          onChange={changeEventHandler}
                          id="r1"
                          className="h-3 w-3"
                        />
                        <Label htmlFor="r1">Job Seeker</Label>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Input
                          type="radio"
                          name="role"
                          value="recruiter"
                          checked={input.role === "recruiter"}
                          onChange={changeEventHandler}
                          id="r1"
                          className="h-3 w-3"
                        />
                        <Label htmlFor="r2">Recruiter</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                {loading ? (
                  <Button variant="secondary" className="w-full" disabled>
                    Logging in...
                  </Button>
                ) : (
                  <Button type="submit" className="w-full">
                    Log in
                  </Button>
                )}
              </div>
              <div className=" text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
