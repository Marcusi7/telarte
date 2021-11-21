import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify"
import { size } from 'lodash';
import useAuth from "../../../../Hooks/useAuth";
import useCart from "../../../../Hooks/useCart";
import  { paymentCartApi } from "../../../../api/cart";
import AddressShipping from '../../AddressShipping';

export default function FormPayment(props) {
    
    const { articulos, address } = props;
    const [ loading, setLoading] = useState(false);
    const { auth, logout } = useAuth;
    const { removeAllProductsCart} = useCart();
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();     //Esto se tiene que tener en cuenta OJO

        let totalPayment = 0;
        articulos.forEach(articulo => {
            totalPayment = totalPayment + articulo.price;
        });   

        const response = 0;
        const user = address.user;      //Todos los datos de la sessión logueada

        for await (const articulo of articulos) {
            response = await paymentCartApi(
                articulo,
                user,
                address,
                totalPayment,
                logout
            );
        }
      
        if(size(response) > 0) {
            toast.success("Pedido Tomado, TelArte se pondrá en contacto con usted. GRACIAS");
            removeAllProductsCart();
            router.push("/");
        } else {
            toast.error("Error al Tomar el Pedido");
        }
    };

    return (
        <form className="form-payment" onSubmit={handleSubmit}>
            <Button type="submit">Realizar Pedido</Button>
        </form>
    );
}
