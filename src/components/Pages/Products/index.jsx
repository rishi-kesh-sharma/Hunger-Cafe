import React, { useEffect, useState } from "react";
import Card from "./Card";
import Section from "../../commons/Section";
import Container from "../../commons/Container";
import List from "./List";
// import { subCategories, products } from "../../../data";
import { DrawerWithNavigation, SideBar } from "./Sidebar";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { API_PATHS } from "../../../utils/constants";
import Loading from "../../commons/Loading";
import Spinner from "../../commons/Spinner";
import NoData from "../../commons/NoData";

const Products = () => {
  const { id } = useParams();
  const [currentSubCategory, setCurrentSubCategory] = useState(null);
  const {
    data: subCategories,
    loading: loading1,
    error: error1,
  } = useFetch({ path: `${API_PATHS.GET_SUB_CATEGORIES}&cat=${id}` });

  useEffect(() => {
    setCurrentSubCategory(subCategories?.[0]?.id);
  }, [subCategories]);
  const {
    data: products,
    loading: loading2,
    error: error2,
  } = useFetch({
    path: `${API_PATHS.GET_PRODUCTS}?category=${currentSubCategory}`,
  });

  if (loading1) {
    return <Loading />;
  }

  const isRenderable = (data) => {
    return data?.length > 0 ? true : false;
  };

  return (
    <Section className="py-[2rem] my-0">
      <Container className="grid md:grid-cols-3 lg:grid-cols-4 md:gap-[2rem]">
        <SideBar
          category
          subCategories={subCategories}
          currentSubCategory={currentSubCategory}
          setCurrentSubCategory={setCurrentSubCategory}
        />
        {/* <DrawerWithNavigation
          subCategories={subCategories}
          currentSubCategory={currentSubCategory}
          setCurrentSubCategory={setCurrentSubCategory}
        /> */}
        {loading2 ? (
          <Spinner />
        ) : isRenderable(products) ? (
          <List products={products} loading={loading2} />
        ) : (
          <div className=" col-span-3 w-full flex items-center justify-center">
            <NoData />
          </div>
        )}{" "}
      </Container>
    </Section>
  );
};

export default Products;
