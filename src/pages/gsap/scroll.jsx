import { useRef } from "react";
import { Container } from "../../components";
import styled from "@emotion/styled";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ScrollPage = () => {
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: false,
            markers: true, // 애니메이션 시작, 종료 위치 마커 표시
          },
        });
      });
    },
    { scope: main }
  );
  return (
    <Container ref={main}>
      <div style={{ height: "100vh" }}></div>
      <Box className="box" />
      <Box className="box" />
      <Box className="box" />
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

export default ScrollPage;
