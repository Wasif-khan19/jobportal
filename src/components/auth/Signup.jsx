import axios from "axios";
import { ChevronLeft, Upload } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setLoading } from "@/components/redux/authSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { USER_API_ENDPOINT } from "@/utils/api";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.Loading);

  const [input, setInput] = useState({
    email: "",
    fullname: "",
    phoneNumber: "",
    password: "",
    role: "student",
    file: null,
  });

  const changeHandler = (e) => {
    const { name, value, type, files } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(input).forEach(([key, value]) => {
      if (key !== "file" || value) {
        formData.append(key, value);
      }
    });

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
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
    <div className="min-h-screen flex flex-col">
      <div className="py-5 px-10">
        <Link to="/">
          <Button variant="ghost" className="flex items-center">
            <ChevronLeft className="mr-1 h-4 w-4" /> Back
          </Button>
        </Link>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md space-y-3 px-4 sm:px-0">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Welcome to JobPortal</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Sign up for an account
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-3">
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  id="fullname"
                  name="fullname"
                  type="text"
                  required
                  placeholder="Jhony Sins"
                  value={input.fullname}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  placeholder="+1(420)-6969-6969"
                  value={input.phoneNumber}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jhony@onlyfans.com"
                  value={input.email}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={input.password}
                  onChange={changeHandler}
                />
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <Label>Role</Label>
                  <RadioGroup
                    name="role"
                    className="flex space-x-3 mt-2"
                    value={input.role}
                    onValueChange={(value) =>
                      changeHandler({ target: { name: "role", value } })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="student" id="student" />
                      <Label htmlFor="student">Job Seeker</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="recruiter" id="recruiter" />
                      <Label htmlFor="recruiter">Recruiter</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <label
                    htmlFor="file"
                    className="cursor-pointer py-2 px-3 border border-input rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <Upload className="h-4 w-4 mr-2 inline-block" />
                    {input.file ? input.file.name : "Upload Picture"}
                  </label>
                  <Input
                    id="file"
                    name="file"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={changeHandler}
                  />
                </div>
              </div>
              {input.file && (
              <></>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing up..." : "Sign up"}
            </Button>
          </form>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
