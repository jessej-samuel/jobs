import { FC } from "react";
import JobCard, { Job } from "./views/Card";
import Text from "./views/utils/Text";

type JobListProps = {
  jobs: Job[];
};

const JobList: FC<JobListProps> = ({ jobs }) => {
  return (
    <section className="mt-8">
      <Text weight="normal" size="xl" className="mb-4">
        Available jobs
      </Text>
      <div className="flex gap-6 flex-wrap z-0">
        {jobs.map((job) => {
          return <JobCard job={job} />;
        })}
      </div>
    </section>
  );
};

export default JobList;
