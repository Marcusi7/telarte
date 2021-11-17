import React, {useState, useEffect} from "react";
import { Loader } from "semantic-ui-react";
import { size } from "lodash";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import { getLastProductsApi } from "../api/product";
import ListProducts from "../components/ListProducts";

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getLastProductsApi(20);  //Que se muestren los 20 últimos
      if (size(response) > 0) setProducts(response);
      else setProducts([]);
    })();
  }, []);

  return (
<<<<<<< HEAD
      <BasicLayout className="home">

      {!products && <Loader active>Cargando Productos</Loader>}
      {products && size(products) === 0 && (
        <div>
          <h3>No hay Productos</h3>
        </div>

      )}
      {size(products)>0 && <ListProducts products={products} />}
=======
    
      <BasicLayout className="">
      <h1>TelArte</h1>
      
>>>>>>> ec6fb20a425f8430f039c20886cc08fc6d0e29c9
      </BasicLayout>
  );
}