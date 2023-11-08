//
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
//

const ApplicantsDetails = () => {
  const { jobId } = useParams();
  const [applicants, setApplicants] = useState([]);
  //
  useEffect(() => {
    // Make a request to the 'allAppliedUserDetail' route with 'jobId' and set the result in 'applicants' state
    // You can use fetch or any other method you prefer
  }, [jobId]);
  //
  return (
    <>
      Applicants Details
      <div>{jobId}</div>
    </>
  );
};

export default ApplicantsDetails;
