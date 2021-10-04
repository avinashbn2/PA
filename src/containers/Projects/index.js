import React, { useEffect, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledProject, StyledProjects } from "./styles";
import "scrollbar.css";
import Button from "components/Button";
import { addTask, getProjects } from "./projectSlice";
import { useHistory } from "react-router";
import { setProject } from "containers/TaskBoard/taskBoardSlice";
import { getFormattedDate } from "utils/helpers";
import { useLoader } from "hooks";
import ProjectModal from "./ProjectModal";

function Project() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project);
  const history = useHistory();

  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const onCloseModal = () => {
    setOpenProjectModal(false);
  };

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  useLoader(projects?.status);
  if (projects?.status === "rejected") {
    return <div>Failed to Load......</div>;
  }
  if (projects?.data.length === 0) {
    return <div>No Projects Found</div>;
  }
  return (
    <>
      <Button onClick={() => setOpenProjectModal(true)}>Add Project</Button>

      <StyledProjects>
        {projects?.data?.map((p) => (
          <StyledProject
            onClick={() => {
              setProject(p);
              history.push(`/secure/project/${p._id}`);
            }}
          >
            <h4>{p.name}</h4>
            <h6>{p.description}</h6>
            <h6>Created on {getFormattedDate(p.createdAt)}</h6>
          </StyledProject>
        ))}
      </StyledProjects>
      <ProjectModal
        open={openProjectModal}
        projectId={currentProjectId}
        onClose={onCloseModal}
      />
    </>
  );
}

export default memo(Project);
