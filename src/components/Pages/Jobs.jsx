import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import LatestJobCard from "./LatestJobCard";

function Jobs() {
  const { allJobs } = useSelector((state) => state.job);
  const { user } = useSelector((store) => store.auth);

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
          <div className="grid grid-cols-3 mb-10 py-10 gap-2">
            {user ? (
              allJobs.length > 0 ? (
                allJobs
                  .slice(0, 6)
                  .map((job) => <LatestJobCard job={job} key={job._id} />)
              ) : (
                <p className="col-span-3 text-center text-xl">No jobs available at the moment.</p>
              )
            ) : (
              <div className="col-span-3">
                <div className="container px-5 py-36 mx-auto mb-5">
                  <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-28">
                      <div className="w-full">
                        <div className="relative border rounded-md bg-white shadow-md space-y-6 py-12 px-9">
                          <p className="text-center text-xl">
                            &quot;Greetings&quot;
                          </p>
                          <p className="text-center text-xl">
                            You&apos;re almost there! Take a moment to explore
                            exciting new job opportunities tailored just for
                            you. Simply click the button below to browse and
                            apply for the latest roles that could be the perfect
                            fit for your next career move.
                          </p>
                          <div className="text-center">
                            <Link to="/signup">
                              <Button>Create Account</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;