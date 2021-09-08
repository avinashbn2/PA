import React from "react";
import Card from "components/Card";
import Chip from "components/Chip";
import { tasks } from "./data";
import { FaEllipsisV, FaComment } from "react-icons/fa";
import Section from "components/Section";
import { StyledProject } from "./styles";

function Project() {
  return (
    <StyledProject>
      <Section title="Todo">
        {tasks.map((t) => (
          <Card key={t.id}>
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
        ))}
      </Section>
      <Section title="Todo">
        {tasks.map((t) => (
          <Card key={t.id}>
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
        ))}
      </Section>
      <Section title="Todo">
        {tasks.slice(0, 2).map((t) => (
          <Card key={t.id}>
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
        ))}
      </Section>
    </StyledProject>
  );
}
export default Project;
