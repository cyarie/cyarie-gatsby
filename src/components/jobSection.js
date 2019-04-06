import React from 'react';
import uuid from 'uuid/v4'
import JobHeader from './jobHeader';
import JobDescription from './jobDescription';

const JobSection = (props) => {
  const jobs = props.jobs.map((job) => {
    return (
      <div key={uuid()}>
        <JobHeader key={job.header.employer} {...job.header}/>
        <JobDescription key={uuid()} {...job} />
      </div>
    )
  });

  return (
    <div>
      {jobs}
    </div>
  )
};

export default JobSection;