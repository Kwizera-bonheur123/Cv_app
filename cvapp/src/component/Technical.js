import React, { useState } from 'react'
import Photo from './Images/Layer_1 (1).png'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { add } from './detailSlice';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
const Technical = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [editorData, setEditorData] = useState('');

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditorData(data);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const sent = { technical_profile: editorData };
        dispatch(add(sent));
        navigate("/")

    }
    return (
        <div className=' flex gap-8 mt-[5%] mx-[15%]'>
            <form onSubmit={handleSubmit} className=' h-[300px]'>
                <label className=' text-blue-900 text-2xl font-medium'>Technical profile</label>
                <CKEditor
                    editor={ClassicEditor}
                    data={editorData}
                    onChange={handleEditorChange}
                />
                <div className=' flex gap-5 mt-9 w-full'>
                    <input className='border-2 h-[55px] w-[380px] rounded-lg border-blue-900 text-blue-900 font-bold ' value="BACK" type='reset'></input>
                    <input type='submit' className='border-2 h-[55px] w-[380px] rounded-xl text-white font-bold bg-blue-900 text-xl' value="NEXT WORK HISTORY" ></input>
                </div>
            </form>
            <div>
                <img src={Photo} className='h-[100%] w-[70%]'></img>
            </div>
        </div>
    )
}

export default Technical
