import React, {useState, useEffect} from "react";
import { Grid, Button } from "semantic-ui-react";
import { map, size } from "lodash";
import Link from "next/link";
import classNames from "classnames";
import { getAddressesApi } from "../../../api/address";
import useAuth from "../../../Hooks/useAuth";

export default function AddressShipping(props) {
    const { setAddress } = props;
    const [addresses, setAddresses] = useState(null);
    const [addressActive, setAddressActive] = useState(null);
    const { auth, logout} = useAuth();

    useEffect(() => {
        (async () => {
            const response = await getAddressesApi(auth.idUser, logout);
            setAddresses(response || []);
        })()
    }, []);

    return (
        <div className="address-shipping">
            <div className="title">Dirección de envió</div>
            <div className="data">

                {size(addresses)==0 ?(
                    <h3>
                        No hay ninguna dirección creada
                        <Link href="/account">
                            <a> añadir tu primera direccion.</a>
                        </Link>
                    </h3>
                ) : (
                    <Grid>
                        {map(addresses,(address)=>(
                            <Grid.Column 
                            key={address.id}
                             mobile={16} 
                             tablet={8} 
                             computer={4}                                                                        
                             >
                                 <Address
                                  address={address}
                                  addressActive={addressActive}
                                  setAddressActive={setAddressActive}
                                  setAddress={setAddress}
                                 />
                            </Grid.Column>
                        ))}
                    </Grid>
                )}
            </div>
            <h1> AddressShipping </h1>
        </div>
    );
}

function Address(props){
    const { address, addressActive, setAddressActive, setAddress } = props;

    const changeAddress = () => {
        setAddressActive(address._id);
        setAddress(address);
    };

    return(
        <div 
          className={classNames("address", {
            active: addressActive === address._id,
          })}
          onClick={changeAddress}
        >
            <p>{address.title}</p>
            <p>{address.name}</p>
            <p>{address.address}</p>
            <p>{address.city},{address.state}</p>
            <p>{address.phone}</p>
        </div>
    )
}