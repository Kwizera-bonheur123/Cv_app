import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from './detailSlice';
import Photo from './Images/Layer_1 (1).png'
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid'
import { BsTrash } from 'react-icons/bs';
const Languages = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [languages, setLanguages] = useState([]);
    const [language, setLanguage] = useState();
    const addlanguage = (e) => {
        e.preventDefault();
        setLanguages([...languages, { id: uuid(), language: language }]);
        // languages.push(language);
        setLanguage("");
        console.log(languages);
    }
    const remove = (language) => {
        setLanguages(languages.filter((item) => item.id != language))
    }
    function HandleSubmit(e) {

        const data = {
            languages: languages
        };
        dispatch(add(data));
        navigate("/reference");
    }
    return (
        <div className='h-screen w-full top-0'>
            <div className=' pt-[5%]'>
                <h1 className=' ml-[15%] text-blue-950 font-serif text-[50px]'>Tell us about your recent languages</h1>
                <h1 className=' ml-[15%] text-blue-400 font-semibold text-xl'>We’ll start there and work backward.</h1>
                <div className=' flex mt-20 ml-[15%] gap-28'>
                    <form onSubmit={addlanguage}>
                        <div className=' flex gap-6'>
                            <div className=' grid gap-2'>
                                <label className=' text-blue-900 font-bold text-lg'>Add languages</label>
                                <div className=' flex gap-2'>
                                    <input value={language} onChange={(e) => setLanguage(e.target.value)} values={language} className='border-2 h-[40px] w-full pl-5 rounded-md border-blue-900' type='text' placeholder='Add your languages'></input>
                                    <button type="submit" className=' bg-blue-950 px-2 whitespace-nowrap rounded-md text-white font-bold'>ADD LANGUAGE</button>
                                </div>
                                {
                                    languages.map((element) => {
                                        return (
                                            <div key={element.id} className=' bg-blue-900 flex justify-between w-full pt-2 px-4 text-white font-bold rounded-lg h-10'>
                                                <h1>{element.language}</h1>
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

export default Languages