import React from "react";
import Card from "./Card";

const List = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 md:col-span-2 lg:col-span-3        gap-[1rem]">
      {products?.map((product, index) => {
        return <Card product={product} key={index} />;
      })}
    </div>
  );
};

export default List;
