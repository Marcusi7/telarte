import React from 'react';
import { map } from "lodash";
import { Image, Grid } from "semantic-ui-react";
import Link from 'next/dist/client/link';
import useWindowSize from '../../Hooks/useWindowsSize';
import { breakpointUpSm, 
         breakpointUpMd, 
         breakpointUpLg
        } from "../../utils/breakpoint";

export default function ListProducts(props) {
    const { products } = props;
    const { width } = useWindowSize();

    const getColumnsRender = () => {
        switch (true) {
            case width > breakpointUpLg:
                return 3;
            case width > breakpointUpMd:
                return 2;
            case width > breakpointUpSm:
                return 1;
            default: 
                return 1; 
        }
    };
    
    return (    //Cantidad de columnas que se mostrarán
        <div className="list-products"> 
            <Grid>
                <Grid.Row columns={getColumnsRender()} >
                    {map(products, (product) =>(
                        <Product product={product} />
                    ))}
                </Grid.Row>
            </Grid>   
        </div>
    );
}

function Product(props) {
    const { product } = props; 

    return (
        <Grid.Column className="list-products__product">
            <Link href ={`/${product.url}`}>
                <a>
                    <div className="list-products__product-poster">
                        <Image src={product.poster.url} alt={product.title} />
                        <div className="list-products__product-poster-info">
                            <span className="price">$ {product.price}</span>
                        </div>
                    </div>
                    <h2>{product.title}</h2>
                </a>
            </Link>
        </Grid.Column> 
    );
}