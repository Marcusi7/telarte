import React, { useState, useEffect } from "react";
import {Container, Menu, Grid, Icon } from "semantic-ui-react";
import Link from "next/link";
import { map } from "lodash";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth";
import useAuth from "../../../Hooks/useAuth";
import { getMeApi } from "../../../api/user";
import { getCategoriasApi } from "../../../api/categoria";

export default function MenuWeb() {
    
    const [categorias, setCategorias] = useState([]);
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

    useEffect(() => {
        (async () => {
            const response = await getCategoriasApi();
            setCategorias(response || []);
        })();//función anónima que se autoejecuta
    }, []);

    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);

    return (
        <div className="menu">
          <Container>
              <Grid>
                  <Grid.Column className="menu__left" width={6}>
                      <MenuPlatforms categorias={categorias} />               
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

function MenuPlatforms(props) {
    const { categorias } = props;

    return(
        <Menu>
<<<<<<< HEAD
          {map(categorias, (categoria) => (
              <Link href={`/productos/${categoria.url}`} key={categoria._id}>
                  <Menu.Item as="a" name={categoria.url}>
                    {categoria.title}
                  </Menu.Item>
              </Link>
          ))}
=======
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

           </Link>
          

>>>>>>> ec6fb20a425f8430f039c20886cc08fc6d0e29c9
        </Menu>
    );
}

function MenuOptions(props) {
    const { onShowModal, user, logout } = props;
    return(
        <Menu>
            {user ? (
                <>
                    <Link href="/orders">
                        <Menu.Item as="a">
                        <Icon name="cart"/> 
                        Mis artículos
                        </Menu.Item>
                    </Link>

                    <Link href="/account">
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