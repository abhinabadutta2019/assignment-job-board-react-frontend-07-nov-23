import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
//
const Job = ({ job }) => {
  const { user, url } = useContext(AuthContext);
  //
  const applyHandler = async () => {
    try {
      const response = await fetch(`${url}/jobs/apply/${job._id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Successful application
        alert("Job application successful");
      } else if (response.status === 403) {
        alert("Permission denied");
      } else if (response.status === 400) {
        alert("Job already applied");
      } else {
        alert("Error applying for the job");
      }
    } catch (error) {
      alert("Error applying for the job");
    }
  };
  //
  return (
    <div key={job._id}>
      <h4>{job.title}</h4>
      <p>Posted by email : {job.createdBy.email}</p>
      <p>Description:{job.description}</p>
      <p>Posted on : {job.createdAt}</p>
      <p>Total applicant:{job.appliedBy.length}</p>
      {/*  */}
      <button onClick={applyHandler}>Apply</button>
    </div>
  );
};

export default Job;
