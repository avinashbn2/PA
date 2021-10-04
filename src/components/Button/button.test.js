import { render, screen, fireEvent } from "@testing-library/react";
import ButtonWithtoutTheme from ".";

import withTheme from "components/HOCs/withTheme";
const Button = withTheme(ButtonWithtoutTheme);
test("renders Button", () => {
  render(<Button>Test</Button>);

  const button = screen.getByText(/Test/i);
  expect(button).toBeInTheDocument();
});
test("Able to click Button", () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Test</Button>);
  const button = screen.getByText(/Test/i);

  fireEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});
