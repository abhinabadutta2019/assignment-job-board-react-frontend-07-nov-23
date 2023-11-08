import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
//
const Job = ({ job }) => {
  const { user, url, fetchJobs } = useContext(AuthContext);
  const navigate = useNavigate(); // Use useNavigate

  //
  const viewApplicants = () => {
    const jobId = job._id;
    navigate(`/applicant-details/${jobId}`);
  };
  //

  //
  const fetchApiOfApply = async () => {
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
  const applyHandler = async () => {
    await fetchApiOfApply();
    //
    await fetchJobs();
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
      {/* <button onClick={applyHandler}>Apply</button> */}
      {user.userType === "applicant" && ( // Conditionally render the Apply button
        <button onClick={applyHandler}>Apply</button>
      )}
      {/* if the job has applicant only show then */}
      {user.userType === "jobcreator" && job.appliedBy.length > 0 && (
        <button onClick={viewApplicants}>View Apllicants</button>
      )}
    </div>
  );
};

export default Job;
