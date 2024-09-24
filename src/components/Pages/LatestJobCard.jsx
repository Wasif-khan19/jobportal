/* eslint-disable react/prop-types */
import { Badge } from "../ui/badge";

function LatestJobCard({job}) {
  return (
    <div className=" bg-white rounded-md border border-gray-200 shadow-xl p-4 mt-6  cursor-pointer space-y-2">
      <div>
        <h1 className="font-semibold tracking-tight text-lg">{job?.company}</h1>
        <p className="text-md font-light text-muted-foreground">{job.location}</p>
      </div>

      <div className="">
        <h1 className="font-semibold tracking-tight text-lg">{job?.title}</h1>
        <p className="text-md font-normal text-muted-foreground">
          {job?.description}
        </p>
      </div>

      <div className="flex gap-4">
        <Badge variant="secondary" className="text-gray-500">
          {job?.jobType}
        </Badge>
        <Badge variant="secondary" className="text-gray-500">
          {job?.position} Position
        </Badge>
        <Badge variant="secondary" className="text-gray-500">
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
}

export default LatestJobCard;
