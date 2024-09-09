import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const reviews = [
  {
    Name: "John Doe",
    Review: "This job portal made my job search so much easier! The layout is clean and simple to use, and I was able to apply to multiple positions in no time. I found great opportunities that I hadn’t seen elsewhere. Definitely a go-to platform for job seekers!",
    Company: "Google",
    Role: "Software Engineer",
    SVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="inline-block w-5 h-5 text-muted-foreground mb-4"
          viewBox="0 0 975.036 975.036"
        >
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
      ),
  },
  {
    Name: "Peter Ustaad",
    Review: "This job portal made my job search so much easier! The layout is clean and simple to use, and I was able to apply to multiple positions in no time. I found great opportunities that I hadn’t seen elsewhere. Definitely a go-to platform for job seekers!",
    Company: "Amazon",
    Role: "UI Designer",
    SVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="inline-block w-5 h-5 text-muted-foreground mb-4"
          viewBox="0 0 975.036 975.036"
        >
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
      ),
  },
  {
    Name: "Sattar Mechanic",
    Review: "This job portal made my job search so much easier! The layout is clean and simple to use, and I was able to apply to multiple positions in no time. I found great opportunities that I hadn’t seen elsewhere. Definitely a go-to platform for job seekers!",
    Company: "Facebook",
    Role: "Data Stealer",
    SVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="inline-block w-5 h-5 text-muted-foreground mb-4"
          viewBox="0 0 975.036 975.036"
        >
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
      ),
  },
  {
    Name: "Alex Dancer",
    Review: "This job portal made my job search so much easier! The layout is clean and simple to use, and I was able to apply to multiple positions in no time. I found great opportunities that I hadn’t seen elsewhere. Definitely a go-to platform for job seekers!",
    Company: "OnlyFans",
    Role: "Content Creator",
    SVG: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="inline-block w-5 h-5 text-muted-foreground mb-4"
          viewBox="0 0 975.036 975.036"
        >
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
      ),
  },
];

function SliderCarousel() {
  return (
    <div className="relative isolate px-6 lg:px-8 justify-center items-center flex">
      <div className="mx-w-7xl py-28 sm:py-18 lg:py-18">
        <div className="">
          <p className="text-center font-semibold text-purple-500">TESTIMONALS HIGHLIGHTS</p>
          <h1 className="text-center text-6xl font-semibold tracking-tight text-black sm:text-5xl">
            What our users are saying
          </h1>
          <div className="max-w-3xl mt-10">
            <Carousel className="text-center">
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent>
                        <a >{review.SVG}</a>
                        <p className="mt-2 font-semibold">{review.Review}</p>
                        <p className="font-semibold mt-3 text-3xl text-gray-300">{review.Company}</p>
                        <h3 className="text-lg font-bold text-gray-700 mt-5">{review.Name}</h3>
                        <p className="italic">{review.Role}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
 
    </div>
    
  );
}

export default SliderCarousel;
