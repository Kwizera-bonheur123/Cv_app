import React from 'react'
import { useSelector } from 'react-redux'
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Summary = () => {
    const person = useSelector((state) => state.detail.detail);
    const navigate = useNavigate();
    return (
        <div className=" px-[15%] py-[8%]">
            <h1 className=' text-3xl text-blue-900 font-semibold'>Work History summary</h1>
            <div className=' w-full bg-gray-100 min-h-[200px] shadow-gray-500 rounded-md px-[5%] shadow-lg py-5'>
                <div className='bg-white shadow-md shadow-gray-400 min-w-full min-h-[150px] rounded-xl'>
                    <h1 className=' text-center font-extrabold text-blue-900 text-lg pt-5'>{person.jobtitle + ", " + person.employer + " | " + person.city + ", " + person.country}</h1>
                    <h1 className=' text-center font-semibold pt-5 text-lg text-blue-950'>{person.description}</h1>
                </div>
                <div className=' w-full h-[45px] rounded-lg pl-[40%] bg-blue-950 pt-2 flex mt-5 cursor-pointer'>
                    <FaPlus size={20} className=' text-white pt-2' />
                    <h1 className=' text-center text-white font-bold text-xl'>Add another position</h1>
                </div>
            </div>
            <div className=' flex justify-between mt-10'>
                <button onClick={() => navigate("/")} className=' w-[35%] bg-blue-900 text-white font-bold h-14'>BACK</button>
                <button onClick={() => navigate("/education")} className=' w-[35%] bg-blue-900 text-white font-bold h-14'>NEXT: EDUCATION</button>
            </div>
        </div>
    )
}

export default Summary;
