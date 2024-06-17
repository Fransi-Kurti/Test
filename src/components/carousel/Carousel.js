import Carousel from "react-elastic-carousel";

import CarouselItem from "./CarouselItem";
import CarouselCart from "./CarouselCart";
import { carouselData } from "./Data";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 5 },
];

export default function CarouselPart() {
  return (
    <Carousel breakPoints={breakPoints}>
      {carouselData.map(item=><CarouselItem key={item.id}><CarouselCart image={item.image} title={item.title} price={item.price} description={item.description} /></CarouselItem>)}
    </Carousel>
  );
}
