import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from './detailSlice';
import Photo from './Images/Layer_1 (1).png'
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid'
import { BsTrash } from 'react-icons/bs';
const Information = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [hobbies, setHobbies] = useState([]);
    const [hobby, setHobby] = useState();
    const addHobby = (e) => {
        e.preventDefault();
        setHobbies([...hobbies, { id: uuid(), hobby: hobby }]);
        // hobbies.push(hobby);
        setHobby("");
        console.log(hobbies);
    }
    const remove = (hobby) => {
        setHobbies(hobbies.filter((item) => item.id != hobby))
    }
    function HandleSubmit(e) {

        const data = {
            hobbies: hobbies
        };
        dispatch(add(data));
        navigate("/languages");
    }
    return (
        <div className='h-screen w-full top-0'>
            <div className=' pt-[5%]'>
                <h1 className=' ml-[15%] text-blue-950 font-serif text-[50px]'>Tell us about your recent hobbies</h1>
                <h1 className=' ml-[15%] text-blue-400 font-semibold text-xl'>We’ll start there and work backward.</h1>
                <div className=' flex mt-20 ml-[15%] gap-28'>
                    <form onSubmit={addHobby}>
                        <div className=' flex gap-6'>
                            <div className=' grid gap-2'>
                                <label className=' text-blue-900 font-bold text-lg'>Add hobbies</label>
                                <div className=' flex gap-2'>
                                    <input onChange={(e) => setHobby(e.target.value)} value={hobby} className='border-2 h-[40px] w-full pl-5 rounded-md border-blue-900' type='text' placeholder='Add your hobbies'></input>
                                    <button type="submit" className=' bg-blue-950 px-2 whitespace-nowrap rounded-md text-white font-bold'>ADD HOBBY</button>
                                </div>
                                {
                                    hobbies.map((element) => {
                                        return (
                                            <div key={element.id} className=' bg-blue-900 flex justify-between w-full pt-2 px-4 text-white font-bold rounded-lg h-10'>
                                                <h1>{element.hobby}</h1>
                                                <button onClick={() => { remove(element.id) }}><BsTrash className=' cursor-pointer text-red-100 text-xl font-bold' /></button>
                                            </div>
                                        )
                                    })
                                }
                                <div className=' flex gap-6 mt-9'>
                                    <div className=' grid gap-2'>
                                        <input className='border-2 h-[55px] w-[280px] rounded-lg border-blue-900 text-blue-900 font-bold ' value="BACK" type='reset'></input>
                                    </div>
                                    <div className=' grid gap-2'>
                                        <button onClick={HandleSubmit} className='border-2 h-[55px] w-[280px] rounded-xl text-white font-bold bg-blue-900 text-xl' >NEXT WORK HISTORY</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className=' -mt-[13%]'>
                        <img src={Photo} className='h-[140%] w-[70%]'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information