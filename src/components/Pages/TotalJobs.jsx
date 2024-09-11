import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

function TotalJobs() {
  return (
    <div className="rounded-md border border-gray-200 bg-white shadow-xl p-4 mt-6  cursor-pointer space-y-4">
      <div className="flex justify-between">
        <div>
          <h1>2 days ago</h1>
        </div>
        <div>
          <Button variant='outline' className='rounded-full' size='icon'>
            <Bookmark/>
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="items-center justify-center flex">
          <Button className="" size="icon" variant="outline">
            <Avatar>
              <AvatarImage src="B.PNG" alt="Img" />
            </Avatar>
          </Button>
        </div>
        <div>
          <h1 className="font-semibold tracking-tight text-lg">Comapny Name</h1>
          <p className="text-sm font-light text-muted-foreground">Country</p>
        </div>
      </div>

      <div className="">
        <h1 className="font-semibold tracking-tight text-lg">Job Title</h1>
        <p className="text-md font-normal text-muted-foreground">
          lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>

      <div className="flex gap-4">
        <Badge variant="secondary" className="text-black-500">
          Full Time
        </Badge>
        <Badge variant="secondary" className="text-black-500">
          Remote
        </Badge>
        <Badge variant="secondary" className="text-black-500">
          90 LPA
        </Badge>
      </div>
      <div className="flex gap-2 justify-end items-end">
        <div>
          <Button variant="outline">Save</Button>
        </div>
        <div>
          <Button>Details</Button>
        </div>
      </div>
    </div>
  );
}

export default TotalJobs;
