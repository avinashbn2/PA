import { useEffect, useCallback } from "react";
const useClickOutside = (ref, cb) => {
  const onClick = useCallback(
    (e) => {
      console.log("ref?.current?.contains(e.target)", ref?.current, e.target);
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
