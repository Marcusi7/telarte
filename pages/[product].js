import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import BasicLayout  from '../layouts/BasicLayout/BasicLayout';
import { getProductByUrlApi} from "../api/product";
import HeaderProduct from "../components/Product/HeaderProduct/HeaderProduct";


export default function Product() {

    const [product, setProduct] = useState(null);
    const {query} =useRouter();

    useEffect(() => {
        (async () => {
            const response = await getProductByUrlApi(query.product);
            setProduct(response);
        })()
    }, [query])

    if(!product) return null;
    

    return (
        <BasicLayout className="product">
            <HeaderProduct product={product} />
            <p>tabs Product</p>
        </BasicLayout>
    );
}
