
import React, { useState, useEffect } from "react";
import {Container, Menu, Grid, Icon, Label, GridColumn} from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth";
import useAuth from "../../../Hooks/useAuth";
import { getMeApi } from "../../../api/user";

export default function MenuWeb() {
    
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("iniciar sesion");
    const [user, setUser] = useState(undefined); 
    const { auth, logout } = useAuth();

    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout);
            setUser(response);
        })();
    }, [auth]);

    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);

    return (
        <div className="menu">
          <Container>
              <Grid>
                  <Grid.Column className="menu__left" width={6}>
                      <MenuPlataforms />
                      
                  </Grid.Column>
                  <Grid.Column className="menu__right" width={10}>
                    {user !== undefined && (
                    <MenuOptions 
                        onShowModal={onShowModal} 
                        user={user} 
                        logout={logout}
                        />
                    )}
                    

                      
                  </Grid.Column>
              </Grid>
          </Container>
          <BasicModal 
          show={showModal} 
          setShow={setShowModal} 
          title={titleModal} 
          size="small">
              <Auth onCloseModal={onCloseModal} 
              setTitleModal={setTitleModal}/>
          </BasicModal >
        </div>
    );
}


function MenuPlataforms() {
    return(
        <Menu>
            <Link href="index.html">
                <Menu.Item as="a">Inicio</Menu.Item>
           </Link>
            <Link href="#">
                <Menu.Item as="a">Dormitorio</Menu.Item>
           </Link>
           <Link href="#">
                <Menu.Item as="a">Cuarto de Baño</Menu.Item>
           </Link>
           <Link href="#">
                <Menu.Item as="a">Hogar</Menu.Item>
           </Link>
           <Link href="#">
                <Menu.Item as="a">Acerca de</Menu.Item>
           </Link>
          

        </Menu>
    );
}

function MenuOptions(props) {
    const { onShowModal, user, logout } = props;
    return(
        <Menu>
            {user ? (
                <>
                    <Link href="/pedido">
                        <Menu.Item as="a">
                        <Icon name="cart"/> 
                        Mis artículos
                        </Menu.Item>
                    </Link>

                    <Link href="/cuenta">
                        <Menu.Item as="a">
                        <Icon name="user ontline"/> 
                        {user.name} {user.lastname}
                    </Menu.Item>
                    </Link>

                    <Link href="/cart">
                        <Menu.Item as="a" className="m-0">
                        <Icon name="cart"/> 
                        </Menu.Item>
                    </Link>
                    
                    <Menu.Item className="m-0" onClick={logout}>
                    <Icon name="power off"/>
                    </Menu.Item>
                </>    
            ) : (
            <Menu.Item onClick={onShowModal}>
                <Icon name="user outline" />
                Mi cuenta
            </Menu.Item>
            )}
        </Menu>
    );
}