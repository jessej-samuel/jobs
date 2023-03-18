import { useEffect, useState } from "react";
import CreateJobButton from "./components/CreateJobButton";
import JobFormPopup from "./components/JobFormPopup";
import JobList from "./components/JobList";
import jobsApi from "./api/PostJob";
import { Job } from "./components/views/Card";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [jobs, setJobs]: [Job[], any] = useState([]);

  const openForm = () => {
    setFormOpen(!formOpen);
  };

  // Fetch jobs from API
  useEffect(() => {
    let data: Job[] = [];
    jobsApi.get("/jobs").then((res) => {
      data = res.data;
      setJobs(data);
    });
  }, [formOpen]);

  return (
    <div className="w-full mx-auto p-8">
      <CreateJobButton onClick={openForm} />
      <JobFormPopup onClose={() => setFormOpen(false)} visible={formOpen} />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
