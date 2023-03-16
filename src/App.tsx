import { useState } from "react";
import CreateJobButton from "./components/CreateJobButton";
import JobFormPopup from "./components/JobFormPopup";
import JobList from "./components/JobList";

function App() {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <>
      <CreateJobButton onClick={openForm} />
      <JobFormPopup visible={formOpen} />
      <JobList />
    </>
  );
}

export default App;
