import { FC } from "react";
import JobCard, { Job } from "./containers/JobCard";
import Header from "./utils/Header";

type JobListProps = {
  jobs: Job[];
};

const JobList: FC<JobListProps> = ({ jobs }) => {
  return (
    <section className="mt-8">
      <Header className="mb-4">Available jobs</Header>
      <div className="flex gap-6 flex-wrap z-0">
        {jobs.map((job) => {
          return <JobCard job={job} />;
        })}
      </div>
    </section>
  );
};

export default JobList;
