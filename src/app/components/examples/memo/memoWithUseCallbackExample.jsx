import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LofOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            LogOut
        </button>
    );
};

LofOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOutButton = React.memo(LofOutButton, areEqual); //! Заместо 1 передаем функцию areEqual

//! 1
// const MemoizedLogOutButton = React.memo(LofOutButton, (prevProps, nextProps) => {
// 	if(prevProps===nextProps) return true
// 	return false
// })

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);

    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    // const handleLogOut = () => {
    // 	localStorage.removeItem('auth')
    // }

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
