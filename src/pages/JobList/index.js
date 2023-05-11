import React from 'react'
import JobCard from './JobCard';
import CreateJobModal from '../CreateJob/CreateJobModal'
import { deleteJob, getJobs } from '../../api/jobApi';
  

const JobList = () => {
  const [openEditJobModal,setEditJobModal] = React.useState(false);
  const [jobs,setJobs] = React.useState([]);
  const [loading,setLoading] = React.useState(false);
  const [editJobData,setEditJobData] = React.useState({});

  const fetchJobs = async () => {
    try {
      setLoading(true)
      const result = await getJobs()
      setJobs(result)
      setLoading(false)
    }
    catch(e) {
      //Show toast for error
      setLoading(false);
      console.error(e)
    }
  }

  React.useEffect(() => {
    fetchJobs();
  },[]);



  const handleEditClick = (job) => {
        setEditJobData(job)
        setEditJobModal(true)
  }
  const handleDeleteClick = async (id) => {
    try {
      const response = await deleteJob(id);
    }
    catch(e) {
      console.error(e)
    }
      
  }
  return (
    loading ? (<div>Loading...</div>) : 
    <div className='ml-4 grid grid-cols-1 space-y-4 w-screen'>
        {jobs.length > 0 ? jobs.map((job,idx) => <JobCard key={job._id || idx} job={job} onEditClick={() => handleEditClick(job)} onDeleteClick={() => handleDeleteClick(job._id)} />) : (<div>No data found</div>)}
        {openEditJobModal && <CreateJobModal jobData={editJobData}  action={"Edit"} isOpen={openEditJobModal} enableModal={setEditJobModal}  />}
    </div>
  )
}

export default JobList