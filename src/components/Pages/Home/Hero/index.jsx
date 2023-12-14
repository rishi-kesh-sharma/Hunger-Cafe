import Banner from "./Banner";
import { useKeenSlider } from "keen-slider/react";

import { useEffect, useState } from "react";
import Section from "../../../commons/Section";
import Container from "../../../commons/Container";
import LoadingSkeleton from "./LoadingSkeleton";

const BannerList = ({ isLoading, banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  var interval = "";

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    duration: 2000,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
        loop: true,
      },
      "(min-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
        loop: true,
      },
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
        loop: true,
      },
    },
  });
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current.next();
    }, 3000);
    clearInterval();
  }, []);

  if (!banners) {
    return null;
  }

  return (
    <Section className="mt-0">
      <Container>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div ref={sliderRef} className="keen-slider">
            {banners.length > 0 &&
              banners?.map((banner, index) => (
                <Banner banner={banner} key={banner.id || index} />
              ))}
          </div>
        )}
      </Container>
    </Section>
  );
};
export default BannerList;
