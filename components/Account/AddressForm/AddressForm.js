import React, { useState } from 'react'
import { Form, Button} from "semantic-ui-react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import useAuth from '../../../Hooks/useAuth';
import { createAddressApi } from '../../../api/address';

export default function AddressForm(props) {
    const {setShowModal, setReloadAddresses}=props;
    const [loading, setLoading] = useState(false);
    const { auth, logout } = useAuth(); 

    const formik=useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData)=>{
            createAddress(formData);
        },
    });

    const createAddress = async (formData) =>  {
        setLoading(true);
        const formDataTemp = {
            ...formData,
            user: auth.idUser,
        };
        console.log(formDataTemp); //ok
        const response = await createAddressApi(formDataTemp, logout);
        
        if(!response){
            toast.warning("Error al crear dirección");
            setLoading(false);
        }else {
            formik.resetForm();
            setReloadAddresses(true);
            setLoading(false);
            setShowModal(false);
        }  
    };

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input 
                name="title"
                type="text"
                label="Título de la Dirección"
                placeholder="Escriba el nombre para su Dirección"
                onChange={formik.handleChange}
                value={formik.values.title}
                error={formik.errors.title}
            />

            <Form.Group widths="equal">
                <Form.Input
                    name="name"
                    type="text"
                    label="Nombre y Apellidos"
                    placeholder="Escriba su Nombre y su Apellido"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name}
                />
                <Form.Input
                    name="phone"
                    type = "text"
                    label="Teléfono"
                    placeholder="Digite su número de teléfono"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    error={formik.errors.phone}
                />
            </Form.Group>

            <Form.Group widths="equal">
                <Form.Input
                    name="state"
                    type = "text"
                    label="Provincia"
                    placeholder="Escriba la Provincia"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    error={formik.errors.state}
                />
                <Form.Input
                    name="city"
                    type="text"
                    label="Ciudad"
                    placeholder="Nombre de la ciudad"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    error={formik.errors.city}
                />
            </Form.Group>

            <Form.Input 
                name="address"
                type="text"
                label="Dirección"
                placeholder="Escriba su dirección completa aquí"
                onChange={formik.handleChange}
                value={formik.values.address}
                error={formik.errors.address}
            />

            <div className="actions">
                <Button className="submit" type="submit" loading={loading}>
                    Crear Dirección
                </Button>
            </div>

        </Form>
    );
}

function initialValues() {
    return {
        title: "",
        name: "",
        phone: "",
        state: "",
        city: "", 
        address: "",
    };
}

function validationSchema() {
    return{
        title: Yup.string().required(true),
        name: Yup.string().required(true),
        phone: Yup.string().required(true),
        state: Yup.string().required(true),
        city: Yup.string().required(true),
        address: Yup.string().required(true),
    };
}