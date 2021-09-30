import React, { useCallback, useEffect } from "react";
import Input from "components/Input";
import Button from "components/Button";
import { StyledTaskForm } from "./styles";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask, updateTask, getTasks } from "./taskBoardSlice";
import Modal from "components/Modal";
import Select from "components/Select";

function TaskModal({
  open,
  statuses,
  onClose,
  projectId,
  taskId,
  name,
  description,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm();
  const statusValue = watch("status");

  const dispatch = useDispatch();
  const onChangeStatus = useCallback(
    (e) => {
      setValue("status", e);
    },
    [setValue]
  );
  useEffect(() => {
    register("status");
  }, [register]);

  const onSubmit = useCallback(
    async (data) => {
      try {
        if (!taskId) {
          await dispatch(addTask({ projectId, ...data })).unwrap();
        } else {
          await dispatch(
            updateTask({ projectId, taskId, payload: data })
          ).unwrap();
        }
      } catch (err) {
        console.log("Failed to Add/Update Task");
      } finally {
        dispatch(getTasks(projectId));
        onClose();
      }
    },
    [taskId, dispatch, projectId, onClose]
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Title> {taskId ? "Update Task" : "Add Task"}</Modal.Title>
      <Modal.Content>
        <StyledTaskForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name", { required: true })}
            placeholder="Enter Task Name"
            label="Task Name"
            type="text"
            value={name}
            error={errors.name && "Required"}
          />
          <Input
            {...register("description", { required: true })}
            placeholder="Enter Task Description"
            label="Task Description"
            type="text"
            value={description}
            error={errors.name && "Required"}
          />

          <Select
            onChange={onChangeStatus}
            value={statusValue}
            options={statuses}
          ></Select>

          <Button type="submit">{taskId ? "Update Task" : "Add Task"}</Button>
        </StyledTaskForm>
      </Modal.Content>
    </Modal>
  );
}

export default TaskModal;
