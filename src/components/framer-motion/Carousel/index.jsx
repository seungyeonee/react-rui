import { useEffect, useRef, useState } from "react";
import { wrap, swipePower } from "../../../utils/common";
import "./style.css";
import data from "./data";
import { motion, useAnimation } from "framer-motion";
import Item from "./item";

const variants = {
  toLeft: {
    x: "-100%",
    pointerEvents: "none",
  },
  toRight: {
    x: "100%",
    pointerEvents: "none",
  },
  center: {
    x: 0,
    pointerEvents: "initial",
  },
};

export function Carousel() {
  const ref = useRef();
  const [rect, setRect] = useState();

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const [page, setPage] = useState(0);
  const prev = wrap(0, data.length, page - 1);
  const cur = wrap(0, data.length, page);
  const next = wrap(0, data.length, page + 1);

  const animation = useAnimation();
  const handleDragEnd = async (evt, { offset }) => {
    const power = swipePower(offset.x, rect.width);
    if (power > 60) {
      await animation.start("toRight");
      paginate(-1);
    } else if (power < -60) {
      await animation.start("toLeft");
      paginate(1);
    }
  };

  const paginate = (dir) => {
    setPage(page + dir);
  };

  useEffect(() => {
    console.log("current Page : ", page);
  }, [page]);

  return (
    <div className={"carousel"}>
      <motion.div
        key={page}
        className="track"
        drag="x"
        dragDirectionLock
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        variants={variants}
        animate={animation}
        dragMomentum={false}
        transition={{
          x: { type: "spring", mass: 0.5, stiffness: 500, damping: 50 },
        }}
      >
        <Item key={prev} data={data[prev]} />
        <Item ref={ref} key={cur} data={data[cur]} />
        <Item key={next} data={data[next]} />
      </motion.div>
    </div>
  );
}
