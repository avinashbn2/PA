import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "components/Input";
import Button from "components/Button";
import { StyledProjectForm } from "./styles";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProject, getProjects } from "./projectSlice";
import Modal from "components/Modal";
function ProjectModal({ open, onClose, project }) {
  const { _id: projectId = null, name = "", description = "" } = project || {};
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("name", name);
  }, [name, setValue]);

  useEffect(() => {
    setValue("description", description);
  }, [description, setValue]);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    async (data) => {
      try {
        await dispatch(addProject(data)).unwrap();
      } catch (err) {
        console.log("Failed to Add/Update Project");
      } finally {
        dispatch(getProjects());
        onClose();
      }
    },
    [onClose, dispatch]
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Title> {projectId ? "Update Project" : "Add Project"}</Modal.Title>
      <Modal.Content>
        <StyledProjectForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name", { required: true })}
            placeholder="Enter Project Name"
            label="Project Name"
            type="text"
            error={errors.name && "Required"}
          />
          <Input
            {...register("description", { required: true })}
            placeholder="Enter Project Description"
            label="Project Description"
            type="text"
            error={errors.name && "Required"}
          />

          <Button type="submit">
            {projectId ? "Update Project" : "Add Project"}
          </Button>
        </StyledProjectForm>
      </Modal.Content>
    </Modal>
  );
}
ProjectModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  project: PropTypes.object,
};

export default ProjectModal;
