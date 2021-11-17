import {Container} from "semantic-ui-react"; //Gracias a este contenedor, podemos configurar los layouts
import classNames from "classnames";
import Header from "../../components/Header";


export default function BasicLayout(props) {
const { children, className } =props;   

return (

    //className="basic-layout"
    <Container fluid className={classNames("basic-layout", {
        [className]: className,
    })}
    > 
        <Header />
        <Container className="content">{children}</Container> 

        <footer className = "foo">
            <div>
            <section className = "seccionpie">
                <h3>TELARTE</h3>
                    <p><b>Ubicación: </b>Av. 12 de Octubre 1076 y Vicente Ramón Roca</p>
                    <p><b>Teléfono: </b>(02) 2265567 ext 1701</p>
                    <p><b>Contacto: </b>jalarcon@puce.com.ec</p>
            </section>
            <section className = "seccionpie">
                <h3>POPULARES</h3>
                    <p><a href="../productos/dormitorio">Ropa de cama</a></p>
                    <p><a href="../productos/cuarto-de-bano">Accesorios para el baño</a></p>
                    <p><a href="../productos/hogar">Artículos varios</a></p>
            </section>
            <section className = "seccionpie2">
                <p>® Todos los derechos reservados TelArte - JC Tech Solutions - 2021</p>
            </section>
            </div>
        </footer>

    </Container>
    //children ocupa hereda todas las renderizaciones del index.
    );

}