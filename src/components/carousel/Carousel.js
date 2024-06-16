import Carousel from "react-elastic-carousel";
// import { carouselData } from "./Data";

import CarouselItem from "./CarouselItem";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 4 },
];

export default function CarouselPart() {
  return (
    <Carousel breakPoints={breakPoints}>
      <CarouselItem>1</CarouselItem>
      <CarouselItem>2</CarouselItem>
      <CarouselItem>13</CarouselItem>
      <CarouselItem>4</CarouselItem>
      <CarouselItem>5</CarouselItem>
      <CarouselItem>6</CarouselItem>
      <CarouselItem>7</CarouselItem>
      <CarouselItem>8</CarouselItem>
      <CarouselItem>8</CarouselItem>
    </Carousel>
  );
}
