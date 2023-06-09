import React, { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Typography from "../../components/Typography";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import PropTypes from "prop-types";
import { createJob, updateJob } from "../../api/jobApi";

const initJobPost = {
  jobTitle: "",
  company: "",
  industry: "",
  location: "",
  remoteType: "",
  experienceMin: "",
  experienceMax: "",
  salaryMin: "",
  salaryMax: "",
  totalEmployee: "",
  applyType: "",
};

const CreateJobModal = ({ action, jobData, isOpen, enableModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [jobPost, setJobPost] = useState(jobData);
  const [formErrors, setFormErrors] = useState({});
  //handle onChange For all the fields
  const onChangeField = (field, value) => {
    if (Object.keys(formErrors).length) {
      setFormErrors({});
    }
    setJobPost((prev) => ({ ...prev, [field]: value }));
  };
  //validates Step 1 form
  const validateStepOne = () => {
    const errors = {};
    const requiredFields = ["jobTitle", "company", "industry"];
    requiredFields.forEach((field) => {
      if (!jobPost[field]) {
        errors[field] = `${field} is Required`;
      }
    });

    setFormErrors(errors);
    return !Object.keys(errors).length;
  };

  //Validates Step 2 form
  const validateStepTwo = () => {
    const errors = {};
    if (jobPost.experienceMin > jobPost.experienceMax) {
      errors["experienceMin"] = "Should be less than Maximum";
      errors["experienceMax"] = "Should be greater than Minimum";
    }

    if (jobPost.salaryMin > jobPost.salaryMax) {
      errors["salaryMin"] = "Should be less than Salary Maximum";
      errors["salaryMax"] = "Should be greater than Salary Minimum";
    }
    setFormErrors(errors);
    return !Object.keys(errors).length;
  };
  //Validates Step 1 form and move it to step2
  const handleNext = () => {
    const isValid = validateStepOne();
    if (isValid) {
      setCurrentStep(2);
    }
  };

  const handleSave = async (data) => {
    const isValid = validateStepTwo();
    if (isValid) {
      if(action === 'Create') {
        const result = await createJob({...data,  _id: Math.floor(Math.random() * 1000),
        _type: 'job-post',});
        console.log('post call',result)
      }
      else {
        const result = await updateJob({...data, _type:'job-post'})
        console.log('put call',result)
      }

      setCurrentStep(1);
     
      
      
      enableModal(false);
    }
  };

  const handleClick = () => {
    if (currentStep === 1) {
      handleNext();
    } else {
      console.log('jobData',jobPost)
      handleSave(jobPost);
    }
  };

  const renderTitle = () => {
    return (
      <div className="flex items-center justify-between mb-6">
        <Typography variant={"h3"}> {action} Job </Typography>
        <Typography> Step {currentStep}</Typography>
      </div>
    );
  };

  const renderBodyContent = () => {
    return (
      <>
        {currentStep === 1 ? (
          <StepOne
            jobTitle={jobPost.jobTitle}
            company={jobPost.company}
            industry={jobPost.industry}
            location={jobPost.location}
            remoteType={jobPost.remoteType}
            onChangeField={onChangeField}
            errors={formErrors}
          />
        ) : (
          <StepTwo
            applyType={jobPost.applyType}
            experienceMax={jobPost.experienceMax}
            experienceMin={jobPost.experienceMin}
            salaryMax={jobPost.salaryMax}
            salaryMin={jobPost.salaryMin}
            onChangeField={onChangeField}
            errors={formErrors}
          />
        )}
        <div className="absolute bottom-8 right-8">
          <Button onClick={() => handleClick()}>
            {currentStep === 1 ? "Next" : "Save"}
          </Button>
        </div>
      </>
    );
  };
  return (
      <Modal
        title={renderTitle()}
        body={renderBodyContent()}
        className='h-[564px] w-[577px] p-8'
        width={577}
        height={564}
        padding={8}
        showModal={isOpen}
        handleCloseModal={() => enableModal(false)}
      />
  );
};

CreateJobModal.propTypes = {
  action: PropTypes.string,
  jobData: PropTypes.object,
  isOpen: PropTypes.bool,
  enableModal: PropTypes.func,
};

CreateJobModal.defaultProps = {
  action: "Create",
  jobData: initJobPost,
  isOpen: false,
  enableModal: () => {}
};

export default CreateJobModal;
