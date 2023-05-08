import React from "react";
import Input from "../../components/Input";

const StepOne = ({
  jobTitle,
  company,
  industry,
  location,
  remoteType,
  errors,
  onChangeField,
}) => {
  return (
    <div className="flex flex-col space-y-6">
      <Input
        label={"JobTitle"}
        isRequired
        placeholder={"ex. UX UI Designer"}
        value={jobTitle}
        onChange={({ target: { value } }) => onChangeField("jobTitle", value)}
        error={!jobTitle && errors.jobTitle}
      />
      <Input
        label={"Company"}
        isRequired
        placeholder={"ex. Google"}
        value={company}
        onChange={({ target: { value } }) => onChangeField("company", value)}
        error={!company && errors.company}
      />
      <Input
        label={"Industry"}
        isRequired
        placeholder={"ex. Information Technology"}
        value={industry}
        onChange={({ target: { value } }) => onChangeField("industry", value)}
        error={!industry && errors.industry}
      />
      <div className="flex space-x-6">
        <Input
          className={"flex-1"}
          label={"Location"}
          placeholder={"ex. Chennai"}
          value={location}
          onChange={({ target: { value } }) => onChangeField("location", value)}
        />
        <Input
          className={"flex-1"}
          label={"Remote Type"}
          placeholder={"ex. In Office"}
          value={remoteType}
          onChange={({ target: { value } }) =>
            onChangeField("remoteType", value)
          }
        />
      </div>
    </div>
  );
};

export default StepOne;
