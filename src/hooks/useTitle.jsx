import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | NC BoardGames`;
  }, [title]);
};

export default useTitle;
