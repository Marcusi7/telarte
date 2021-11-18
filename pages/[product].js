import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import BasicLayout  from '../layouts/BasicLayout/BasicLayout';
import { getProductByUrlApi} from "../api/product"


export default function Product() {

    const [product, setProduct] = useState(null);
    const {query} =useRouter();

    useEffect(() => {
        (async () => {
            const response = await getProductByUrlApi(query.product);
            setProduct(response);
        })()
    }, [query])
    

    return (
        <BasicLayout className="product">
            <h1>Estamos en Product: {query.product} </h1>
        </BasicLayout>
    );
}
