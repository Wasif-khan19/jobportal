import { Button } from "../ui/button";

function GiveReviw() {
  return (
    <div className="px-6 lg:px-8 bg-purple-100 items-center justify-center flex text-center">
      <div className="mx-w-7xl py-28 sm:py-12 lg:py-14">
        <p className=" font-semibold text-purple-500">HIT A REVIEW</p>
        <h1 className=" text-6xl font-semibold tracking-tight text-black sm:text-5xl">
          Please give a valuable review
        </h1>
        <div className="mt-10">
        <Button className="text-center">
          <a href="https://www.google.com">Give Review</a>
        </Button>
        </div>
        
      </div>
    </div>
  );
}

export default GiveReviw;
