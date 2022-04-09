import MDEditor from '@uiw/react-md-editor';
import { DateTime } from 'luxon';
import React from 'react';
import H3 from '../H3';
function LectureTile(props) {
    const { created_at, topic, start_time, end_time, recording_url } = props.lecture;
    const redableDate = DateTime.fromISO(created_at).toLocaleString(DateTime.DATE_MED);
    const durationOfLecture = DateTime.fromISO(end_time).diff(DateTime.fromISO(start_time)).toFormat('hh:mm:ss');
    return (
        <>
            <li className='list-none'>
                <div className='w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5'>
                    <div className='flex items-center justify-between w-full p-3 space-x-6'>
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-row'>
                                <H3>Lecture #{props.length - props.i}</H3>
                                <span className='text-gray-500 ml-2'>( {redableDate} )</span>
                            </div>
                            <p className='text-gray-500 mt-1 text-sm'>Duration: {durationOfLecture}</p>
                        </div>
                    </div>
                    <div className='flex-shrink-0 inline-block mt-3 p-1 py-2 ml-10'>
                        <ul className='list-disc'>
                            <MDEditor.Markdown source={topic}
                            />
                        </ul>
                    </div>
                    <div className='flex justify-center px-8'>
                        <a href={recording_url} target='_blank' className='text-sm font-medium w-full text-center py-4 text-gray-500 hover:text-gray-700'>Watch/Download Recording</a>
                    </div>
                </div>
            </li>
        </>
    );
}
export default LectureTile;