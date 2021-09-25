import "scrollbar.css";

import Button from "components/Button";
import Card from "components/Card";
import Chip from "components/Chip";
import Section from "components/Section";
import React, { useEffect } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import NProgress from "nprogress";
import { DragDropContext } from "react-beautiful-dnd";

import { FaComment, FaEllipsisV } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { StyledProject } from "./styles";
import { getTasks, updateTask } from "./taskBoardSlice";

function TaskBoard({ match: { params: { id } = {} } = {} }) {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.taskBoard);

  useEffect(() => {
    if (id) {
      dispatch(getTasks(id));
    }
  }, [dispatch, id]);

  const onDrop = (transfer) => {
    const { source, destination, draggableId } = transfer;

    if (source.droppableId === destination.droppableId) {
      return;
    }
    const [, sourceStatus] = source.droppableId.split("-");
    const prevTask = project?.tasks?.[sourceStatus]?.[source.index];
    const [, destinationStatus] = destination.droppableId.split("-");
    dispatch(
      updateTask({
        id: draggableId,
        status: destinationStatus,
        previous: prevTask,
      })
    );
  };
  useEffect(() => {
    if (project?.status === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [project]);
  if (project?.status === "rejected") {
    return <div>Failed to Load......</div>;
  }
  if (project?.data?.tasks?.length === 0) {
    return <div>No Projects Found</div>;
  }
  return (
    <>
      <Button
      // onClick={() =>
      //   dispatch(addTask({ id: "p12", task: { id: "test", name: "testss" } }))
      // }
      >
        Add Task
      </Button>
      <DragDropContext onDragEnd={onDrop}>
        <StyledProject>
          {project?.statusGroups?.map((sg) => (
            <Droppable droppableId={`${project?.data?._id}-${sg}`}>
              {(provided) => (
                <Section
                  {...provided.droppableProps}
                  innerRef={provided.innerRef}
                  key={project?.data?._id}
                  title={sg}
                >
                  {project?.tasks[sg]?.map((t, index) => (
                    <Draggable draggableId={`${t._id}`} index={index}>
                      {(provided, snapshot) => (
                        <Card
                          innerRef={provided.innerRef}
                          snapshot={snapshot}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={`${project?.data?._id}${t._id}`}
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
      </DragDropContext>
    </>
  );
}

export default TaskBoard;
