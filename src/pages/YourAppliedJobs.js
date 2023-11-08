import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const YourAppliedJobs = () => {
  const { user, url, jobs, fetchJobs } = useContext(AuthContext);

  // Define a state variable to store the applied jobs data
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Fetch applied jobs data when the component mounts
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await fetch(`${url}/jobs/appliedJobs`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();

          console.log(data);
          setAppliedJobs(data);
        } else {
          // Handle errors if needed
        }
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      }
    };

    fetchAppliedJobs(); // Call the fetch function when the component mounts
  }, []);

  return (
    <>
      <h2>Your Applied Jobs</h2>
      <ul>
        {appliedJobs.map((job) => (
          <li key={job._id}>
            <h4>{job.title}</h4>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default YourAppliedJobs;
