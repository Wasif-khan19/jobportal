/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect } from "react";
import { setAllJobs } from "../redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/api";
import { useDispatch } from "react-redux";

const getAllJobs = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/getJobs`, {
          headers:{
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
          console.log(res.data.jobs);
          
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  });
  return <div>getAllJobs</div>;
};

export default getAllJobs;
