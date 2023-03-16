import { FC, MutableRefObject, useRef, useState } from "react";
import Button from "./utils/Button";
import TextField from "./utils/TextField";
import Header from "./utils/Header";
import RadioInput from "./utils/RadioInput";

type JobFormPopupProps = {
  visible: boolean;
  onClose: () => void;
};

const JobFormPopup: FC<JobFormPopupProps> = ({ visible, onClose }) => {
  const formRef: MutableRefObject<HTMLFormElement> = useRef(
    document.createElement("form")
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [showError, setShowError] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const handleStepSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const required: NodeListOf<HTMLInputElement> =
      formRef.current.querySelectorAll("[required]");
    let isValid = true;
    required.forEach((input) => {
      if (!input.value) {
        isValid = false;
      }
    });

    if (!isValid) {
      setShowError(true);
      return;
    }

    if (currentStep === 1) setCurrentStep(2);
    else {
      let formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData);
      console.log(data);
      setCurrentStep(1);
      setShowError(false);
      onClose();
    }
  };

  if (!visible) return null; // don't render if modal is not open

  return (
    <div
      className="fixed inset-0 bg-white/50 backdrop-blur flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl p-8 bg-card border border-border rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleFormSubmit} ref={formRef}>
          {/* Step 1 - will be hidden when step 2 comes */}
          <div
            className={`flex flex-col gap-6 ${
              currentStep === 1 ? "" : "hidden"
            }`}
          >
            <div className="flex flex-row justify-between items-center">
              <Header>Create a job</Header>
              <div className="font-medium text-base">Step 1</div>
            </div>
            <TextField
              label="Job title"
              name="title"
              placeholder="ex. UI UX Designer"
              required
            />
            <TextField
              label="Company name"
              name="company"
              placeholder="ex. Google"
              required
            />
            <TextField
              label="Industry"
              name="industry"
              placeholder="ex. Technology"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <TextField
                label="Location"
                name="location"
                placeholder="ex. New York"
              />
              <TextField
                label="Remote type"
                name="remoteType"
                placeholder="ex. In-office"
              />
            </div>
            <div className="mt-24">
              <p
                className="w-fit text-error relative top-8"
                hidden={!showError}
              >
                Fill all fields marked required * to continue
              </p>
              <Button
                onClick={handleStepSubmit}
                className="self-end float-right"
              >
                Next
              </Button>
            </div>
          </div>
          {/* Step 2 - will be hidden when step 1 comes */}
          <div
            className={`flex flex-col gap-6 ${
              currentStep === 2 ? "" : "hidden"
            }`}
          >
            <div className="flex flex-row justify-between items-center">
              <Header>Create a job</Header>
              <div className="font-medium text-base">Step 2</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <TextField
                label="Experience"
                name="experience-min"
                placeholder="Minimum"
              />
              <TextField name="experience-max" placeholder="Maximum" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <TextField
                label="Salary"
                name="salary-min"
                placeholder="Minimum"
              />
              <TextField name="salary-max" placeholder="Maximum" />
            </div>
            <TextField
              label="Total employee"
              name="totalEmployee"
              placeholder="ex. 100"
            />
            <RadioInput
              title="Apply type"
              name="applyType"
              items={[
                {
                  value: "quick",
                  label: "Quick apply",
                },
                {
                  value: "external",
                  label: "External link",
                },
              ]}
            />
            <div className="mt-24">
              <Button onClick={handleStepSubmit} className="float-right">
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobFormPopup;
