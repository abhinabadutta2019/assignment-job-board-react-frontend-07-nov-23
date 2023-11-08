const Job = ({ job }) => {
  return (
    <div key={job._id}>
      <h4>{job.title}</h4>
      <p>Posted by email : {job.createdBy.email}</p>
      <p>Description:{job.description}</p>
      <p>Posted on : {job.createdAt}</p>
      <p>Total applicant:{job.appliedBy.length}</p>
    </div>
  );
};

export default Job;
