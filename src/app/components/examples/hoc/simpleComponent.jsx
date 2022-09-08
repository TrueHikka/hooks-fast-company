import React from "react";

const SimpleComponent = ({ onLogIn, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button className="btn btn-primary" onClick={onLogOut}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary" onClick={onLogIn}>
                    Войти
                </button>
            )}
        </>
    );
};

export default SimpleComponent;
