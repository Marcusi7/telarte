import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import { getMeApi } from "../api/user";
import useAuth from "../Hooks/useAuth";
import ChangeNameForm from "../components/Account/ChangeNameForm/ChangeNameForm";
import ChangeEmailForm from "../components/Account/ChangeEmailForm/ChangeEmailForm";
import ChangePasswordForm from "../components/Account/ChangePasswordForm";
import BasicModal from "../components/Modal/BasicModal";
import AddressForm from "../components/Account/AddressForm";
import ListAddress from "../components/Account/ListAddress";

export default function Account() {
    const [user, setUser] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
      (async () => {
          const response = await getMeApi(logout);
          setUser(response || null);
      })();
    }, [auth]);

    if(user === undefined) return null;
    if(!auth && !user) {
        router.replace("/");
        return null;
    }

    return (
        <BasicLayout className="account">
            <Configuration 
                user={user} 
                logout={logout} 
                setReloadUser={setReloadUser}
            />
            <Addresses />
        </BasicLayout>
    );
}

function Configuration(props) {
    const { user, logout, setReloadUser} = props;
    return(
        <div className="account_configuration">
                <div className="title">
                    Configuración
                </div> 
                <div className="data">
                    <ChangeNameForm 
                        user={user} 
                        logout={logout} 
                        setReloadUser={setReloadUser}
                    />
                    <ChangeEmailForm 
                        user={user} 
                        logout={logout} 
                        setReloadUser={setReloadUser}
                    />
                    <ChangePasswordForm 
                        user={user} 
                        logout={logout} 
                    />
                </div>
        </div>
    );
} 

function Addresses() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [formModal, setFormModal] = useState(null);
    

    const openModal = (title) => {
        setTitleModal(title);
        setFormModal(<AddressForm setShowModal={setShowModal} />);
        setShowModal(true);
    };

    return (
        <div className="account__addresses">
            //doble guion bajo
            <div className="title">
                Dirección
                <Icon name="plus" link onClick={() => openModal("Nueva Dirección")}/>
            </div>
            <div className="data"> 
            //Data en minuscula
                <ListAddress />
            </div>

            <BasicModal show={showModal} setShow={setShowModal} tittle={titleModal}>
                {formModal}
            </BasicModal>
        </div>
    );
}


