import React, { useEffect, useContext } from "react";
// import { Post } from "../components/Post";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  //
  const { user, jobs, fetchJobs } = useContext(AuthContext);

  console.log(user, "use from Home ");
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
          jobs.map((job) => <p>{job.title}</p>)
        ) : (
          <p>No jobs available</p>
        )}
      </ul>
    </>
  );
};

export default Home;
