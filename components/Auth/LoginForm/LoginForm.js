import React, { useState } from "react";
import { Form, Button} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
import { loginApi, resetPasswordApi } from "../../../api/user";

export default function LoginForm(props) {
    
    const {showRegisterForm, onCloseModal} = props;
    const [loading, setLoading] = useState(false);
    const { login} = useAuth();


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await loginApi(formData);
            //console.log(response);
            if(response?.jwt) {
                toast.success("Se ha iniciado correctamente");
                login(response.jwt);
                onCloseModal();           
            } else {
                toast.error("El correo o contraseña son incorrectos!");
            }
            setLoading(false);
        },
    });

    const resetPassword = () => {
        formik.setErrors({});
        const validateEmail = Yup.string().email().required();
        
        console.log(formik.values.identifier);

        if (!validateEmail.isValidSync(formik.values.identifier)) {
            console.log("email incorrecto");
            formik.setErrors({ identifier: true});
        } else {
            resetPasswordApi(formik.values.identifier);
        }

    };

    return (
        <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Form.Input
                name="identifier"
                type="text"
                placeholder="Correo Electrónico"
                onChange={formik.handleChange}
                error = {formik.errors.identifier}
            />
            <Form.Input
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={formik.handleChange}
                error={formik.errors.password}
            />

            
            <div className="actions">
                <Button type="button" basic onClick={showRegisterForm}>
                    Registrarse
                </Button>
                <div>
                    <Button className="submit" type="submit" loading={loading}>
                        Entrar
                    </Button>
                    <Button type="button" onClick={resetPassword}> ¿Has olvidado tu contraseña?
                    </Button>
                </div>
            </div>
            </Form>
    );
}

function initialValues() {
    return {
        identifier: "",
        password: "",
    };

}

function validationSchema(){
    return {
        identifier: Yup.string().email().required(true),
        password: Yup.string().required(true),
    };
}
