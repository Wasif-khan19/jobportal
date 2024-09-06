import { setLoading } from "@/components/redux/authSlice";
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

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.auth)

  const [input, setInput] = useState({
    email: "",
    fullname: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const fileHandler = (e) => {
  //   setInput({ ...input, file: e.target.files?.[0] });
  // }; we will use this in profile section

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
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
      <form onSubmit={onSubmitHandler}>
        <div className="w-full justify-center flex">
          <div className="flex items-center justify-center">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-2xl font-semibold">Welcome to JobPortal</h1>
                <p className="text-balance text-muted-foreground">
                  Sign up for an account
                </p>
              </div>
              <div className="grid gap-4">
                {/* Full Name */}
                <div className="grid gap-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input
                    id="fullname"
                    type="text"
                    placeholder="Jhony Sins"
                    required
                    name="fullname"
                    value={input.fullname}
                    onChange={changeEventHandler}
                  />
                </div>

                {/* Phone Number */}
                <div className="grid gap-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="text"
                    placeholder="+1(420)-6969-6969"
                    required
                    name="phoneNumber"
                    value={input.phoneNumber}
                    onChange={changeEventHandler}
                  />
                </div>

                {/* Email */}
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

                {/* Password */}
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

                {/* Role and Picture */}
                <div className="flex justify-between">
                  <RadioGroup defaultValue="student">
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
                          checked={input.role === "recruiter"}
                          onChange={changeEventHandler}
                          value="recruiter"
                          id="r2"
                          className="h-3 w-3"
                        />
                        <Label htmlFor="r2">Recruiter</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Submit Button */}
                {loading ? (
                  <Button variant="secondary" className="w-full" disabled>
                    Signing up...
                  </Button>
                ) : (
                  <Button type="submit" className="w-full">
                    Sign up
                  </Button>
                )}
              </div>

              {/* Login Link */}
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
