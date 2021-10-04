import { render } from "@testing-library/react";
import IHeader from ".";
import withTheme from "components/HOCs/withTheme";
import withRedux from "components/HOCs/withRedux";
const Header = withRedux(withTheme(IHeader));
describe("Header component", () => {
  test("Renders correctly", () => {
    const comp = render(<Header />);
    expect(comp).toMatchSnapshot();
  });
});
