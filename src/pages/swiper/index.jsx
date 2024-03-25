import { Container } from "../../components";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "@emotion/styled";
import { useEffect } from "react";

const SwiperPage = () => {
  const swiperSlide = useSwiperSlide();
  const swiper = useSwiper();
  useEffect(() => {
    console.log("swiper : ", swiper);
  }, [swiper]);

  useEffect(() => {
    console.log("swiperSlide : ", swiperSlide);
  }, [swiperSlide]);
  return (
    <Container style={{ padding: `100px 0 0` }}>
      <CustomSwiper
        modules={[Navigation, Autoplay]} //Pagination,
        observer={true}
        observeParents={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={10}
        loopAdditionalSlides={1}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        /*  pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="custom-bullet ${className}"></span>`;
          },
        }} */
        breakpoints={{
          976: {
            slidesPerView: 2,
          },
        }}
        onSlideChangeTransitionEnd={(e) => {
          console.log("onSlideChangeTransitionEnd : ", e);
        }}
      >
        <CustomSlide>Slide1</CustomSlide>
        <CustomSlide>Slide2</CustomSlide>
        <CustomSlide>Slide3</CustomSlide>
      </CustomSwiper>
    </Container>
  );
};

const CustomSwiper = styled(Swiper)`
  width: calc(100vw - 40px);
  height: 55vw;
  margin: 0;
  padding: 0 20px 20px;
  @media screen (min-width: 768px) {
    width: 30vw;
  }
  .swiper-wrapper {
    overflow: visible;
  }
  .swiper-pagination {
    display: flex;
    top: auto;
    bottom: 0;
  }
  .custom-bullet {
    flex: 1;
    border-radius: 0.3rem;
    position: relative;
    background-color: lightgray;
    overflow: hidden;
    &.swiper-pagination-bullet-active {
      background-color: gray;
      ::after {
        content: "";
        display: block;
        position: absolute;
        width: 0;
        height: 100%;
        background-color: gold;
        animation: fill 2.5s linear forwards;
      }
    }
  }
  @keyframes fill {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const CustomSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border-radius: 1rem;
`;

export default SwiperPage;
