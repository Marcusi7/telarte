import React from "react";
import CarouselScreenshots from "../CarouselScreenshots";

export default function InfoProduct(props) {
  const { product } = props;

  return (
    <div className="info-product">
      <CarouselScreenshots
        title={product.title}
        screenshots={product.screenshots}
      />
    </div>
  );
}
