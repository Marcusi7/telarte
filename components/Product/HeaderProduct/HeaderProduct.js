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
    const {title } = product;

    return (
        <div className="header-product_title">
            {title}
            <Icon name="heart outline" link />
        </div>
    );
}
