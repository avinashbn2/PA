import { render } from "@testing-library/react";
import IInput from ".";
import withTheme from "components/HOCs/withTheme";
const Input = withTheme(IInput);
describe("Input component", () => {
  test("Renders correctly", () => {
    const comp = render(<Input />);
    expect(comp).toMatchSnapshot();
  });
});
