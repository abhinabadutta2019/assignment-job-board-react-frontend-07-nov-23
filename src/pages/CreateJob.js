import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const CreateJob = () => {
  //
  const { user, url } = useContext(AuthContext);
  //
  const formHandler = async (event) => {
    event.preventDefault();
    //
    const titleElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");
    //
    const title = titleElement.value;
    const description = descriptionElement.value;

    //
    try {
      const response = await fetch(`${url}/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      if (response.ok) {
        // Form submission successful
        window.alert("Task created successfully"); // Show a success alert
        // Clear the textarea
        titleElement.value = "";
        descriptionElement.value = "";
      } else if (response.status === 403) {
        alert("Job title already used");
      }
    } catch (error) {
      console.error(error);
      alert("Error applying for the job");
      //   if (error && error.code == 11000) {
      //     window.alert("Duplicate job title- use another title");
      //   } else {
      //     window.alert("An error occurred. Please try again.");
      //   }
    }
  };
  //
  return (
    <div>
      <h2>Create Job post</h2>
      <form onSubmit={formHandler}>
        {/* <form> */}
        <label>Title</label>
        <input id="title" type="text" required />
        <label>Description</label>
        <textarea id="description" type="text" required />
        <button type="submit">Submit here</button>
      </form>
    </div>
  );
};

export default CreateJob;
