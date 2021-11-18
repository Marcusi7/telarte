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

      <div className="info-product__content">
        <h4>Medidas Disponibles</h4>
        <div dangerouslySetInnerHTML={{__html: product.medidas}} />
        <h4>Colores Disponibles</h4>
        <div dangerouslySetInnerHTML={{__html: product.colores}} />
      </div>

    </div>
  );
}
