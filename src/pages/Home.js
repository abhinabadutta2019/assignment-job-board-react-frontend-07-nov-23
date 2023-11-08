import React, { useEffect, useContext } from "react";
import Job from "../components/Job";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  //
  const { jobs, fetchJobs } = useContext(AuthContext);

  //   console.log(user, "use from Home ");
  //
  useEffect(() => {
    fetchJobs();
  }, []);
  //
  //
  return (
    <>
      <h2>Home</h2>
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job) => <Job key={job._id} job={job} />)
        ) : (
          <p>No jobs available</p>
        )}
      </ul>
    </>
  );
};

export default Home;
