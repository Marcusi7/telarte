import {Container} from "semantic-ui-react"; //Gracias a este contenedor, podemos configurar los layouts
import Header from "../../components/Header";


export default function BasicLayout(props) {
const {children} =props;    
return (
    <Container fluid className="basic-layout"> 
        <Header />
        <Container className="content">{children}</Container> 
    </Container>
//children ocupa hereda todas las renderizaciones del index.
);

}