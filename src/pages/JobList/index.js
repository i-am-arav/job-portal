import React from 'react'
import JobCard from './JobCard';

const jobs = [{
    jobTitle: "UI UX Designer",
    company: "Google",
    industry: "Information Technology",
    location: "Chennai",
    remoteType: "Remote",
    experienceMin: 2,
    experienceMax: 5,
    salaryMin: 30000,
    salaryMax: 45000,
    totalEmployee: 10,
    applyType: "External Apply",
  }];

const JobList = () => {
  return (
    <div>
        {jobs.map((job) => <JobCard job={job}/>)}
    </div>
  )
}

export default JobList