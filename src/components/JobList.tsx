import { FC } from "react";
import JobCard, { Job } from "./containers/JobCard";

type JobListProps = {
  jobs: Job[];
};

const JobList: FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="flex gap-6 flex-wrap z-0">
      {jobs.map((job) => {
        return <JobCard job={job} />;
      })}
    </div>
  );
};

export default JobList;
