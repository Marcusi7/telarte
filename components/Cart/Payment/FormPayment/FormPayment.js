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


    const handleSubmit = async (event) => {
        event.preventDefault();

        //toast.success("Pedido Tomado");
        console.log(address._id);
        const response = await paymentCartApi(
            articulos,
            address._id,
            address,
            logout
        );
        
        if(size(response) > 0) {
            toast.success("Pedido Tomado, TelArte se pondrá en contacto con usted. GRACIAS");
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
