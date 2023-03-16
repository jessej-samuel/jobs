import { useState } from "react";
import CreateJobButton from "./components/CreateJobButton";
import JobFormPopup from "./components/JobFormPopup";
import JobList from "./components/JobList";

function App() {
  const [formOpen, setFormOpen] = useState(true);

  const openForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div className="">
      <CreateJobButton onClick={openForm} />
      <JobFormPopup visible={formOpen} />
      <JobList />
    </div>
  );
}

export default App;
