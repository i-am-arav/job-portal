import React from "react";
import Button from "../../components/Button";
import CreateJobModal from "./CreateJobModal";
import { useNavigate } from "react-router-dom";


const CreateJob = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div className="mt-2 ml-2 flex items-center justify-start space-x-4 ">
      <Button onClick={() => setOpenModal(true)}> Create Job </Button>
      <Button variant={"secondary"} onClick={() => navigate("/list")}>
        Go to List Page
      </Button>
      <CreateJobModal enableModal={setOpenModal} isOpen={openModal} />
    </div>
  );
};

export default CreateJob;
