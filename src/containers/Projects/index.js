import React, { useEffect, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledProject, StyledProjects } from "./styles";
import "scrollbar.css";
import { getProjects } from "./projectSlice";
import { useHistory } from "react-router";
import { setProject } from "containers/TaskBoard/taskBoardSlice";
import { useLoader } from "hooks";
import ProjectModal from "./ProjectModal";
import { FaEdit, FaPlus } from "react-icons/fa";
import dayjs from "utils/dayjs";

function Project() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project);
  const history = useHistory();

  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const onCloseModal = () => {
    setOpenProjectModal(false);
  };
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  useLoader(projects?.status);
  const onClickProject = (p) => (e) => {
    e.stopPropagation();
    setCurrentProject(p);
    setOpenProjectModal(true);
  };
  if (projects?.status === "rejected") {
    return <div>Failed to Load......</div>;
  }
  if (projects?.data.length === 0) {
    return <div>No Projects Found</div>;
  }
  return (
    <>
      <StyledProjects>
        <FaPlus onClick={() => setOpenProjectModal(true)} />
        {projects?.data?.map((p) => (
          <StyledProject
            onClick={() => {
              setProject(p);
              history.push(`/secure/project/${p._id}`);
            }}
          >
            <FaEdit onClick={onClickProject(p)} className="edit" />
            <h4>{p.name}</h4>
            <h6>{p.description}</h6>
            <h6>Created {dayjs(p.createdAt).fromNow()}</h6>
          </StyledProject>
        ))}
      </StyledProjects>
      <ProjectModal
        open={openProjectModal}
        project={currentProject}
        onClose={onCloseModal}
      />
    </>
  );
}

export default memo(Project);
