//
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
//

const ApplicantsDetails = () => {
  const { jobId } = useParams();
  const [applicants, setApplicants] = useState([]);
  const { user, url } = useContext(AuthContext);
  //
  const fetchAppliedUsersDetails = async () => {
    try {
      const response = await fetch(`${url}/jobs/appliedUsers/${jobId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${user.token}` },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      //
      console.log(data, "from ApplicantsDetails");
      //
      setApplicants(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //
  useEffect(() => {
    fetchAppliedUsersDetails();
  }, [jobId]);
  //
  return (
    <div>
      <h2>Applicants Details</h2>
      {/*  */}
      <ul>
        {applicants.map((applicant) => (
          <li key={applicant.email}>
            <p>User Email : {applicant.email}</p>
            <p>user CV link : {applicant.cvUrl}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicantsDetails;
