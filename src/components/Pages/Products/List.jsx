import React from "react";
import Card from "./Card";

const List = ({ products }) => {
  return (
    <div className="lg:col-span-3 grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-4  gap-[1rem]">
      {products?.map((product, index) => {
        return <Card product={product} key={index} />;
      })}
    </div>
  );
};

export default List;
