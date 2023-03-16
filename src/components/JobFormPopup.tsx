import { FC, MutableRefObject, useRef, useState } from "react";
import jobsApi from "../api/PostJob";
import Button from "./utils/Button";
import Header from "./utils/Header";
import RadioInput from "./utils/RadioInput";
import TextField from "./utils/TextField";
import ModalContainer from "./containers/ModalContainer";
import ModalBackdrop from "./containers/ModalBackdrop";
import FormHeader from "./containers/FormHeader";
import FormFooter from "./containers/FormFooter";
import StepCount from "./utils/StepCount";
import TwoColumns from "./containers/TwoColumns";
import StepContainer from "./containers/StepContainer";
import FormManager from "./utils/FormManager";
import Error from "./utils/Error";

type JobFormPopupProps = {
  visible: boolean;
  onClose: () => void;
};

const JobFormPopup: FC<JobFormPopupProps> = ({ visible, onClose }) => {
  // Hooks initialization
  const formRef: MutableRefObject<HTMLFormElement> = useRef(
    document.createElement("form")
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [showError, setShowError] = useState(false);

  // Helper functions
  const postJob = async (data: any) => {
    await jobsApi.post("/jobs", data);
  };

  const resetState = () => {
    setCurrentStep(1);
    setShowError(false);
    onClose();
  };

  // Event handlers
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    // Lol I forgot to wait for the promise to resolve
    postJob(data).then(resetState);
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
      handleFormSubmit(e as any);
    }
  };

  // Render
  if (!visible) return null; // don't render if modal is not open

  return (
    <ModalBackdrop onClose={onClose}>
      <ModalContainer>
        <FormManager onSubmit={handleFormSubmit} formRef={formRef}>
          <StepContainer currentStep={currentStep} forStep={1}>
            <FormHeader>
              <Header>Create a job</Header>
              <StepCount count={1} />
            </FormHeader>
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
            <TwoColumns>
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
            </TwoColumns>
            <FormFooter>
              <Error showError={showError}>
                Fill all fields marked required * to continue
              </Error>
              <Button
                onClick={handleStepSubmit}
                className="self-end float-right"
              >
                Next
              </Button>
            </FormFooter>
          </StepContainer>
          <StepContainer currentStep={currentStep} forStep={2}>
            <FormHeader>
              <Header>Create a job</Header>
              <StepCount count={2} />
            </FormHeader>
            <TwoColumns>
              <TextField
                label="Experience"
                name="experience-min"
                placeholder="Minimum"
                type="number"
              />
              <TextField
                name="experience-max"
                type="number"
                placeholder="Maximum"
              />
            </TwoColumns>
            <TwoColumns>
              <TextField
                label="Salary"
                name="salary-min"
                placeholder="Minimum"
                type="number"
              />
              <TextField
                name="salary-max"
                type="number"
                placeholder="Maximum"
              />
            </TwoColumns>
            <TextField
              label="Total employee"
              name="totalEmployee"
              type="number"
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
            <FormFooter>
              <Button onClick={handleStepSubmit} className="float-right">
                Save
              </Button>
            </FormFooter>
          </StepContainer>
        </FormManager>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default JobFormPopup;
