import React from "react";
import Input from "../../components/Input";
import RadioGroup from "../../components/RadioGroup";

const StepTwo = ({
  experienceMin,
  experienceMax,
  salaryMin,
  salaryMax,
  totalEmployee,
  applyType,
  onChangeField,
  errors,
}) => {
  return (
    <div className="flex flex-col space-y-6 justify-center">
      <div className="flex space-x-6 items-end">
        <Input
          className={"flex-1"}
          label={"Experience"}
          placeholder={"Minimum"}
          value={experienceMin}
          type={'number'}
          onChange={({ target: { value } }) =>
            onChangeField("experienceMin", value)
          }
          error={experienceMin > experienceMax && errors.experienceMin}
        />
        <Input
          className={"flex-1"}
          placeholder={"Maximum"}
          value={experienceMax}
          type={'number'}
          onChange={({ target: { value } }) =>
            onChangeField("experienceMax", value)
          }
          error={experienceMin > experienceMax && errors.experienceMax}
        />
      </div>
      <div className="flex space-x-6 items-end">
        <Input
          className={"flex-1"}
          label={"Salary"}
          placeholder={"Minimum"}
          value={salaryMin}
          onChange={({ target: { value } }) =>
            onChangeField("salaryMin", value)
          }
          error={salaryMin > salaryMax && errors.salaryMin}
        />
        <Input
          className={"flex-1"}
          placeholder={"Maximum"}
          value={salaryMax}
          onChange={({ target: { value } }) =>
            onChangeField("salaryMax", value)
          }
          error={salaryMin > salaryMax && errors.salaryMax}
        />
      </div>
      <Input
        label={"Total Employee"}
        placeholder={"ex.100"}
        value={totalEmployee}
        onChange={({ target: { value } }) =>
          onChangeField("totalEmployee", value)
        }
      />
      <RadioGroup
        labelText={"Apply Type"}
        options={["Quick Apply", "External Apply"]}
        selected={applyType}
        onChange={({ target: { value } }) => onChangeField("applyType", value)}
      />
    </div>
  );
};

export default StepTwo;
