import React from 'react'
import JobCard from './JobCard';
import CreateJobModal from '../CreateJob/CreateJobModal'

const jobs = [{
    id:1,
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
    applyType: "",
  },{
    id:2,
    jobTitle: "React Developer",
    company: "Microsoft",
    industry: "Information Technology",
    location: "Bangalore",
    remoteType: "Hybrid",
    experienceMin: 4,
    experienceMax: 6,
    salaryMin: 70000,
    salaryMax: 80000,
    totalEmployee: 502,
    applyType: "",
  },{id:3,
    jobTitle: "Full Stack Developer",
    company: "Amazon",
    industry: "Information Technology",
    location: "Hyderabad",
    remoteType: "Remote",
    experienceMin: 3,
    experienceMax: 5,
    salaryMin: 50000,
    salaryMax: 65000,
    totalEmployee: 1000,
    applyType: "External Apply",
  }];
  

const JobList = () => {
  const [openEditJobModal,setEditJobModal] = React.useState(false);
  const [editJobData,setEditJobData] = React.useState(jobs[0])

  const handleEditClick = (id) => {
    const found = jobs.find((j) => j.id === id);
      if(found) {
        setEditJobData(found)
        setEditJobModal(true)
      }
  }
  const handleDeleteClick = (id) => {
    //API
  }
  return (
    <div className='ml-4 grid grid-cols-1 space-y-4'>
        {jobs.map((job,idx) => <JobCard id={job.id || idx} job={job} onEditClick={() => handleEditClick(job.id)} onDeleteClick={() => handleDeleteClick(job.id)} />)}
        {openEditJobModal && <CreateJobModal jobData={editJobData}  action={"Edit"} isOpen={openEditJobModal} enableModal={setEditJobModal}  />}
    </div>
  )
}

export default JobList