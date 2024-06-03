import { useEffect, useState } from "react";

const useKeyPress = () => {
  const [keyPressed, setKeyPressed] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      event.preventDefault();
      const { key } = event;
      console.log(key)
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
