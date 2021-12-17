import React from 'react'

function Logout() {

    localStorage.removeItem("token");

    return (
        <div>
            <h1>Logged out successfully.</h1>
        </div>
    )
}

export default Logout
