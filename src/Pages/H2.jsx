import React from 'react';
function H1(props) {
    return (
        <>
            <h1 className="pt-10 mb-5 text-xl font-semibold">{props.children}</h1>
        </>
    );
}
export default H1;