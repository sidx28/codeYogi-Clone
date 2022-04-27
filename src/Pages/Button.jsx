import React from 'react';
function Button(props) {
    let themeClass = "relative inline-flex items-center justify-center flex-1 w-full py-4 font-medium text-center text-green-600 border-transparent hover:text-green-700";
    if (props.theme === 'secondary') {
        themeClass = 'relative flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 items-center focus:outline-none focus:ring-2 focus:ring-offset-2 m-1 group focus:ring-indigo-500 py-2 ';
        if (props.padding === 'small') {
            themeClass = themeClass + 'px-4';
        }
        if (props.padding === 'large') {
            themeClass = themeClass + 'px-10';
        }
    };
    return (
        <>
            <button {...props} className={themeClass}>
                <div className="flex flex-row justify-between items-center">
                    {props.icon}
                    {props.children}
                </div>
            </button>
        </>
    );
}
export default Button;