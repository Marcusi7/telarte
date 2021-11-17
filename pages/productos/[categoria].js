import React, {useState, useEffect} from 'react';
import { Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { size } from 'lodash';
import BasicLayout from '../../layouts/BasicLayout/BasicLayout';
import {getProductsCategoriaApi} from "../../api/product";
import ListProducts from '../../components/ListProducts';

const limitPerPage = 9;

export default function Categoria() {
    const { query } = useRouter();
    const [products, setProduct] = useState(null);

    useEffect(() => {
        (async () => {
            if(query.categoria) {
                const response = await getProductsCategoriaApi(
                    query.categoria, 
                    limitPerPage, 
                    0
                );
                setProduct(response);
            }
        })();
    }, [query]);

    return (
        <BasicLayout className="categoria">
            {!products && <Loader active>Cargando productos</Loader>}
            {products && size(products) === 0 && (
                <div>
                    <h3>No hay artículos</h3>
                </div>
            )}
            {size(products) > 0 && <ListProducts products={products}/>}
        </BasicLayout>
    );
}
