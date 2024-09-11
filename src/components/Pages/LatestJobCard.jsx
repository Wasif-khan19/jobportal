import { Badge } from "../ui/badge";

function LatestJobCard() {
  return (
    <div className=" rounded-md border border-gray-200 shadow-xl  bg-white p-4 mt-6  cursor-pointer space-y-2">
      <div>
        <h1 className="font-semibold tracking-tight text-lg">Comapny Name</h1>
        <p className="text-md font-light text-muted-foreground">Country</p>
      </div>

      <div className="">
        <h1 className="font-semibold tracking-tight text-lg">Job Title</h1>
        <p className="text-md font-normal text-muted-foreground">
          lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>

      <div className="flex gap-4">
        <Badge variant="secondary" className="text-gray-500">
          Full Time
        </Badge>
        <Badge variant="secondary" className="text-gray-500">
          Remote
        </Badge>
        <Badge variant="secondary" className="text-gray-500">
          90 LPA
        </Badge>
      </div>
    </div>
  );
}

export default LatestJobCard;
