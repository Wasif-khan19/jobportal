/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import LatestJobCard from "./LatestJobCard";

const randomjobs = [1, 2, 3, 4, 5, 6, 7, 8];

function Jobs() {
  return (
    <div className="relative isolate px-6 lg:px-8 ">
      <div className="mx-w-7xl py-28 sm:py-12 lg:py-14">
        <div className="">
          <p className="text-center font-medium text-muted-foreground">CAREERS</p>
          <h1 className="text-center text-6xl font-bold tracking-tight text-black sm:text-4xl">
            Latest Careers & Jobs Opportunities
          </h1>
          <div className="grid grid-cols-3 gap-10 my-5">
            {randomjobs.slice(0, 6).map((item, index) => (
              <LatestJobCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
