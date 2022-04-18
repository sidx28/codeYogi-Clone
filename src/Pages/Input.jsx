import React from 'react';
function Input(props) {
    return (
        <>
            <div className='w-full'>
                <input {...props} className='w-full rounded-md py-2 px-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />
            </div>
        </>
    );
}
export default Input;