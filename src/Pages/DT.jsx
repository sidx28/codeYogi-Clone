import React from 'react';
function DT(props) {
    return (
        <>
            <dt className='text-sm font-medium text-gray-500'>{props.children}</dt>
        </>
    );
}
export default DT;