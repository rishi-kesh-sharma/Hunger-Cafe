import { Link } from "react-router-dom";
import defaultImage from "../../../../images/category/category.png";
import CustomImage from "../../../commons/CustomImage";
const Category = ({ category }) => {
  console.log(category, "category");
  return (
    <Link
      to={`products/category/${category?.id}`}
      className="flex flex-col items-center  ">
      <CustomImage
        // src={CDN_URL + food?.imageId}
        // src={category?.image}
        src={category?.photo}
        defaultImage={defaultImage}
        className="h-[60px] w-[60px] sm:w-[70px] sm:h-[70px] object-contain pointer-events-none rounded-full "
        alt="image"
      />
      <p className="text-sm sm:text-md text-center">{category?.name}</p>
    </Link>
  );
};
export default Category;
