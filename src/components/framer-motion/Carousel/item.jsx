/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { forwardRef, useRef } from "react";

const Item = forwardRef(function ({ data }, ref) {
  const variants = {
    bottom: {
      y: 0,
    },
  };
  const currentVariant = useRef("bottom");
  const inMotion = useRef(false);
  const animation = useAnimation();

  /**
   * handlerDragStart는 드래그 시작 이벤트를 처리하고 inMotion 참조를 설정합니다.
   * 사실로. `inMotion != true`인 경우에만 클릭 이벤트를 활성화합니다.
   * @returns {void}
   */
  const handleDragStart = async () => {
    inMotion.current = true;
  };

  /**
   * handleDragEnd handles the drag end event and decides, if we need to
   * transition into a new animation variant.
   * @param {{}} info - Drag informations
   * @returns {void}
   */
  const handleDragEnd = async (_, { offset, velocity }) => {
    const dir = offset.y < 0 ? "up" : "down";

    if (dir === "up") {
      if (velocity.y < -20) {
        currentVariant.current = "top";
      } else {
        currentVariant.current = "bottom";
      }
    } else if (dir === "down") {
      if (velocity.y > 20) {
        currentVariant.current = "bottom";
      } else {
        currentVariant.current = "top";
      }
    }

    await animation.start(currentVariant.current);
    inMotion.current = false;
  };

  const handleOnClick = async () => {
    if (inMotion.current === false) {
      currentVariant.current =
        currentVariant.current === "top" ? "bottom" : "top";
      await animation.start(currentVariant.current);
    }
  };

  console.log("Item data :", data);

  return (
    <motion.div
      ref={ref}
      className="item"
      drag={false}
      dragDirectionLock
      dragConstraints={{ bottom: 0 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      dragMomentum={false}
      variants={variants}
      animate={animation}
      transition={{
        y: { type: "spring", stiffness: 500, damping: 50 },
      }}
    >
      <div className="item-upper" onClick={handleOnClick}>
        <div className="item-col">
          <p className="item-title">{data.name}</p>
          <p>{data.vicinity}</p>
          <p>{data.address}</p>
        </div>
        <div className="item-col">
          <p>{data.distance}</p>
          <p>{data.duration}</p>
        </div>
      </div>
    </motion.div>
  );
});

Item.displayName = "Item";

export default Item;
