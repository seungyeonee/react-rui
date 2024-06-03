// import { Button, Container } from "../../components";
import { useState } from "react";
import { Container } from "../../components";
import GsapBottomSheet from "../../components/ui/GsapBottomSheet";

const GsapPage = () => {
  const [isOpenBottom, setIsOpenBottom] = useState(false);
  return (
    <>
      <Container>
        <div className="container">
          <button
            onClick={() => {
              setIsOpenBottom(!isOpenBottom);
            }}
          >
            TOGGLE
          </button>
        </div>
      </Container>
      <GsapBottomSheet
        title={"BottomSheet Title"}
        isOpen={isOpenBottom}
        setIsOpen={setIsOpenBottom}
      >
        BottomSheet Content with GSAP
      </GsapBottomSheet>
    </>
  );
};

export default GsapPage;
