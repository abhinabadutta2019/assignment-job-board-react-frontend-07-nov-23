import React, { useEffect, useContext } from "react";
import Job from "../components/Job";
import { AuthContext } from "../context/AuthContext";
const YourCreatedJobs = () => {
  //
  const { yourCreatedJobs, fetchYourCreatedJobs } = useContext(AuthContext);
  //
  useEffect(() => {
    fetchYourCreatedJobs();
  }, []);
  //
  return (
    <>
      Your Created Jobs
      <ul>
        {yourCreatedJobs.length > 0 ? (
          yourCreatedJobs.map((job) => <Job key={job._id} job={job} />)
        ) : (
          <p>No jobs available</p>
        )}
      </ul>
    </>
  );
};

export default YourCreatedJobs;
