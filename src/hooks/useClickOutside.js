import { useEffect, useCallback } from "react";
const useClickOutside = (ref, cb) => {
  const onClick = useCallback(
    (e) => {
      if (!ref?.current?.contains(e.target)) {
        cb();
      }
    },
    [ref, cb]
  );

  useEffect(() => {
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [onClick]);
};

export default useClickOutside;
