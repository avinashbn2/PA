import { renderHook, act } from "@testing-library/react-hooks";
import { useTheme } from "../";

describe("test useTheme", () => {
  it("should set theme", () => {
    const { result } = renderHook(() => useTheme("light"));
    expect(result.current.theme).toEqual("light");
  });
  it("should toggle theme", () => {
    const { result } = renderHook(() => useTheme("light"));
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toEqual("dark");
  });
  it("should set theme if argument is specified in toggleTheme", () => {
    const { result } = renderHook(() => useTheme("light"));
    act(() => {
      result.current.toggleTheme("dark");
    });
    expect(result.current.theme).toEqual("dark");
    act(() => {
      result.current.toggleTheme("dark");
    });
    expect(result.current.theme).toEqual("dark");
  });
  it("should throw error if invalid theme", () => {
    const { result } = renderHook(() => useTheme("light"));
    act(() => {
      result.current.toggleTheme("k2");
    });
    expect(result.error.message).toEqual("Invalid Theme");
  });
});
