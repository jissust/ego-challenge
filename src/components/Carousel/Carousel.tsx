import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ModelFeature {
  name: string;
  description: string;
  image: string;
}

interface CarouselProps {
  items?: ModelFeature[];
}

const Carousel = ({ items = [] }:CarouselProps) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  const duplicateItems = (items:ModelFeature[], minLength:number):ModelFeature[] => {
    if (items.length >= minLength) return items;

    const result = [...items];
    let i = 0;

    while (result.length < minLength) {
      result.push(items[i % items.length]);
      i++;
    }

    return result;
  };

  const extendedItems = duplicateItems(items, 8);

  return (
    <div className="container-fluid model-detail-carrusel">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {extendedItems.map((feature, index) => (
          <SwiperSlide key={`${feature.name}-${index}`}>
            <div className="">
              <img src={feature.image} alt={feature.name} />
              <h3>{feature.name}</h3>
              <p>{feature.description}</p>
              <hr />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
