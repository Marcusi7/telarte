import React from 'react';
import FormPayment from './FormPayment';

export default function Payment(props) {
    const { articulos, address } = props;

    return (
        <div className="payment">
            <div className="title">Pago</div>
            <div className="data">
                <FormPayment articulos={articulos} address={address} />
            </div>
        </div>
    );
}
