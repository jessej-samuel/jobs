import { FC } from "react";
import Button from "../utils/Button";
import Header from "../utils/Header";
import SubHeader from "../utils/SubHeader";
import TwoColumns from "../utils/TwoColumns";
import NetflixLogo from "../../../assets/netflix.jfif";
import CardHeader from "./Header";
import CardFooter from "./Footer";
import CardContent from "./Content";

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
      className="w-[830px] min-h-[20rem] px-6 py-4 flex flex-row gap-2 bg-card border border-border rounded-[10px] m-0"
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
        <CardHeader>
          <Header>{job.title}</Header>
          <SubHeader>{`${job.company} - ${job.industry}`}</SubHeader>
          <SubHeader className="text-[#646464]">{`${job.location} (${job.remoteType})`}</SubHeader>
        </CardHeader>
        <CardContent>
          <SubHeader>{"Part-Time (9.00 am - 5.00 pm IST)"}</SubHeader>
          <SubHeader>
            {job["experience-min"] || job["experience-max"]
              ? `Experience: (${job["experience-min"]} - ${job["experience-max"]} years)`
              : ""}
          </SubHeader>
          <SubHeader>
            {job["salary-min"] || job["salary-max"]
              ? `INR (₹) ${job["salary-min"]} - ${job["salary-max"]} / Month`
              : ``}
          </SubHeader>
          <SubHeader>
            {job.totalEmployee ? `${job.totalEmployee} employees` : ""}
          </SubHeader>
        </CardContent>
        <CardFooter>
          <TwoColumns>
            {job.applyType === "external" ? (
              <Button onClick={() => {}} className="min-w-" filled={false}>
                External Apply
              </Button>
            ) : (
              <Button onClick={() => {}}>Apply Now</Button>
            )}
          </TwoColumns>
        </CardFooter>
      </div>
    </div>
  );
};

export default JobCard;
