import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { Container, Grid, Image, Input } from "semantic-ui-react";

import { useRouter } from "next/router";
import { size } from "lodash";
import  BasicLayout  from "../layouts/BasicLayout/BasicLayout";
import { searchProductApi} from "../api/product";
import ListProducts from "../components/ListProducts";



export default function search() {
    const [products, setProducts] = useState(null);
    const {query} = useRouter();

    useEffect(() => {
        document.getElementById("search-obj").focus();
    }, []);

    useEffect( () => {
        (async () => {
            if (size(query.query) > 0) {
                const response = await searchProductApi(query.query);
                if(size(response) > 0) setProducts(response);
                else setProducts([]);
            } else {
                setProducts([]);
            }
        })()
    }, [query]);

    return (
        <BasicLayout className ="search">
            {!products && <Loader active>Buscando Productos</Loader>}
            {products && size(products) === 0 &&(
                <section align="center">
                    <p>
                    <img align="middle" width="40%" src="https://puppypets.com.co/wp-content/uploads/2020/04/Oops-767x769.png"></img>
                    <br></br>
                    <h3>No hemos encontrado ningún producto con ese nombre!!!!<br></br></h3>
                    </p>
                </section>
            )}
            {size(products) > 0 && <ListProducts products={products} />}
        </BasicLayout>
    );
}
