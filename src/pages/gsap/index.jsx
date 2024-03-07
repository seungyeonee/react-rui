import { useGSAP } from "@gsap/react";
// import { Button, Container } from "../../components";
import gsap from "gsap";
import { useRef } from "react";
import { Container } from "../../components";
import styled from "@emotion/styled";

const GsapPage = () => {
  const container = useRef();
  const circle = useRef();

  // store the timeline in a ref.
  const timeLine = useRef();
  const { contextSafe } = useGSAP(
    () => {
      // add a box and circle animation to our timeline and play on first render
      console.log("creating timeline");

      timeLine.current = gsap
        .timeline()
        .to(".box2", {
          rotation: 360,
        })
        .to(".circle2", {
          x: 100,
        });
    },
    { scope: container }
  );

  const onClickRotate = contextSafe(() => {
    gsap.to(".rotate", { rotation: "+=180" });
  });

  const toggleTimeline = contextSafe(() => {
    timeLine.current.reversed(!timeLine.current.reversed());
  });

  useGSAP(
    () => {
      // use selectors...
      gsap.to(".box", { rotation: "+=360", duration: 3 });

      // or refs...
      gsap.to(circle.current, { rotation: "-=360", duration: 3 });

      gsap.to("[data-animate='rotate']", {
        rotation: 360,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });

      gsap.to("[data-animate='move']", {
        x: 50,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });
    },
    { scope: container }
  );

  return (
    <Container>
      <div ref={container} className="container">
        <Box className="box">Box</Box>
        <Circle ref={circle}>Circle</Circle>
        <button onClick={onClickRotate} className="rotate">
          onClickRotate
        </button>
        <Box data-animate="rotate">rotate Box</Box>
        <Box data-animate="move">move Box</Box>
        <button onClick={toggleTimeline}>TOGGLE</button>
        <Box className="box2">Box</Box>
        <Circle className="circle2">Circle</Circle>
      </div>
    </Container>
  );
};

const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  margin: 10px;
  background-color: gold;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  margin: 10px;
  background-color: #f87412;
`;

export default GsapPage;
