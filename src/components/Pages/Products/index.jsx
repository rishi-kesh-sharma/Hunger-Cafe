import React, { useEffect } from "react";
import Card from "./Card";
import Section from "../../commons/Section";
import Container from "../../commons/Container";
import List from "./List";
// import { categories, products } from "../../../data";
import { SideBar } from "./Sidebar";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { API_PATHS } from "../../../utils/constants";

const Products = () => {
  const { id } = useParams();
  const {
    data: categories,
    loading: loading1,
    error: error1,
  } = useFetch({ path: API_PATHS.GET_CATEGORIES });
  const {
    data: products,
    loading: loading2,
    error: error2,
  } = useFetch({ path: `${API_PATHS.GET_PRODUCTS}?category=${id}` });

  return (
    <Section className="py-[2rem] my-0">
      <Container className="grid lg:grid-cols-4 gap-[2rem]">
        <SideBar categories={categories} />
        <List products={products} />
      </Container>
    </Section>
  );
};

export default Products;
