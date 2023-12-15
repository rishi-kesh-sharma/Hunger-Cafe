import useRestaurants from "../../../hooks/useRestaurants";
import { API_PATHS, GET_RESTAURANTS_URL } from "../../../utils/constants";
import BannerList from "./Hero";
import Categories from "./Categories";
import SpecialProducts from "./SpecialProducts";
// import Faqs from "./Faqs";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Faqs from "./Faqs";
import { faqs, products } from "../../../data";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../commons/Loading";

const Home = () => {
  console.log(process.env.STATIC_URL, "static url");

  const {
    data: banners,
    loading: loading0,
    error: error0,
  } = useFetch({ path: API_PATHS.GET_BANNERS });
  const {
    data: categories,
    loading: loading1,
    error: error1,
  } = useFetch({ path: API_PATHS.GET_CATEGORIES });

  const {
    data: subCategories,
    loading: loading2,
    error: error2,
  } = useFetch({ path: API_PATHS.GET_SUB_CATEGORIES });
  const {
    data: products,
    loading: loading3,
    error: error3,
  } = useFetch({ path: API_PATHS.GET_PRODUCTS });

  const {
    data: testimonials,
    loading: loading4,
    error: error4,
  } = useFetch({ path: API_PATHS.GET_TESTIMONIALS });

  const loading = loading1 || loading2 || loading3 || loading4;
  if (loading) {
    return <Loading />;
  }
  const specialProducts = products?.slice(0, 8);
  const isRenderable = (data) => {
    return data?.length > 0 ? true : false;
  };
  return (
    <div className="bg-white relative !overflow-x-hidden">
      {banners?.length > 0 && (
        <BannerList banners={banners} isLoading={loading0} />
      )}
      {isRenderable([categories]) && (
        <Categories categories={categories?.slice(0, 6)} isLoading={loading1} />
      )}
      {isRenderable(specialProducts) && (
        <SpecialProducts products={specialProducts} />
      )}

      <Faqs faqs={faqs} />
      {isRenderable(testimonials) && (
        <Testimonials testimonials={testimonials} />
      )}
      <Contact />
    </div>
  );
};
export default Home;
