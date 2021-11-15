import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import { getMeApi } from "../api/user";
import useAuth from "../Hooks/useAuth";
import ChangeNameForm from "../components/Account/ChangeNameForm/ChangeNameForm";
import ChangeEmailForm from "../components/Account/ChangeEmailForm/ChangeEmailForm";
import ChangePasswordForm from "../components/Account/ChangePasswordForm";

export default function Account() {
    const [user, setUser] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
      (async () => {
          const response = await getMeApi(logout);
          setUser(response || null);
      })();
    }, [auth]);

    if(user === undefined) return null;
    if(!auth && !user) {
        router.replace("/");
        return null;
    }

    return (
        <BasicLayout classname="account">
            <Configuration 
                user={user} 
                logout={logout} 
                setReloadUser={setReloadUser}
            />
        </BasicLayout>
    );
}

function Configuration(props) {
    const { user, logout, setReloadUser} = props;
    return(
        <div className="account_configuration">
                <div className="title">
                    Configuración
                </div> 
                <div className="data">
                    <ChangeNameForm 
                        user={user} 
                        logout={logout} 
                        setReloadUser={setReloadUser}
                    />
                    <ChangeEmailForm 
                        user={user} 
                        logout={logout} 
                        setReloadUser={setReloadUser}
                    />
                    <ChangePasswordForm 
                        user={user} 
                        logout={logout} 
                    />
                </div>
        </div>
    );
} 


