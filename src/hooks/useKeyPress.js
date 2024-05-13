import { useEffect, useState } from "react";

const useKeyPress = () => {
  const [keyPressed, setKeyPressed] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (
        key === "Enter" ||
        key === "Tab" ||
        key === "ArrowUp" ||
        key === "ArrowDown"
      ) {
        setKeyPressed(key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;
