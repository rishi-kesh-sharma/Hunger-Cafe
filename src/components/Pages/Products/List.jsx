import React from "react";
import Card from "./Card";

const List = ({ products }) => {
  return (
    <div className="grid-cols-1 md:col-span-2 lg:col-span-3 grid   sm:grid-cols-2  md:grid-cols-2  xl:grid-cols-4  gap-[1rem]">
      {products?.map((product, index) => {
        return <Card product={product} key={index} />;
      })}
    </div>
  );
};

export default List;
