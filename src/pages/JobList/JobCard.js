import React from "react";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import cn from 'classnames'
const JobCard = ({margin, marginTop, marginBottom, marginLeft, marginRight,onEditClick, onDeleteClick, job}) => {
    const cardClassName = "w-[830px] h-[320px] py-4 px-6 shadow-md flex justify-between border border-borderGray border-1 "
    const allMappingClassName = {
        [`m-${margin}`]: !!margin,
        [`mt-${marginTop}`]: !!marginTop,
        [`mb-${marginBottom}`]: !!marginBottom,
        [`ml-${marginLeft}`]: !!marginLeft,
        [`mr-${marginRight}`]: !!marginRight
    }

    const {jobTitle,company, location, experienceMin,experienceMax, salaryMax, salaryMin,totalEmployee, applyType} = job || {};
    const employeeCountMapping = (count) => {
      switch(count) {
        case count > 10 && count < 50:
          return '11-50 Employees';
        case count > 50 && count < 200:
          return '51-200 Employees';
        case count > 200:
          return '201-500 Employees';
        case count > 500:
          return 'Over 1000 Employees';
        default:
          return '1-10 Employees';
      }
    }

  return (
    <div className={cn(cardClassName, allMappingClassName)}>
      <div className="flex">
      <img
        className="w-12 h-12 shadow rounded-lg " 
        src="https://about.netflix.com/images/meta/netflix-symbol-black.png"
        alt="Company Logo"
      />
      <div className="flex flex-col ml-2">
        <Typography variant="h2">{jobTitle}</Typography>
        <Typography>{company}</Typography>
        <Typography textColor="gray-500">
          {location}
        </Typography>
        <Typography marginTop={6}>
          Full-Time (9.00 am - 5.00 pm IST)
        </Typography>
        {experienceMin && experienceMax && (<Typography marginTop={2}>Experience ({experienceMin} - {experienceMax} years)</Typography>)}
        {salaryMin && salaryMax && <Typography marginTop={2}>INR (₹) {salaryMin} - {salaryMax} / Month</Typography>}
        {totalEmployee && <Typography marginTop={2}>{employeeCountMapping(totalEmployee)}</Typography>}
        <div className="mt-6 flex items-center justify-start">
          {(!applyType || applyType === 'Apply Now') && <Button className="mr-6"> Apply Now </Button>}
          {(!applyType || applyType === 'External Apply') &&<Button variant="secondary"> External Apply </Button>}
        </div>
      </div>
      </div>
      <div className='space-x-2'>
        
        <Button onClick={() => onEditClick()} >Edit</Button>
        <Button onClick={() => onDeleteClick()}>Delete</Button>
      </div>
    </div>
  );
};

export default JobCard;
