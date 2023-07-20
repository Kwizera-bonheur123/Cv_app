import React, { useState } from 'react'
import Photo from './Images/Layer_1 (1).png'
import { useDispatch } from 'react-redux';
import { add } from "./detailSlice";
import { useNavigate } from 'react-router-dom';
const Education = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [schoolName, setSchoolName] = useState();
    const [degree, setDegree] = useState();
    const [field, setField] = useState();
    const [location, setLocation] = useState();
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const HundleSubmit = (e) => {
        e.preventDefault();
        const data = {
            schoolName: schoolName,
            degree: degree,
            field: field,
            location: location,
            start: start,
            end: end
        };
        dispatch(add(data));
        navigate("/technical");

    }

    return (
        <div className=' ml-28 mt-20'>
            <div>
                <h1 className=' text-blue-700 text-3xl font-serif'>Tell use about your education</h1>
                <h1 className=' text-blue-950 text-lg font-serif'>Include every school, even if you are still there or didn't graduate.</h1>
            </div>
            <div className=' flex gap-16'>
                <form onSubmit={HundleSubmit}>
                    <div className=' grid grid-cols-2 gap-5 mt-10'>
                        <div className=' grid gap-2'>
                            <label className=' text-blue-900 text-lg font-bold'>School Name:</label>
                            <input onChange={(e) => setSchoolName(e.target.value)} className=' border-2 h-[40px] w-[380px] pl-5 rounded-md border-blue-900' type='text' placeholder='e.g University of Rwanda'></input>
                        </div>
                        <div className=' grid gap-2'>
                            <label className=' text-blue-900 text-lg font-bold'>Degree</label>
                            <input onChange={(e) => setDegree(e.target.value)} type='text' className=' border-2 h-[40px] w-[380px] pl-5 rounded-md border-blue-900' placeholder='e.g High school diploma'></input>
                        </div>
                        <div className=' grid gap-2'>
                            <label className=' text-blue-900 text-lg font-bold'>Field of study</label>
                            <input onChange={(e) => setField(e.target.value)} type='text' className=' border-2 h-[40px] w-[380px] pl-5 rounded-md border-blue-900' placeholder='e.g Accounting'></input>
                        </div>
                        <div className=' grid gap-2'>
                            <label className=' text-blue-900 text-lg font-bold'>School location</label>
                            <input onChange={(e) => setLocation(e.target.value)} type='text' className=' border-2 h-[40px] w-[380px] pl-5 rounded-md border-blue-900' placeholder='e.g Huye sourthen province'></input>
                        </div>
                        <div className=' grid gap-2'>
                            <label className=' text-blue-900 text-lg font-bold'>Graduate start Date</label>
                            <input onChange={(e) => setStart(e.target.value)} className=' border-2 h-[40px] w-[380px] pl-5 rounded-md border-blue-900' type='date'></input>
                        </div>
                        <div className=' grid gap-2'>
                            <label className=' text-blue-900 text-lg font-bold'>Graduate end Date</label>
                            <input onChange={(e) => setEnd(e.target.value)} className=' border-2 h-[40px] w-[380px] pl-5 rounded-md border-blue-900' type='date'></input>
                        </div>
                    </div>
                    <div className=' flex gap-5 mt-9 w-full'>
                        <input className='border-2 h-[55px] w-[380px] rounded-lg border-blue-900 text-blue-900 font-bold ' value="BACK" type='reset'></input>
                        <input type='submit' className='border-2 h-[55px] w-[380px] rounded-xl text-white font-bold bg-blue-900 text-xl' value="NEXT WORK HISTORY" ></input>
                    </div>
                </form>
                <div>
                    <img src={Photo} className='h-[120%] w-[70%] mr-[90px]'></img>
                </div>
            </div>
        </div>
    )
}

export default Education
