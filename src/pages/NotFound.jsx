import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div>Page not found</div>
            <br/>
            <div>
                <Link to="/">Back to main page!</Link>
            </div>
        </>
    );
}

export default NotFound;
