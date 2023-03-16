import { FC, MutableRefObject, useRef, useState } from "react";
import Button from "./utils/Button";

type JobFormPopupProps = {
  visible: boolean;
};

const JobFormPopup: FC<JobFormPopupProps> = ({ visible }) => {
  const formRef: MutableRefObject<HTMLFormElement> = useRef(
    document.createElement("form")
  );
  const [currentStep, setCurrentStep] = useState(1);

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
    console.log("IS VALID? " + isValid);
    let formData = new FormData(formRef.current);
    console.log(formData);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur flex justify-center items-center">
      <div className="w-full max-w-xl p-8 bg-white border-gray-100 rounded">
        <form onSubmit={handleFormSubmit} ref={formRef}>
          {/* Step 1 - will be hidden when step 2 comes */}
          <div className={currentStep === 1 ? "" : "hidden"}>
            <h1>Form</h1>
            <div className="flex flex-col mb-6">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="border"
                required
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="border"
              />
            </div>
            <Button onClick={handleStepSubmit}>Next</Button>
          </div>
          {/* Step 2 - will be hidden when step 1 comes */}
          <div className={currentStep === 2 ? "" : "hidden"}>
            <h1>Form</h1>
            <div className="flex flex-col mb-6">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" className="border" />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="border"
              />
              <Button onClick={handleStepSubmit}>Save</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobFormPopup;
