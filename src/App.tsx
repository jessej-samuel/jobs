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
    <div className="w-full mx-auto p-8">
      <CreateJobButton onClick={openForm} />
      <JobFormPopup onClose={() => setFormOpen(false)} visible={formOpen} />
      <JobList dependency={formOpen} />
    </div>
  );
}

export default App;
