import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from './detailSlice';
import Photo from './Images/Layer_1 (1).png'
import { useNavigate } from 'react-router-dom';
const Reference = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [referenceName, setReferenceName] = useState();
    const [referencePosition, setReferencePosition] = useState();
    const [referenceEmail, setReferenceEmail] = useState();
    const [referenceTel, setReferenceTel] = useState();
    function HandleSubmit(e) {
        e.preventDefault();
        const data = {
            reference: [
                {
                    name: referenceName,
                    position: referencePosition,
                    email: referenceEmail,
                    tel: referenceTel

                }
            ]
        };
        dispatch(add(data));
        navigate("/yourcv");
    }
    return (
        <div className='h-screen w-full top-0'>
            <div className=' pt-[5%]'>
                <h1 className=' ml-[15%] text-blue-950 font-serif text-[50px]'>Tell us who knows you for more Information</h1>
                <h1 className=' ml-[15%] text-blue-400 font-semibold text-xl'>We’ll start there and work backward.</h1>
                <div className=' flex mt-6 ml-[15%] gap-28'>
                    <form onSubmit={HandleSubmit}>
                        <div className=' flex gap-6'>
                            <div className=' grid gap-2'>
                                <label className=' text-blue-900 font-bold text-lg'>Refence name</label>
                                <input onChange={(e) => setReferenceName(e.target.value)} className='border-2 h-[40px] w-full pl-5 rounded-md border-blue-900' type='text' placeholder='Add your reference name'></input>
                                <label className=' text-blue-900 font-bold text-lg'>Reference job position</label>
                                <input onChange={(e) => setReferencePosition(e.target.value)} className='border-2 h-[40px] w-full pl-5 rounded-md border-blue-900' type='text' placeholder='Add your skills'></input>
                                <label className=' text-blue-900 font-bold text-lg'>Reference Email</label>
                                <input onChange={(e) => setReferenceEmail(e.target.value)} className='border-2 h-[40px] w-full pl-5 rounded-md border-blue-900' type='text' placeholder='Add your skills'></input>
                                <label className=' text-blue-900 font-bold text-lg'>Reference Telephone</label>
                                <input onChange={(e) => setReferenceTel(e.target.value)} className='border-2 h-[40px] w-full pl-5 rounded-md border-blue-900' type='text' placeholder='Add your skills'></input>
                                <div className=' flex gap-6 mt-9'>
                                    <div className=' grid gap-2'>
                                        <input className='border-2 h-[55px] w-[280px] rounded-lg border-blue-900 text-blue-900 font-bold ' value="BACK" type='reset'></input>
                                    </div>
                                    <div className=' grid gap-2'>
                                        <input type='submit' className='border-2 h-[55px] w-[280px] rounded-xl text-white font-bold bg-blue-900 text-xl' value="NEXT" ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className=' -mt-[5%]'>
                        <img src={Photo} className='h-[100%] w-[80%]'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reference