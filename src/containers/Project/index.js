import React, { useEffect } from "react";
import Card from "components/Card";
import Chip from "components/Chip";
// import { projects } from "./data";
import { FaEllipsisV, FaComment } from "react-icons/fa";
import Section from "components/Section";
import { useDispatch, useSelector } from "react-redux";
import { StyledProject } from "./styles";
import "scrollbar.css";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import Button from "components/Button";
import { addTask, getProjects } from "./projectSlice";

function Project() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  if (projects.status === "loading") {
    return <div>LOADING......</div>;
  }
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
          {projects?.data?.map((p) => (
            <Droppable droppableId={`${p.id}`}>
              {(provided) => (
                <Section
                  {...provided.droppableProps}
                  innerRef={provided.innerRef}
                  key={p.id}
                  title={p.status}
                >
                  {p.tasks.map((t, index) => (
                    <Draggable draggableId={`${p.id}${t.id}`} index={index}>
                      {(provided, snapshot) => (
                        <Card
                          innerRef={provided.innerRef}
                          snapshot={snapshot}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={`${p.id}${t.id}`}
                        >
                          <Card.Header justify="space-between">
                            <Card.Title>{t.title}</Card.Title>
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

export default Project;
