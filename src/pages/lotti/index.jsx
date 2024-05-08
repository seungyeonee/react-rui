import Lottie from "react-lottie";
import { Container } from "../../components";
import animationData from "../../lotties/loading.json"

const LottiPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Container>
      Lotti Test
      <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
      />
    </Container>
  );
};

/* const Box = styled.div`
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
`; */

export default LottiPage;
