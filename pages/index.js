import React, {useState, useEffect} from "react";
//import {Loader} from "semantic-ui-react";
import { size } from "lodash";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import { getLastProductsApi } from "../api/product";

export default function Home() {
  const [products, setProducts] = useState(null);
  console.log(products);

  useEffect(() => {
    (async () => {
      const response = await getLastProductsApi(20);
      if (size(response) > 0) setProducts(response);
      else setProducts([]);
    })();
  }, []);

  return (
    
      <BasicLayout className="home">
      <h1>TelArte</h1>
      </BasicLayout>
  );
}
