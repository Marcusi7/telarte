import React, { useState, useEffect } from "react";
import { Grid, Image, Icon, Button } from "semantic-ui-react";
import { size } from "lodash";

export default function HeaderProduct(props) {
    const {product} = props;
    const {poster, title} = product;
    console.log(product);
    return (
        <Grid className="header-product">
            <Grid.Column mobile={16} tablet={6} computer={5}>
                <Image src={poster.url} alt={title} fluid />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={10} computer={11}>
                <Info product={product}/>
            </Grid.Column>
        </Grid>
    );
}


function Info(props) {
    const { product } = props;
    const { title, summary, price } = product;

    return (  //no implementamo el ícono en el primer div porque nmo tenemos wishlist
        <>
            <div className="header-product__title">
                {title}
            </div>
            <div className="header-product__summary" 
            dangerouslySetInnerHTML={{__html: summary}}
            />
               
            <div className="header-product__buy">
                <div className="header-product__buy-price">
                    <p><b>Costo por unidad: </b>${price}</p>
                </div>
                <Button className="header-product__buy-btn">Comprar</Button>
            </div>
        </>
    );
}
