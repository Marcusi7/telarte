import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import BasicLayout  from '../layouts/BasicLayout/BasicLayout';

export default function Product() {
    const {query} =useRouter();
    

    return (
        <BasicLayout className="game">
            <h1>Estamos en Product: {query.product} </h1>
        </BasicLayout>
    );
}
