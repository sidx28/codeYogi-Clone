import React from 'react';
import H3 from '../H3';

function LectureTile(props) {
    const { lectureNumber, createdOn, duration, topics, videoLink } = props.lecture;
    return (
        <>
            <li className='list-none'>
                <div className='w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5'>
                    <div className='flex items-center justify-between w-full p-3 space-x-6'>
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-row'>
                                <H3>Lecture #{lectureNumber}</H3>
                                <span className='text-gray-500'>( {createdOn} )</span>
                            </div>
                            <p className='text-gray-500 mt-1 text-sm'>Duration: {duration}</p>
                        </div>
                    </div>
                    <div className='flex-shrink-0 inline-block mt-3 p-1 py-2 ml-10'>
                        <ul className='list-disc'>
                            {topics.map(e => <li key={e}>{e}</li>)}
                        </ul>
                    </div>
                    <div className='flex justify-center px-8'>
                        <a href={videoLink} className='text-sm font-medium w-full text-center py-4 text-gray-500 hover:text-gray-700' target='_blank'>Watch/Download Recording</a>
                    </div>
                </div>
            </li>
        </>
    );
}
export default LectureTile;