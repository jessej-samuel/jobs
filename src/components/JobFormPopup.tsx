import { FC, MutableRefObject, useRef, useState } from "react";
import jobsApi from "../api/PostJob";
import Button from "./views/utils/Button";
import RadioInput from "./views/Form/RadioInput";
import TextField from "./views/Form/TextField";
import ModalContainer from "./views/Modal/ModalContainer";
import ModalBackdrop from "./views/Modal/ModalBackdrop";
import FormHeader from "./views/Form/FormHeader";
import FormFooter from "./views/Form/FormFooter";
import StepCount from "./views/utils/StepCount";
import TwoColumns from "./views/utils/TwoColumns";
import StepContainer from "./views/utils/StepContainer";
import FormManager from "./views/Form/FormManager";
import Error from "./views/Form/Error";
import Text from "./views/utils/Text";

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
  const [disabled, setDisabled] = useState(false);

  // Helper functions
  const postJob = async (data: any) => {
    await jobsApi.post("/jobs", data);
  };

  const resetState = () => {
    setCurrentStep(1);
    setShowError(false);
    setDisabled(false);
    onClose();
  };

  // Event handlers
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
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
              <Text weight="normal" size="xl" component="h2">
                Create a job
              </Text>
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
              placeholder="ex. Information Technology"
              required
            />
            <TwoColumns>
              <TextField
                label="Location"
                name="location"
                placeholder="ex. Chennai"
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
              <Text weight="normal" size="xl" component="h2">
                Create a job
              </Text>
              <StepCount count={2} />
            </FormHeader>
            <TwoColumns>
              <TextField
                label="Experience"
                name="experience-min"
                placeholder="Minimum"
                type="text"
              />
              <TextField
                name="experience-max"
                type="text"
                placeholder="Maximum"
              />
            </TwoColumns>
            <TwoColumns>
              <TextField
                label="Salary"
                name="salary-min"
                placeholder="Minimum"
                type="text"
              />
              <TextField name="salary-max" type="text" placeholder="Maximum" />
            </TwoColumns>
            <TextField
              label="Total employee"
              name="totalEmployee"
              type="text"
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
                  label: "External apply",
                },
              ]}
            />
            <FormFooter>
              <Button
                disabled={disabled}
                onClick={handleStepSubmit}
                className="float-right"
              >
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
