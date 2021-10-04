import { render, screen, fireEvent } from "@testing-library/react";
import Brand from ".";

describe("Test Brand compoennt", () => {
  const title = "SomeTitle";
  test("Renders correctly", () => {
    const comp = render(<Brand title={title} />);
    expect(comp).toMatchSnapshot();
  });
  test("Render brand component", () => {
    render(<Brand title={title} />);
    const elem = screen.getByText(title);
    expect(elem).toBeInTheDocument();
  });
  test("should Call function on Click", () => {
    const mockFn = jest.fn();
    render(<Brand title={title} onClick={mockFn} />);
    const elem = screen.getByText(title);
    fireEvent.click(elem);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
