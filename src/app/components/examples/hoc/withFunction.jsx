import React from "react";
import CardWrapper from "../../common/Card";

const withFunction = (SimpleComponent) => () => {
    const isAuth = localStorage.getItem("auth");

    const onLogIn = () => {
        return localStorage.setItem("auth", "token");
    };

    const onLogOut = () => {
        return localStorage.removeItem("auth");
    };

    return (
        <>
            <CardWrapper>
                <SimpleComponent
                    onLogIn={onLogIn}
                    onLogOut={onLogOut}
                    isAuth={isAuth}
                />
            </CardWrapper>
        </>
    );
};

export default withFunction;
