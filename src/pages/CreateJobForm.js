import React, {useState} from 'react'
import Input from '../components/Input'
import Typography from '../components/Typography'
import Button from '../components/Button'
import RadioGroup from '../components/RadioGroup'

const initJobPost= {jobTitle: '',company:'',industry:'', location:'',remoteType:'',experienceMin:'',experienceMax:'', salaryMin:'', salaryMax:'', totalEmployee:'',applyType:'' }

const CreateJobForm = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [jobPost, setJobPost] = useState(initJobPost);
  const [formErrors, setFormErrors] = useState({});


  const onChangeField = (field,value) => {
    setJobPost((prev) => ({...prev, [field]: value}));
  }

  const validateStepOne = () => {
    const errors = {};
    const requiredFields = ['jobTitle', 'company', 'industry'];
    requiredFields.forEach((field) => {
      if(!jobPost[field]) {
        errors[field] = `${field} is Required`
      }
    })
    setFormErrors(errors)
    return !Object.keys(errors.length)

  }

  const validateStepTwo = () => {
    const errors = {}
    if(jobPost.experienceMin > jobPost.experienceMax) {
      errors['experienceMin'] = 'Experience Minimum Should be less than Experience Maximum'
    }
    // if(jobPost.experienceMax < jobPost.experienceMin) {
    //   errors['experienceMin'] = 'Experience Minimum Should be less than Experience Maximum'
    // }
    if(jobPost.salaryMin > jobPost.salaryMax) {
      errors['salaryMin'] = 'Salary Minimum should be less than Salary Maximum'
    }
  }

  const handleClick = () => {
    if(currentStep === 1) {
      handleNext();
    }
    else {
      handleSave();
    }
  }

  const handleNext = () => {
    //validate values
    const isValid = validateStepOne();
    if(isValid) {
      setCurrentStep(2);
    }
    
  }
  const handleSave = () => {
    validateStepTwo();
  }
  return (
    <div className="w-[577px] h-[564px] p-8 rounded-[10px] shadow-lg ml-4 flex flex-col space-y-6">
        <div className="flex items-center justify-between">
            <Typography variant={'h3'}> Create Job </Typography>
            <Typography> Step {currentStep}</Typography>
        </div>
        {currentStep === 1 ? <StepOne jobTitle={jobPost.jobTitle} company={jobPost.company} industry={jobPost.industry} location={jobPost.location} remoteType={jobPost.remoteType}  onChangeField={onChangeField} errors={formErrors}/> : <StepTwo applyType={jobPost.applyType} experienceMax={jobPost.experienceMax} experienceMin={jobPost.experienceMin} salaryMax={jobPost.salaryMax} salaryMin={jobPost.salaryMin} onChangeField={onChangeField} errors={formErrors} />}
        <div className='h-full flex flex-row-reverse justify-start items-end'>
        <Button onClick={() => handleClick()}>{currentStep === 1 ? "Next": "Save"}</Button>
        </div>
        
    </div>
  )
}

const StepOne = ({jobTitle, company, industry, location, remoteType,errors, onChangeField}) => {
  return (<div className="flex flex-col space-y-6">
  <Input label={"JobTitle"} isRequired  placeholder={"ex. UX UI Designer"} value={jobTitle} onChange={({target: {value}}) => onChangeField('jobTitle',value)} error={!jobTitle && errors.jobTitle}/>
        <Input label={"Company"} isRequired  placeholder={"ex. Google"} value={company} onChange={({target: {value}}) => onChangeField('company',value)} error={!company && errors.company}/>
        <Input label={"Industry"} isRequired  placeholder={"ex. Information Technology"} value={industry} onChange={({target: {value}}) => onChangeField('industry',value)} error={!industry && errors.industry}/>
        <div className='flex space-x-6'>
            <Input className={'flex-1'} label={"Location"} placeholder={"ex. Chennai"} value={location} onChange={({target: {value}}) => onChangeField('location',value)} />
            <Input className={'flex-1'} label={"Remote Type"} placeholder={"ex. In Office"} value={remoteType} onChange={({target: {value}}) => onChangeField('remoteType',value)} />
        </div>
        
       
  </div>)
}

const StepTwo = ({experienceMin, experienceMax, salaryMin, salaryMax, totalEmployee, applyType, onChangeField,errors}) => {
  return (<div className="flex flex-col space-y-6 justify-center">
  <div className='flex space-x-6 items-end'>
            <Input className={'flex-1'} label={"Experience"} placeholder={"Minimum"} value={experienceMin} onChange={({target: {value}}) => onChangeField('experienceMin', value)} error={experienceMin > experienceMax && errors.experienceMin} />
            <Input className={'flex-1'}  placeholder={"Maximum"} value={experienceMax} onChange={({target: {value}}) => onChangeField('experienceMax', value)}/>
  </div>
  <div className='flex space-x-6 items-end'>
            <Input className={'flex-1'} label={"Salary"} placeholder={"Minimum"} value={salaryMin} onChange={({target: {value}}) => onChangeField('salaryMin', value)} error={errors.salaryMin} />
            <Input className={'flex-1'}  placeholder={"Maximum"} value={salaryMax} onChange={({target: {value}}) => onChangeField('salaryMax', value)} />
  </div>
  <Input label={"Total Employee"} placeholder={"ex.100"} value={totalEmployee} onChange={({target: {value}}) => onChangeField('totalEmployee', value)} />
  <RadioGroup labelText={"Apply Type"} options={['Quick Apply', 'External Apply']} selected={applyType} onChange={({target: {value}}) => onChangeField('applyType', value)} />

  </div>)
}


export default CreateJobForm