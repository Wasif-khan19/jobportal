import Navbar from "../shared/Navbar";
import FilterCard from "./FilterCard";
import TotalJobs from "./TotalJobs";

const allJobs = [1, 2, 3, 4, 5, 6];
function AllJobs() {
  return(
    <div>
      <Navbar/>
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard/>
          </div>
          {
            allJobs.length <0 ? <span>Not Found</span>:(
              <div className="flex-1 h-[80vh] pb-5 overflow-y-auto">
                <div  className="grid grid-cols-3 gap-4">
                  {
                    allJobs.map((item,index)=>(
                      <div key={allJobs}>
                        <TotalJobs/>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default AllJobs;
