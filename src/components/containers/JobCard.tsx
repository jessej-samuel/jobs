import { FC } from "react";
import Button from "../utils/Button";
import Header from "../utils/Header";
import SubHeader from "../utils/SubHeader";
import TwoColumns from "./TwoColumns";
import NetflixLogo from "../assets/netflix.jfif";

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  industry: string;
  remoteType: string;
  "experience-min": string;
  "experience-max": string;
  "salary-min": string;
  "salary-max": string;
  totalEmployee: string;
  applyType: "quick" | "external";
};

const JobCard: FC<{ job: Job }> = ({ job }) => {
  return (
    <div
      className="w-[830px] h-80 px-6 py-4 flex flex-row gap-2 bg-card border border-border rounded-[10px] m-0"
      key={job.id}
    >
      <div>
        <img
          className="aspect-square w-12 h-12 rounded-[5px]"
          src={NetflixLogo} // STatic - will not change
          alt="company logo"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <Header>{job.title}</Header>
          <SubHeader>{`${job.company} - ${job.industry}`}</SubHeader>
          <SubHeader>{`${job.location} (${job.remoteType})`}</SubHeader>
        </div>
        <div className="flex flex-col gap-2">
          <SubHeader>{"Part-Time (9.00 am - 5.00 pm IST)"}</SubHeader>
          <SubHeader>
            {job["experience-min"] || job["experience-max"]
              ? `Experience: (${job["experience-min"]} - ${job["experience-max"]} years)`
              : ""}
          </SubHeader>
          <SubHeader>
            {job["salary-min"] || job["salary-max"]
              ? `INR ($) ${job["salary-min"]} - ${job["salary-max"]} / Month`
              : ``}
          </SubHeader>
          <SubHeader>
            {job.totalEmployee ? `${job.totalEmployee} employees` : ""}
          </SubHeader>
        </div>
        <div>
          <TwoColumns>
            {job.applyType === "external" ? (
              <Button onClick={() => {}} filled={false}>
                External Apply
              </Button>
            ) : (
              <Button onClick={() => {}}>Apply Now</Button>
            )}
          </TwoColumns>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
