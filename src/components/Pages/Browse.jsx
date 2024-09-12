/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import Navbar from "../shared/Navbar"
import TotalJobs from "./TotalJobs"

const randomJobs = [1,2,3,4,5,6,7]
function Browse() {
  return (
    <div>
        <Navbar/>
        <div className="my-10 max-w-7xl mx-auto">
            <h1 className="font-bold text-2xl">All Jobs ({randomJobs.length})</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    randomJobs.map((item, index) => {
                        return (
                            <TotalJobs/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Browse
