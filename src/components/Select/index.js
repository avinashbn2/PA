import React, {
  useRef,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";
import { UL, StyledSelect, Selected, Option } from "./styles";
import { HiSelector } from "react-icons/hi";
import useClickOutside from "hooks/useClickOutside";
const Select = React.forwardRef(({ options, value: iValue, onChange }) => {
  const [value, setValue] = useState(iValue || options[0]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const ref = useRef();

  useClickOutside(ref, () => {
    setOpenDropdown(false);
  });
  useEffect(() => {
    // if (value !== iValue) {
    onChange(value);
    // }
  }, [value, onChange]);

  const onClick = useCallback(
    (option) => () => {
      setValue(option);
      setOpenDropdown(false);
    },
    []
  );

  const Options = useMemo(() => {
    return openDropdown ? (
      <UL>
        {options.map((op) => (
          <Option active={value === op} onClick={onClick(op)}>
            {op}
          </Option>
        ))}
      </UL>
    ) : null;
  }, [onClick, openDropdown, options, value]);

  return (
    <StyledSelect>
      <Selected ref={ref} onClick={() => setOpenDropdown(!openDropdown)}>
        {value} <HiSelector />
      </Selected>
      {Options}
    </StyledSelect>
  );
});

export default Select;
