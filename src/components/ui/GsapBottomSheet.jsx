import { PropTypes } from "prop-types";
import { forwardRef, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useFocusTrap from "../../hooks/useFocusTrap";

const GsapBottomSheet = forwardRef(function BottomSheet(
  { title, children, isOpen, setIsOpen, ...rest },
  ref
) {
  const timeLine = useRef();
  const containerRef = useFocusTrap();
  const titleRef = useRef();
  const { contextSafe } = useGSAP(
    () => {
      timeLine.current = gsap
        .timeline()
        .to(".wrapper", {
          duration: 0.1,
          zIndex: 1,
        })
        .to(".wrapper", {
          duration: 0.25,
          ease: "linear",
          opacity: 1,
        })
        .to(".sheet", {
          duration: 0.25,
          ease: "power3.inOut",
          y: 0,
        });
    },
    { scope: containerRef }
  );

  const toggleTimeline = contextSafe(() => {
    timeLine.current.reversed(!timeLine.current.reversed());
  });

  useEffect(() => {
    function focusTimeOut() {
      setTimeout(() => {
        titleRef.current.focus();
        console.log("titleRef focus?");
      }, 1000);
    }

    toggleTimeline();
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      if (titleRef.current) {
        focusTimeOut();
      }
    } else {
      document.body.style.overflowY = "auto";
      clearTimeout(focusTimeOut);
    }
  }, [isOpen, toggleTimeline]);

  return (
    <div id="bs" ref={containerRef}>
      <Wrapper className="wrapper" />
      <Sheet className="sheet" ref={ref} {...rest}>
        <div className="header">
          <h2 ref={titleRef} tabIndex={0}>
            {title}
          </h2>
        </div>
        <div className="contents" tabIndex={0}>
          {children}
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            닫기
          </button>
        </div>
      </Sheet>
    </div>
  );
});

GsapBottomSheet.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  children: PropTypes.any.isRequired,
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  opacity: 0;
`;

const Sheet = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  transform: translateY(100%);
  border-radius: 20px 20px 0 0;
  text-align: left;
  font-weight: 600;
  background-color: #fff;
  z-index: 1;
  .footer {
    position: absolute;
    right: 20px;
    top: 10px;
    button {
      width: 20px;
      height: 20px;
      font-size: 0;
      border: 0;
      border-radius: 5px;
      background-color: #eee;
    }
  }
`;

export default GsapBottomSheet;
