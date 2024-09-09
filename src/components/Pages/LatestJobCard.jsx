import { Badge } from "../ui/badge"

function LatestJobCard() {
  return (
  <div className=" rounded-md bg-white p-4 mt-6 shadow-md shadow-white cursor-pointer space-y-2">
    <div>
      <h1 className="font-bold text-lg">Comapny Name</h1>
      <p className="text-md font-normal text-muted-foreground">Country</p>
    </div>

    <div className="">
      <h1 className="font-bold text-lg">Job Title</h1>
      <p className="text-md font-normal text-muted-foreground">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>

    <div className="flex gap-4">
      <Badge>Full Time</Badge>
      <Badge>Remote</Badge>
      <Badge>90 LPA</Badge>
    </div>
  </div>
  )
}

export default LatestJobCard