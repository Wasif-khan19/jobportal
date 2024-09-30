import { BriefcaseBusiness, CircleDollarSign, Dot } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { JOB_API_ENDPOINT } from "@/utils/api";
import axios from "axios";
import { setSingleJob } from "../redux/jobSlice";

const JobDescription = () => {
  const { user } = useSelector((store) => store.auth.user);
  const { singleJob } = useSelector((store) => store.job.singleJob);
  const isApplied =
    singleJob?.application?.some(
      (application) => application.applicantId === user?._id
    ) || false;

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyHandler = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/getJob/${jobId}`, {
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);
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
