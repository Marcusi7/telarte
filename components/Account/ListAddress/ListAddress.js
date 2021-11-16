import React, {useState, useEffect} from 'react';
import { Grid, Button } from "semantic-ui-react";
import { map ,size } from "lodash";
import { getAddressesApi, deleteAddressApi } from '../../../api/address';
import useAuth from '../../../Hooks/useAuth';

export default function ListAddress(props) {
    const {reloadAddresses, setReloadAddresses} = props;
    const [addresses, setAddresses] = useState(null);
    const {auth, logout} = useAuth();
    

    useEffect(() => {
        (async () => {
            const response = await getAddressesApi(auth.idUser, logout);
            //comentado
            setAddresses(response || []);
            setReloadAddresses(false);         
        })();
    }, [reloadAddresses]);

    if (!addresses ) return null; 
    
    return (
        <div className="list-address">
        
            {size(addresses) === 0 ? (
                <h3>No hay direcciones</h3>
            ) : (
                <Grid>

                    {map(addresses, (address) =>(
                        <Grid.Column key={address.id} mobile= {16} tablet= {8} computer={4}>
                            <Address address={address} logout={logout} setReloadAddresses={setReloadAddresses}/>
                        </Grid.Column>
                    ))}
                    
                </Grid>
            )}
        </div>
    );
}


function Address(props){
    console.log(props);
    const {address, logout, setReloadAddresses} = props;

    const deleteAddress = async () => {
        const response = await deleteAddressApi(address._id, logout);
        if (response) setReloadAddresses(true);
    };

    return(

        <div className= "address">
            <p>{address.title}</p>
            <p>{address.name}</p>
            <p>{address.address}</p>
            <p>{address.state}, {address.city}</p>
            <p>{address.phone}</p>

            <div className="actions">
                <Button primary>Editar</Button>
                <Button onClick={deleteAddress}>Eliminar</Button>
            </div>

        </div>
    );
}