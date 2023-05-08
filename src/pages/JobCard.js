import React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import cn from 'classnames'

const JobCard = ({margin, marginTop, marginBottom, marginLeft, marginRight}) => {
    const cardClassName = "w-[830px] py-4 px-6 shadow-xl flex "
    const allMappingClassName = {
        [`m-${margin}`]: !!margin,
        [`mt-${marginTop}`]: !!marginTop,
        [`mb-${marginBottom}`]: !!marginBottom,
        [`ml-${marginLeft}`]: !!marginLeft,
        [`mr-${marginRight}`]: !!marginRight
    }
  return (
    <div className={cn(cardClassName, allMappingClassName)}>
      <img
        className="w-12 h-12 shadow rounded-lg"
        src="https://about.netflix.com/images/meta/netflix-symbol-black.png"
      />
      <div className="flex flex-col ml-2">
        <Typography variant="h2">UI UX Designer </Typography>
        <Typography>Great Vibes - Information Technology </Typography>
        <Typography textColor="gray-500">
          Chennai,TamilNadu,India(In-Office){" "}
        </Typography>
        <Typography marginTop={6}>
          Part-Time (9.00 am - 5.00 pm IST){" "}
        </Typography>
        <Typography marginTop={2}>Experience (1 - 2 years)</Typography>
        <Typography marginTop={2}>INR (₹) 30,000 - 60,000 / Month</Typography>
        <Typography marginTop={2}>51-200 employees</Typography>
        <div className="mt-6 flex items-center justify-start">
          <Button className="mr-6"> Apply Now </Button>
          <Button variant="secondary"> External Apply </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
