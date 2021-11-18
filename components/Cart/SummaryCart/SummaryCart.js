import React,{ useState, useEffect } from 'react';
import { Table, Image, Icon} from "semantic-ui-react";
import {forEach, map} from "lodash";
import useCart from '../../../Hooks/useCart';
import { getProductsCart } from '../../../api/cart';

export default function SummaryCart(props) {
    const {articulos}=props;
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let price=0;
        forEach(articulos, (articulo)=>{
            price +=articulo.price;
        })
        setTotalPrice(price);
    }, [])
    return (
        <div className="summary-cart">
            <div className="title"> Resumen del carrito </div>
            <div className="data">
                 <Table celled structured>
                    <Table.Header>
                        <Table.Row>
                           <Table.HeaderCell> Producto</Table.HeaderCell> 
                           <Table.HeaderCell> Categoría</Table.HeaderCell> 
                           <Table.HeaderCell> Entrega</Table.HeaderCell> 
                           <Table.HeaderCell> Precio</Table.HeaderCell>   
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {map(articulos,(articulo)=>(
                            <Table.Row key={articulo.id} className="summary-cart__product">
                                <Table.Cell>
                                    <Icon name="close" link onClick={() => console.log("Borrar producto")} />
                                    <Image src={articulo.poster.url} alt={articulo.title}/>
                                    {articulo.title}
                                </Table.Cell>
                                <Table.Cell>{articulo.categoria.title}</Table.Cell>
                                <Table.Cell>Inmediata</Table.Cell>
                                <Table.Cell>{articulo.price}$</Table.Cell>
                            </Table.Row>
                        ))}

                        <Table.Row className="summary-cart__resume">
                            <Table.Cell className="clear"/>
                            <Table.Cell colSpan="2">Total: </Table.Cell>
                            <Table.Cell className="total-price">{(totalPrice).toFixed(2)}$</Table.Cell>

                        </Table.Row>
                    </Table.Body>
                </Table> 
            </div>
        </div>
    );
}
