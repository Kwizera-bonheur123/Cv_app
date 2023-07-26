import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from './detailSlice';
import Photo from './Images/Layer_1 (1).png'
import { useNavigate } from 'react-router-dom';
const Information = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [profession, setProfession] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  function HandleSubmit(e) {
    e.preventDefault();
    const data = {
      fname: fname,
      lname: lname,
      profession: profession,
      city: city,
      country: country,
      email: email,
      phone: phone
    };
    dispatch(add(data));
    navigate("/education");
  }
  return (
    <div className='h-screen w-full top-0'>
      <div className=' pt-[5%]'>
        <h1 className=' text-center text-blue-950 font-semibold text-3xl'>What’s the best way for employers to contact you?</h1>
        <h1 className=' text-center text-blue-400 font-semibold text-xl'>All field are mandatory</h1>
        <div className=' flex mt-12 ml-[15%] gap-28'>
          <form onSubmit={HandleSubmit}>

            <div className=' flex gap-6'>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>First Name</label>
                <input onChange={(e) => setFname(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='text' placeholder='e.g Bonheur'></input>
              </div>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>Last Name</label>
                <input onChange={(e) => setLname(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='text' placeholder='e.g NYIRAGITARIRO'></input>
              </div>
            </div>
            <div className='grid gap-2 mt-4'>
              <label className=' text-blue-900 font-bold text-lg'>Profession</label>
              <input onChange={(e) => setProfession(e.target.value)} className='border-2 h-[40px] w-full pl-5 rounded-md border-blue-900' type="text" placeholder='e.g Sr Accountant' ></input>
            </div>
            <div className=' flex gap-6'>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>Country</label>
                <input onChange={(e) => setCountry(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='text' placeholder='e.g Burundi'></input>
              </div>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>City</label>
                <input onChange={(e) => setCity(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='text' placeholder='e.g Bujumbura'></input>
              </div>
            </div>
            <div className=' flex gap-6'>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>Phone</label>
                <input onChange={(e) => setPhone(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='number' placeholder='e.g +250781454225'></input>
              </div>
              <div className=' grid gap-2'>
                <label className=' text-blue-900 font-bold text-lg'>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className='border-2 h-[40px] w-[280px] pl-5 rounded-md border-blue-900' type='email' placeholder='e.g kbonheur123@gmail.com'></input>
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
