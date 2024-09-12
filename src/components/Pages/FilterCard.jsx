import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["New York", "Chicago", "San Francisco", "Los Angeles", "Seattle"],
  },
  {
    filterType: "Role",
    array: ["Frontend", "Backend", "Fullstack", "DevOps", "Data Science"],
  },
  {
    filterType: "Salary",
    array: ["10k-50k", "100k-200k", "200k-500k", "500k-1000k", "1000k+"],
  },
];
function FilterCard() {
  return (
    <div className="w-full p-3 rounded-md">
      <h1 className="font-bold">Filter Data</h1>
      <hr className="w-32 mt-2" />
      <RadioGroup className='space-y-2'>
        {filterData.map ((filter, index) => (
          <div key={index} className="">
            <h2 className="font-bold">{filter.filterType}</h2>
            
            <RadioGroup className="mt-1 text-muted-foreground">
              {filter.array.map((item, index) => (
                <div className="space-x-1 flex" key={index}>
                  <Input
                    className="h-3 w-3"
                    type="radio"
                    name={filter.filterType}
                    value={item}
                    id={item}
                  />
                  <Label htmlFor={item}>{item}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default FilterCard;
