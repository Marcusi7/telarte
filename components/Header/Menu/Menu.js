
import { useState } from "react";
import {Container, Menu, Grid, Icon, Label, GridColumn} from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";


export default function MenuWeb() {
const {showModal, state, setstate} = useState(intialState)

    return (
        <div className="menu">
          <Container>
              <Grid>
                  <Grid.Column className="menu__left" width={6}>
                      <MenuPlataforms />
                  </Grid.Column>
                  <Grid.Column className="menu__right" width={10}>
                      <MenuOptions />
                  </Grid.Column>
              </Grid>
          </Container>
          <BasicModal>
              <h2>Contenido de modal</h2>
          </BasicModal >
        </div>
    );
}


function MenuPlataforms() {
    return(
        <Menu>
            <Link href="index.html">
                <Menu.Item as="a">Home</Menu.Item>
           </Link>
            <Link href="#">
                <Menu.Item as="a">Tela</Menu.Item>
           </Link>
           <Link href="#">
                <Menu.Item as="a">Algodón</Menu.Item>
           </Link>
           <Link href="#">
                <Menu.Item as="a">Poliester</Menu.Item>
           </Link>
           <Link href="#">
                <Menu.Item as="a">Nosotros</Menu.Item>
           </Link>
           <Link href="#">
                <Menu.Item as="a">Contacto</Menu.Item>
           </Link>

        </Menu>
    );
}

function MenuOptions() {
    return(
        <Menu>
            <Menu.Item>
                <Icon name="user outline" />
                Mi cuenta
            </Menu.Item>
        </Menu>

    );
}