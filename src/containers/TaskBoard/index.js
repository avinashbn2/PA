import "scrollbar.css";

import Button from "components/Button";
import Card from "components/Card";
import Chip from "components/Chip";
import Section from "components/Section";
import React, { useEffect } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
// import { projects } from "./data";
import { FaComment, FaEllipsisV } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { StyledProject } from "./styles";
import { addTask, getProject } from "./taskBoardSlice";

function TaskBoard({ match: { params: { id } = {} } = {} }) {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.taskBoard);

  useEffect(() => {
    if (id) {
      dispatch(getProject(id));
    }
  }, [dispatch, id]);

  if (project?.status === "loading") {
    return <div>LOADING......</div>;
  }
  if (project?.status === "rejected") {
    return <div>Failed to Load......</div>;
  }
  if (project?.data.length === 0) {
    return <div>No Projects Found</div>;
  }
  console.log("project", project);
  return (
    <>
      <Button
        onClick={() =>
          dispatch(addTask({ id: "p12", task: { id: "test", name: "testss" } }))
        }
      >
        {" "}
        Add Task
      </Button>
      <DragDropContext onDragEnd={console.log}>
        <StyledProject>
          <Droppable droppableId={`${project?.data?.id}`}>
            {" "}
            {(provided) => (
              <Section
                {...provided.droppableProps}
                innerRef={provided.innerRef}
                key={project?.data?.id}
                title={project?.data?.status}
              >
                {project?.data?.tasks.map((t, index) => (
                  <Draggable
                    draggableId={`${project?.data?.id}${t.id}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <Card
                        innerRef={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={`${project?.data?.id}${t.id}`}
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
        </StyledProject>
      </DragDropContext>
    </>
  );
}

export default TaskBoard;
