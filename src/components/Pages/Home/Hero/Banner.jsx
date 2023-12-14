import { CDN_URL } from "../../../../utils/constants";
import DefaultBannerImage from "../../../../images/banner.jpg";
import CustomImage from "../../../commons/CustomImage";

const Banner = ({ banner }) => {
  return (
    <div className="keen-slider__slide h-30">
      <CustomImage
        default={DefaultBannerImage}
        className="block !h-[15rem] md:!h-[15rem] lg:!h-[25rem]  w-full object-fill rounded-sm "
        src={banner?.photo}
        alt="image"
      />
    </div>
  );
};

export default Banner;
