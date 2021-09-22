import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledProject, StyledProjects } from "./styles";
import "scrollbar.css";
import Button from "components/Button";
import { addTask, getProjects } from "./projectSlice";
import { useHistory } from "react-router";
import { setProject } from "containers/TaskBoard/taskBoardSlice";

function Project() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project);
  const history = useHistory();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  if (projects?.status === "loading") {
    return <div>LOADING......</div>;
  }
  if (projects?.status === "rejected") {
    return <div>Failed to Load......</div>;
  }
  if (projects?.data.length === 0) {
    return <div>No Projects Found</div>;
  }
  return (
    <>
      <Button
        onClick={() =>
          dispatch(addTask({ id: "p12", task: { id: "test", name: "testss" } }))
        }
      >
        Add Project
      </Button>

      <StyledProjects>
        {projects?.data?.map((p) => (
          <StyledProject
            onClick={() => {
              setProject(p);
              history.push(`/secure/project/${p._id}`);
            }}
          >
            {p.name}
          </StyledProject>
        ))}
      </StyledProjects>
    </>
  );
}

export default Project;
