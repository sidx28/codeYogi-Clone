import React from 'react';
function DD(props) {
    return (
        <>
            <dd className='text-sm text-gray-900 col-span-2'>{props.children}</dd>
        </>
    );
}
export default DD;