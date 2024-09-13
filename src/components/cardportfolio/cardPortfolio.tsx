"use client";
import { portifolio } from "@/utils/portfolio";
import styled from "../../styles/cardPortfolio/cardPortfolio.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export function CardPortifolio() {
  return (
    <Carousel
      className={styled.container}
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      deviceType={""}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition={"transform 300ms ease-in-out"}
      rewindWithAnimation={true}
      transitionDuration={500}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {portifolio.map((index) => {
        return (
          <a key={index.id} href={index.url} target="_blank">
            <img className={styled.img} src={index.srcImg} alt="" />
          </a>
        );
      })}
    </Carousel>
  );
}
