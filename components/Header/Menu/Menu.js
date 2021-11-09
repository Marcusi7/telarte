
import {Container, Menu, Grid, Icon, Label, GridColumn} from "semantic-ui-react";
import Link from "next/link";

export default function MenuWeb() {
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
        </div>
    );
}


function MenuPlataforms() {
    return(
        <Menu>
            <Link href="#">
                <Menu.Item as="a">Telas</Menu.Item>
           </Link>
           <Link href="#">
                <Menu.Item as="a">Algodón</Menu.Item>
           </Link>
           <Link href="#">
                <Menu.Item as="a">Poliester</Menu.Item>
           </Link>
           <Link href="#">
                <Menu.Item as="a">Contacto</Menu.Item>
           </Link>
           <Link href="#">
                <Menu.Item as="a">Nosotres</Menu.Item>
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