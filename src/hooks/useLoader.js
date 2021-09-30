import { useEffect } from "react";
import NProgress from "nprogress";
const useLoader = (status) => {
  useEffect(() => {
    if (status === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
    return () => {
      NProgress.done();
    };
  }, [status]);
};

export default useLoader;
