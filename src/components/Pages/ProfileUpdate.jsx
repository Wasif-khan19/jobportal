/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useSelector } from "react-redux";

const ProfileUpdate = ({ open, setOpen }) => {

  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phonenumber: user?.phonenumber,
    bio: user?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });
  
  return (
    <div>
      <Dialog open={open}>
        <DialogTrigger>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={() => setOpen(false)}
          className="sm:max-w-[425px]"
        >
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={input.fullname}
                name="name"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={input.email}
                name="email"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={input.phonenumber}
                name="phone"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone">Bio</Label>
              <Input
                id="bio"
                name="bio"
                value={input.bio}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone">Skills</Label>
              <Input
                id="skills"
                value={input.skills}
                name="skills"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone">Resume</Label>
              <Input
                id="file"
                name="file"
                value={input.file}
                type="file"
                accept="application/pdf"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            {loading ? (
              <Button variant="secondary" className="" disabled>
                Saving...
              </Button>
            ) : (
              <Button type="submit" className="">
                Save Changes
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileUpdate;
