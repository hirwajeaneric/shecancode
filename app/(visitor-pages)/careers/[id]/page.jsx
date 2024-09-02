"use client"

import { usePathname } from 'next/navigation';
import Jobs from '../../../../utils/jobsFakes';
import JobDescriptionPageBanner from '../../_components/sections/careers/JobDescriptionPageBanner';
import JobDescriptionContainter from '../../_components/sections/careers/JobDescriptionContainter';

const JobDetails = () => {
  const pathname = usePathname();
  const jobId = pathname.split('/')[2];

  const job = Jobs.find((job) => job._id === jobId);

  if (!job) {
    return (
      <div>
        <h1>Job not found</h1>
      </div>
    )
  }

  return (
    <>
      <JobDescriptionPageBanner job={job} />
      <JobDescriptionContainter job={job} />
    </>
  )
}

export default JobDetails;