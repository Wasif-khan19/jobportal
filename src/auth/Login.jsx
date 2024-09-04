import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  return(
    <div>
    <div className="py-10 px-10">
      <Link to="/">
        <Button variant="ghost">
          <ChevronLeft className="mr-1 h-4 w-4" /> Back
        </Button>
      </Link>
    </div>
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
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <RadioGroup defaultValue="comfortable">
                <div className="flex gap-3">
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="job seeker" id="r1" />
                    <Label htmlFor="r1">Job Seeker</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="recruiter" id="r2" />
                    <Label htmlFor="r2">Recruiter</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full">
              Log in
            </Button>
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
  </div>
  )
}

export default Login;
