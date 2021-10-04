import { render } from "@testing-library/react";
import Card from ".";

import withTheme from "components/HOCs/withTheme";
const CardWithTheme = withTheme(Card);
test("renders Card", () => {
  const comp = render(<CardWithTheme />);
  expect(comp).toMatchSnapshot();
});
