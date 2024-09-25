import { useSelector } from "react-redux";
import LatestJobCard from "./LatestJobCard";
import { Button } from "../ui/button";

function Jobs() {
  const { allJobs } = useSelector((state) => state.job);

  return (
    <div className="relative isolate px-6 lg:px-8">
      <div className="mx-w-7xl py-28 sm:py-12 lg:py-14">
        <div className="">
          <p className="text-center font-medium text-muted-foreground">
            CAREERS
          </p>
          <h1 className="text-center text-6xl font-bold tracking-tight text-black sm:text-4xl">
            Latest Careers & Jobs Opportunities
          </h1>
          <div className="">
            {allJobs.length <= 0 ? (
              <div>
                <div className="container px-5 py-12 mx-auto mb-10">
                  <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                      <div className="">
                        <div className="relative border rounded-md bg-white shadow-md space-y-4 py-2">
                          <p className="text-center text-xl">
                            Hello there!
                          </p>
                          <p className="text-center text-xl">
                            Take the next step in your career journey. Click
                            below to browse and apply for the latest jobs
                            tailored just for you.
                          </p>
                          <div className="text-center">
                            <Button>Create Account</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              allJobs
                ?.slice(0, 6)
                .map((job) => <LatestJobCard job={job} key={job._id} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
