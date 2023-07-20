import React from 'react';
import { useSelector } from 'react-redux';
import Image from './Images/Group 119060.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './detailSlice'
import { useNavigate } from 'react-router-dom'
const Description = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const person = useSelector((state) => state.detail.detail);
  const [description, setDescription] = useState();
  function HandleSubmit(e) {
    e.preventDefault();
    const data = { description: description };
    dispatch(add(data));
    navigate("/summary");
  }
  return (
    <div className=' flex w-full p-[13%] justify-between pt-[5%]'>
      <div>
        <div className=' '>
          <h1 className=' text-blue-900 font-semibold whitespace-nowrap text-3xl'>Nice! Now let's add the job description</h1>
          <h1 className=' text-blue-700 font-bold text-2xl mt-4'>{person.jobtitle + " | " + person.employer}</h1>
          <h1 className=' text-blue-950 font-semibold text-lg'>{"From " + person.startdate + " To " + person.enddate}</h1>
          <form onSubmit={HandleSubmit} className=' mt-8'>
            <textarea onChange={(e) => setDescription(e.target.value)} className=' border-blue-900 border-2 h-[220px] rounded-xl w-full pl-5 pt-5 text-md font-semibold'></textarea>
            <div className=' flex gap-[20%] mt-4'>
              <input type='reset' value="BACK" className=' text-blue-900 font-bold text-xl rounded-xl border-2 border-blue-900 h-[50px] w-[40%]'></input>
              <input type='submit' value="NEXT" className=' rounded-xl text-white text-xl font-bold bg-blue-900 w-[40%] h-[50px]'></input>
            </div>
          </form>
        </div>
      </div>
      <img src={Image}></img>
    </div>
  )
}

export default Description
