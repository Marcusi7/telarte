import React, {useState, useEffect} from 'react';
import { Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { size } from 'lodash';
import BasicLayout from '../../layouts/BasicLayout/BasicLayout';
import {getProductsCategoriaApi, getTotalProductsCategoriaApi} from "../../api/product";
import ListProducts from '../../components/ListProducts';
import Pagination from '../../components/Pagination/Pagination';

const limitPerPage = 6;

export default function Categoria() {
    const { query } = useRouter();
    const [products, setProduct] = useState(null);
    const [totalProduct,setTotalProduct] = useState(null);

    //console.log(query);
    const getStartItem=()=>{
       const currentPages= parseInt(query.page);
       if(!query.page || currentPages==1)return 0;
       else return currentPages * limitPerPage-limitPerPage;
    };

    useEffect(() => {
        (async () => {
            if(query.categoria) {
                const response = await getProductsCategoriaApi(
                    query.categoria, 
                    limitPerPage, 
                    getStartItem()
                );
                setProduct(response);
            }
        })();
    }, [query]);

    useEffect(() => {
        (async() =>{
            const response=await getTotalProductsCategoriaApi(query.categoria)
            setTotalProduct(response);
        })()
    }, [query])

    return (
        <BasicLayout className="categoria">
            {!products && <Loader active>Cargando productos</Loader>}
            {products && size(products) === 0 && (
                <div>
                    <h3>No hay artículos</h3>
                </div>
            )}
            {size(products) > 0 && <ListProducts products={products}/>}


            {totalProduct ? (
            <Pagination totalProduct={totalProduct} 
            page={query.page ? parseInt(query.page):1}
            limitPerPage={limitPerPage}
            />
            ) : null}
        </BasicLayout>
    );
}
