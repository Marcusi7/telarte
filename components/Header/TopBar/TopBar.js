import { Container, Grid, Image, Input } from "semantic-ui-react";
import Link from "next/link";

export default function TopBar() {
    return (
        <div className="top-bar">
            <Container>
                <Grid className="top-bar">
                    <Grid.Column width={2} className="top-bar_left">
                        <Logo />
                    </Grid.Column>
                    <Grid.Column width={14} className="top-bar_right">
                        <Search/>
                    </Grid.Column>
                </Grid>
            </Container> 
            
        </div>
    );
}

function Logo() {
    return (
        <Link href="/">
            <a>
            <Image src="https://telarte.s3.amazonaws.com/telarte_logo.png" alt="Textiles" width="95px" heigh="95px"/>
            </a>
        </Link>
    );
}

function Search() {
    return(
        <Input id="search-obj" icon={{ name: "search"}} />
    );
}