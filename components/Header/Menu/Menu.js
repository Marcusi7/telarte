
import { useState } from "react";
import {Container, Menu, Grid, Icon, Label, GridColumn} from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth";


export default function MenuWeb() {
    
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("iniciar sesion");

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
                      <MenuOptions onShowModal={onShowModal} />
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
           <Link href="#">
                <Menu.Item as="a">Contacto</Menu.Item>
           </Link>

        </Menu>
    );
}

function MenuOptions(props) {
    const { onShowModal } = props;
    return(
        <Menu>
            <Menu.Item onClick={onShowModal}>
                <Icon name="user outline" />
                Mi cuenta
            </Menu.Item>
        </Menu>

    );
}