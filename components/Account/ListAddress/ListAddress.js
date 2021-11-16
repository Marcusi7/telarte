import React, {useState, useEffect} from 'react';
import { getAddressesApi } from '../../../api/address';
import useAuth from '../../../Hooks/useAuth';

export default function ListAddress() {
    const [addresses, setAddresses] = useState(null);
    const {auth, logout} = useAuth();
    console.log(addresses);

    useEffect(() => {
        (async () => {
            const response = await getAddressesApi(auth.idUser, logout);
            //comentado
            setAddresses(response || []);
            console.log(response);
        })();
    }, []);

    return (
        <div>
            <h1>ListAddress...</h1>   
        </div>
    );
}
