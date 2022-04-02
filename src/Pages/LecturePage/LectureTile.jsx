import React from 'react';
import H3 from '../H3';
function LectureTile(props) {
    return (
        <>
            <li>
                <div className='w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5'>
                    <div className='flex items-center justify-between w-full p-3 space-x-6'>
                        <div className='flex flex-col justify-between sm:items-center sm:flex-row'>
                            <div>
                                <H3>Lecture # 3</H3>
                                <span className='text-gray-500'>(dsgsd)</span>
                            </div>
                            <p className='text-gray-500 mt-1 text-sm'>duration:</p>
                        </div>
                    </div>

                </div>
            </li>
        </>
    );
}
export default LectureTile;