import DefaultBannerImage from "../../../../images/banner.jpg";
import CustomImage from "../../../commons/CustomImage";

const Banner = ({ banner }) => {
  return (
    <div className="keen-slider__slide">
      <CustomImage
        default={DefaultBannerImage}
        className="block  w-full object-fill lg:object-cover rounded-sm "
        src={banner?.photo}
        alt="image"
      />
    </div>
  );
};

export default Banner;
