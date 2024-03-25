import { PropTypes } from "prop-types";
import React, { useContext, createContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./styles.scss";

const AccordionContext = createContext({});
const useAccordion = () => useContext(AccordionContext);

export const Accordion = ({ children, multiple, defaultIndex }) => {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? [defaultIndex] : defaultIndex
  );

  function onChangeIndex(index) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return currentActiveIndex.concat(index);
    });
  }

  return React.Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
};

export const AccordionItem = ({ children }) => {
  return <div className="AccordionItem">{children}</div>;
};

export const AccordionHeader = ({ children }) => {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`AccordionHeader ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}
    >
      {children}
    </motion.div>
  );
};

export const AccordionPanel = ({ children }) => {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className="AccordionPanel">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Accordion.propTypes = {
  children: PropTypes.any,
  multiple: PropTypes.number,
  defaultIndex: PropTypes.number,
};

AccordionItem.propTypes = {
  children: PropTypes.any,
};

AccordionHeader.propTypes = {
  children: PropTypes.any,
};

AccordionPanel.propTypes = {
  children: PropTypes.any,
};
