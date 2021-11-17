import React from 'react';
import { useRouter } from 'next/router';
import BasicLayout from '../../layouts/BasicLayout/BasicLayout';

export default function Categoria() {
    const { query } = useRouter();

    return (
        <BasicLayout className="categoria">
            <h1>Estamos en las categoría: {query.categoria}</h1>
        </BasicLayout>
    )
}
