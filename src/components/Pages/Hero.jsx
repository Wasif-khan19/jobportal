import { PlaceholdersAndVanishInputDemo } from "../ui/Search";

const Hero = () => {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      ></div>
      <div className="mx-auto max-w-2xl py-32 sm:py-24 lg:py-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative flex rounded-full px-10 py-1 text-sm items-center leading-6 font-semibold bg-rose-100 text-rose-500">
            No.1 Job Portal In Our Universe
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Search, Apply & Get Your Dream Job
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="flex mt-8 items-center justify-center">
            <PlaceholdersAndVanishInputDemo />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div />
      </div>
    </div>
  );
};

export default Hero;
