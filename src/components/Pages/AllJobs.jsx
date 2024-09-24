/* eslint-disable no-unused-vars */
import Navbar from "../shared/Navbar";
import FilterCard from "./FilterCard";
import TotalJobs from "./TotalJobs";

const allJobs = [1, 2, 3, 4];
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
              <div className="flex-1 h-auto pb-5 overflow-y-auto">
                <div  className="gap-4">
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
