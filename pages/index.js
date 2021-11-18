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
      <BasicLayout className="home">

      {!products && <Loader active>Cargando Productos</Loader>}
      {products && size(products) === 0 && (
        <div>
          <h3>No hay Productos</h3>
        </div>

      )}
      {size(products)>0 && <ListProducts products={products} />}
      </BasicLayout>
  );
}