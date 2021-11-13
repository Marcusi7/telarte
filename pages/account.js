import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import { getMeApi} from "../api/user";
import useAuth from "../Hooks/useAuth";


export default function Account() {
    const [user, setUser] = useState(undefined);
    const { auth, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
      (async () => {
          const response = await getMeApi(logout);
          setUser(response || null)
      })()
    }, [auth]);

    if(user === undefined) return null;
    if(!auth && !user) {
        router.replace("/");
        return null;
    }

    return (
        <BasicLayout classname="account">
            <Configuration />
        </BasicLayout>
    );
}

function Configuration() {
    return(
        <div className="account_configuration">
                <div className="title">Configuracion</div> 
                <div className="data">Formularios de configuracion</div>
            </div>
    )
} 


