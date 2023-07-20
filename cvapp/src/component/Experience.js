import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from './detailSlice';
import Photo from './Images/Layer_1 (1).png'
import { useNavigate } from 'react-router-dom';
const Information = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [jobtitle, setJobtitle] = useState();
  const [employer, setEmployer] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();
  function HandleSubmit(e) {
    e.preventDefault();
    const data = {
      jobtitle: jobtitle,
      employer: employer,
      city: city,
      country: country,
      startdate: startdate,
      enddate: enddate
    };
    dispatch(add(data));
    navigate("/summary");
  }
  return (
    <div className='h-screen w-full top-0'>
      <div className=' pt-[5%]'>
        <h1 className=' ml-[15%] text-blue-950 font-semibold text-3xl'>Tell us about your most recent job</h1>
        <h1 className=' ml-[15%] text-blue-400 font-semibold text-xl'>We’ll start there and work backward.</h1>
        <div className=' flex mt-12 ml-[15%] gap-28'>
          <form onSubmit={HandleSubmit}>
            <div className=' flex gap-6'>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>Job Title</label>
                <input onChange={(e) => setJobtitle(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='text' placeholder='e.g Bonheur'></input>
              </div>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>Employer</label>
                <input onChange={(e) => setEmployer(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='text' placeholder='e.g Bonheur'></input>
              </div>
            </div>
            <div className=' flex gap-6'>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>Country</label>
                <input onChange={(e) => setCountry(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='text' placeholder='e.g Bonheur'></input>
              </div>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>City</label>
                <input onChange={(e) => setCity(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='text' placeholder='e.g Bonheur'></input>
              </div>
            </div>
            <div className=' flex gap-6'>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>Start Date</label>
                <input onChange={(e) => setStartdate(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='date' placeholder='e.g +250781454225'></input>
              </div>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>End Date</label>
                <input onChange={(e) => setEnddate(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='date' placeholder='e.g kbonheur123@gmail.com'></input>
              </div>
            </div>
            <div className=' flex gap-6 mt-9'>
              <div className=' grid gap-2'>
                <input className='border-2 h-[55px] w-[280px] rounded-lg border-blue-900 text-blue-900 font-bold ' value="BACK" type='reset'></input>
              </div>
              <div className=' grid gap-2'>
                <input type='submit' className='border-2 h-[55px] w-[280px] rounded-xl text-white font-bold bg-blue-900 text-xl' value="NEXT WORK HISTORY" ></input>
              </div>
            </div>
          </form>
          <div>
            <img src={Photo} className='h-[100%] w-[70%]'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
