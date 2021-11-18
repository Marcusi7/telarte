import React from "react";
import { Tab } from "semantic-ui-react";
import InfoProduct from "../InfoProduct";

export default function TabsProduct(props) {
    const  { product } =props;

    const panes = [
        {
          menuItem: "Galería",
          render: () => (
            <Tab.Pane>
              <InfoProduct product={product}/>
            </Tab.Pane>
          ),
        },     
      ];

    return <Tab className="tabs-product" panes={panes} />;
    
}