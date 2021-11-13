import {Container} from "semantic-ui-react"; //Gracias a este contenedor, podemos configurar los layouts
import Header from "../../components/Header";


export default function BasicLayout(props) {
const {children} =props;    
return (
    <Container fluid className="basic-layout"> 
        <Header />
        <Container className="content">{children}</Container> 

        <footer className = "foo">
            <div>
            <section className = "seccionpie">
                <h1>CONTACTOS</h1><br></br>
                    <p>Dep. Administrativo: (02) 2265567 ext 1301</p><br></br>
                    <p>Recursos Humanos: (02) 2265567 ext 1701</p><br></br>
                    <p>email: uomovenetto@davos.com.ec</p>
            </section>
            <section className = "seccionpie">
                <h1>CONTACTOS</h1><br></br>
                    <p>Dep. Administrativo: (02) 2265567 ext 1301</p><br></br>
                    <p>Recursos Humanos: (02) 2265567 ext 1701</p><br></br>
                    <p>email: uomovenetto@davos.com.ec</p>
            </section>
            </div>
        </footer>

    </Container>
    //children ocupa hereda todas las renderizaciones del index.
    );

}