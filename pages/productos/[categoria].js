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
                <div className="AcercaDe">
                    <h2>TELARTE</h2>
                    <p>TelArte es una empresa ecuatoriana dedicada a la venta online de productos textiles de muy buena calidad. Los productos que ofrece TELARTE 
                        están hechos de la mejor calidad y con sofisticadas mezclas de fibras que producen un tacto y comodidad más agradable hacia el clientea además,
                        los diseños ofertados por la marca son perfectos para el hogar ya que realzan los estilos que hay presentes en estos. TELARTE se preocupa por
                        la elegancia y acabados sutiles en sus productos para garantizar los gustos de cada cliente.
                    </p>
                    <h3>Misión</h3>
                    <p>La tecnología evoluciona y está en constante transición y como es obvio y notorio el ámbito textil también sufre cambios. En este período 
                        de tiempo, TELARTE captó desde su inicio que el mercado Ecuatoriano no tenía un concepto específico de textiles. 
                        Varios factores incidían a que este fenómeno ocurra.  Como resultado, la misión de TELARTE es la de entregar a nuestros clientes 
                        los más altos servicios y productos textiles, con el fin de establecer un posicionamiento claro de tendencia dentro del mercado 
                        Ecuatoriano y así general una cultura de textiles dentro de la sociedad.
                    </p>
                    <h3>Visión</h3>
                    <p>La visión de TELARTE está determinada a constituirse en la compañía de venta de textiles más grande, eficiente y eficaz del país; 
                        mediante tiendas online de marca propia, bajo diferentes formatos de comercialización y categorización; concentrada en sus metas y objetivos 
                        de mantenerse creciendo, progresando y prosperando de una forma ordenada; para de esta forma alcanzar el éxito y reconocimiento material 
                        y humano;  satisfaciendo todas las necesidades con los más altos estándares y niveles de calidad para la comunidad.
                    </p>
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
