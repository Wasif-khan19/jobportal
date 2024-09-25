import { Edit, Mail, Smartphone } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";
import { Label } from "../ui/label";
import AppliedJobs from "./AppliedJobs";
import ProfileUpdate from "./ProfileUpdate";

function Profile() {
  const IsResume = true
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-14">
        <Card className="border max-w-5xl w-full">
          <CardHeader>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="items-center justify-center flex">
                <Avatar className="h-20 w-20 border">
                <AvatarImage src={user?.profile?.profilePhoto} alt="P" />
              </Avatar>
                </div>
                <div>
                  <h1 className="font-semibold tracking-tight text-lg">
                    {user?.fullname}
                  </h1>
                  <p className="text-sm font-light text-muted-foreground">
                    {user?.profile?.bio}
                  </p>
                </div>
              </div>
              <div>
                <Button
                  onClick={() => setOpen(true)}
                  variant="outline"
                  className="rounded-full h-12 w-12"
                  size="icon"
                >
                  <Edit className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <hr className="" />
            <div className="py-2">
              <h1 className=" font-semibold text-base">Personal Information</h1>
              <div className="justify-between mt-3 grid space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="text-muted-foreground text-sm" />
                    <span className="text-muted-foreground">{user?.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="text-muted-foreground text-sm" />
                    <span className="text-muted-foreground">
                      {user?.phoneNumber}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="" />
            <div className="py-2">
              <h1 className=" font-semibold text-base">Skills</h1>
              <div className="justify-between mt-3 grid space-y-6">
                <div className="space-y-2">
                  <div className="space-x-2">
                    {user?.profile?.skills.length !== 0 ? (
                      user?.profile?.skills.map((item, index) => (
                        <Badge key={index}>{item}</Badge>
                      ))
                    ) : (
                      <span>NA</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <hr className="" />

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-md font-bold">Resume</Label>
              {IsResume ? (
                <a
                  target="blank"
                  href={user?.profile?.resume}
                  className="text-blue-500 w-full hover:underline cursor-pointer"
                >
                  {user?.profile?.resumeOriginalName}
                </a>
              ) : (
                <span>Na</span>
              )}
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* applied jobs all content component */}
      <div className="flex justify-center items-center mt-14">
        <Card className="border max-w-5xl w-full">
          <AppliedJobs />
        </Card>
      </div>
      <ProfileUpdate open={open} setOpen={setOpen} />
    </div>
  );
}

export default Profile;
