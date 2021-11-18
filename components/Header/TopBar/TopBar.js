import React, { useState, useEffect } from "react";
import { Container, Grid, Image, Input } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TopBar() {
    return (
        <div className="top-bar">
            <Container>
                <Grid className="top-bar">
                    <Grid.Column width={6} className="top-bar_left">
                        <Logo />
                    </Grid.Column>
                    <Grid.Column width={10} className="top-bar_right">
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
            <Image src="https://telarte.s3.amazonaws.com/telarte_log_4759a66867.png" alt="Textiles" width="200px" heigh="120px"/>
            </a>
        </Link>
    );
}


function Search() {
    const [searchStr, setSearchStr] = useState("");
    const [load, setLoad] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(load) {
            router.push(`/search?query=${searchStr}`);
        }
        setLoad(true);
    }, [searchStr]);

    return(
        <Input 
        id="search-obj" 
        icon={{ name: "search"}}
        value={router.query.query}
        onChange={(_, data) => setSearchStr(data.value)}
        />
    );
}