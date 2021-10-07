import "scrollbar.css";
import { memo, useState, useCallback } from "react";

import Button from "components/Button";
import Card from "components/Card";
import Chip from "components/Chip";
import Section from "components/Section";
import React, { useEffect } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

import { FaComment, FaEllipsisV } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { useLoader } from "hooks";
import { StyledProject } from "./styles";
import { getTasks, updateTask } from "./taskBoardSlice";
import TaskModal from "./TaskModal";

function TaskBoard({ match: { params: { id } = {} } = {} }) {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.taskBoard);
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const onCloseModal = useCallback(() => {
    setOpenTaskModal(false);
    setCurrentTaskId(null);
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getTasks(id));
    }
  }, [dispatch, id]);

  const onDrop = async (transfer) => {
    const { source, destination, draggableId } = transfer;
    console.log("draggableId", draggableId);
    if (!destination?.droppableId) {
      return;
    }
    const [, sourceStatus] = source?.droppableId?.split("=");
    const prevTask = project?.tasks?.[sourceStatus]?.[source.index];
    const [, destinationStatus] = destination.droppableId.split("=");
    const destTasks = project?.tasks?.[destinationStatus];

    const destTask =
      project?.tasks?.[destinationStatus]?.length === destination?.index
        ? project?.tasks?.[destinationStatus]?.[destination.index - 1]
        : project?.tasks?.[destinationStatus]?.[destination.index];
    // if same board
    const isSameSection = source?.droppableId === destination?.droppableId;

    let newPosition = null;
    if (isSameSection) {
      newPosition =
        source?.index < destination?.index
          ? destTask.order + 1
          : destTask?.order - 1;
    } else {
      if (destTasks?.length === 0) {
        newPosition = prevTask.order;
      } else if (destination?.index === destTasks?.length) {
        newPosition = destTasks?.[destination?.index - 1]?.order + 1;
      } else {
        newPosition = destTasks?.[destination?.index]?.order - 1;
      }

      console.log("newPosition", newPosition);
    }

    try {
      await dispatch(
        updateTask({
          id: draggableId,
          status: destinationStatus,
          previous: prevTask,
          sourceIndex: source.index,
          destinationIndex: destination.index,
          order: newPosition,
        })
      ).unwrap();
    } catch (err) {
    } finally {
      dispatch(getTasks(id));
    }
  };
  useLoader(project?.status);
  if (project?.status === "rejected") {
    return <div>Failed to Load......</div>;
  }
  return (
    <>
      <Button onClick={() => setOpenTaskModal(true)}>Add Task</Button>
      <DragDropContext onDragEnd={onDrop}>
        <StyledProject>
          {project?.statusGroups?.map((sg, sgIndex) => (
            <Droppable droppableId={`${project?.data?._id}=${sg}`}>
              {(provided) => (
                <Section
                  {...provided.droppableProps}
                  innerRef={provided.innerRef}
                  key={project?.data?._id}
                  title={sg}
                >
                  {project?.tasks[sg]?.map((t, index) => (
                    <Draggable
                      draggableId={`${t?._id?.toString()}`}
                      index={index}
                      key={`${project?.data?._id}${t._id}`}
                    >
                      {(provided, snapshot) => (
                        <Card
                          innerRef={provided.innerRef}
                          snapshot={snapshot}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card.Header justify="space-between">
                            <Card.Title>{t.name}</Card.Title>
                            <FaEllipsisV />
                          </Card.Header>
                          <Card.Content>{t.description}</Card.Content>

                          <Card.Footer justify="space-between">
                            <Chip size="sm" color="salmon">
                              {t.deadline}
                            </Chip>
                            <FaComment />
                          </Card.Footer>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                </Section>
              )}
            </Droppable>
          ))}
        </StyledProject>
        <TaskModal
          open={openTaskModal}
          projectId={id}
          taskId={currentTaskId}
          onClose={onCloseModal}
          statuses={project?.statusGroups}
        />
      </DragDropContext>
    </>
  );
}

export default memo(TaskBoard);
