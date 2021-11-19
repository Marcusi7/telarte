import React,{ useState, useEffect } from 'react';
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import { getProductByUrlApi} from "../api/product";
import useCart from '../Hooks/useCart';
import SummaryCart from '../components/Cart/SummaryCart/SummaryCart';
import AddressShipping from '../components/Cart/AddressShipping';

export default function Cart() {
    const { getProductCart }= useCart();
    const articulos = getProductCart();

    return !articulos? <EmptyCart /> : <FullCart articulos={articulos}/>
}

function EmptyCart(){
    return ( 
        <BasicLayout className="empty-cart">
            <h2>No hay productos en el carrito</h2>
        </BasicLayout>
    );
}
function FullCart(props){
    const{articulos}= props;
    const [articulosData, setArticulosData] = useState(null);
    const [reloadCart, setReloadCart] = useState(false);
    
    useEffect(() => {
        (async ()=>{
            const articulosTemp = [];
            for await (const articulo of articulos){
                const data= await getProductByUrlApi(articulo);
                articulosTemp.push(data);
            }
            setArticulosData(articulosTemp);
        })();
        setReloadCart(false);
    }, [reloadCart])
    
    return (
        <BasicLayout className="empty-cart">
        <SummaryCart articulos={articulosData} reloadCart={reloadCart} setReloadCart={setReloadCart}/>
        <AddressShipping />
        </BasicLayout>
    );

}




