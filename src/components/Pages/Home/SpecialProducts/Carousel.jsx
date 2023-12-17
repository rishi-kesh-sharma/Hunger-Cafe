import { Carousel } from "@material-tailwind/react";

export function ProductImagesCarousel({ images }) {
  return (
    <Carousel className="rounded-xl">
      {images?.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            alt="image"
            className="w-full h-[150px] md:h-full object-contain"
          />
        );
      })}
    </Carousel>
  );
}
