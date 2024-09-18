import { BriefcaseBusiness, CircleDollarSign, Dot } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";

const JobDescription = () => {
  const isApplied = false;
  return (
    <div>
      <div className="flex justify-center items-center mt-14">
        <Card className="border max-w-5xl w-full">
          <CardHeader>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="items-center justify-center flex">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>CL</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h1 className="font-semibold tracking-tight text-lg">
                    Full Stack Developer
                  </h1>
                  <p className="text-sm font-light text-muted-foreground">
                    Google, Washington
                  </p>
                </div>
              </div>
              <div>
                <Button
                  disables={isApplied}
                  className={`${
                    isApplied
                      ? "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
                      : "bg-black"
                  }`}
                >
                  {isApplied ? "Already Applied" : "Apply Now"}
                </Button>
              </div>
            </div>
            <hr className="" />
            <div className="py-2">
              <div className="justify-between mt-3 grid space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <BriefcaseBusiness className="text-muted-foreground text-sm" />
                    <span className="flex text-muted-foreground">
                      4 Years Experience <Dot />
                      <Badge>10 Applicants</Badge>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CircleDollarSign className="text-muted-foreground text-sm" />
                    <span className="text-muted-foreground">12LPA</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="" />
            <div className="py-2">
              <h1 className=" font-semibold text-base">Description</h1>
              <div className="justify-between mt-3 grid space-y-6">
                <div className="space-y-1">
                  <div className="space-x-2">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci, saepe? Laudantium blanditiis vero quo dolor
                      doloremque voluptatem odio perferendis nihil. Pariatur
                      maiores non sit ex, dolorem iste voluptatum. In, quam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default JobDescription;
