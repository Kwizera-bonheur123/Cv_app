import React from 'react'
import { MdLocationOn } from 'react-icons/md';
import { FaEnvelope } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const Youcv = () => {
    const person = useSelector((state) => state.detail.detail);
    console.log(person.skills);
    return (
        <div>
            <div className=' pl-[5%] bg-[#5B5A5A] text-white w-[60%] mx-[20%] h-[200px]'>
                <div className=' bg-[#FEAF3A] text-white rounded-l-full  w-full pl-[16%] pt-6 font-semibold h-full'>
                    <p className=' font-bold text-3xl'>{person.fname + " " + person.lname}</p>
                    <p className=' font-bold text-2xl'>{person.profession}</p>
                    <div className=' flex gap-12'>
                        <div className=' mt-8 flex gap-2 font-bold text-[#5B5A5A]'>
                            <div className=' px-4 py-4 w-fit rounded-full bg-[#5B5A5A]'>
                                <FaEnvelope className=' font-bold text-white' />
                            </div>
                            <h1 className=' text-2xl mt-2'>{person.email}</h1>
                        </div>
                        <div className=' mt-8 flex gap-2 font-bold text-[#5B5A5A]'>
                            <div className=' px-4 py-4 w-fit rounded-full bg-[#5B5A5A]'>
                                <AiOutlinePhone className=' font-bold text-white' />
                            </div>
                            <h1 className=' text-2xl mt-2'>{person.phone}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-[60%] flex mx-[20%] bg-[#F5F5F5]'>
                <div className=' pb-12 w-[40%] pt-12 grid gap-8 px-7 relative min-h-full bg-[#5B5A5A]'>
                    <div>
                        <h1 className=' bg-[#FEAF3A] font-bold text-center text-2xl text-white'>ADDRESS</h1>
                        <div className=' flex gap-4 mt-6'>
                            <MdLocationOn className=' text-white text-[35px]' />
                            <h1 className=' text-white font-serif text-2xl'>{person.city + " - " + person.country}</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className=' bg-[#FEAF3A] font-bold text-center text-2xl text-white'>SKILLS</h1>
                        {person.skills.map(skill => {
                            return (<div>
                                <h1 className=' text-white mt-2 font-serif text-2xl'>{skill.skill}</h1>
                                <p className=' h-1 bg-[#FEAF3A] w-full mt-2'></p>
                            </div>)
                        })}
                    </div>
                    <div>
                        <h1 className=' bg-[#FEAF3A] font-bold text-center text-2xl text-white'>LANGUAGES</h1>
                        <div className=' pt-9'>
                            {
                                person.languages.map((language) => {
                                    return (
                                        <div className=' flex gap-4'>
                                            <div>
                                                <div className=' w-5 h-5 bg-[#FEAF3A] mt-1 rounded-full'></div>
                                                <div className=' h-[50px] w-1 bg-white ml-2'></div>
                                            </div>
                                            <h1 className=' text-white font-serif text-2xl'>{language.language}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className=' bg-[#FEAF3A] font-bold text-center text-2xl text-white'>Hobbies</h1>
                        <div className=' pt-9'>
                            {
                                person.hobbies.map((hob) => {
                                    return (
                                        <div className=' flex gap-4'>
                                            <div>
                                                <div className=' w-5 h-5 bg-[#FEAF3A] mt-1 rounded-full'></div>
                                                <div className=' h-[50px] w-1 bg-white ml-2'></div>
                                            </div>
                                            <h1 className=' text-white font-serif text-2xl'>{hob.hobby}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className=' pb-12 grid gap-14 pt-6 px-6 w-[60%]'>
                    <div>
                        <h1 className=' bg-[#FEAF3A] font-bold text-center w-[100%] text-2xl text-white'>PROFILE</h1>
                        <p className=' font-semibold text-lg pt-4' dangerouslySetInnerHTML={{ __html: person.technical_profile }}></p>
                    </div>
                    <div>
                        <h1 className=' bg-[#FEAF3A] font-bold mb-8 text-center text-2xl text-white'>EDUCATION</h1>
                        {
                            person.education.map((educate) => {
                                return (
                                    <>
                                        <div className=' flex gap-4'>
                                            <div>
                                                <div className=' w-5 h-5 bg-[#FEAF3A] mt-1 rounded-full'></div>
                                                <div className=' h-[90%] w-1 bg-[#606060] ml-2'></div>
                                            </div>
                                            <div className=' grid gap-2'>
                                                <h1 className=' text-black font-bold text-lg'>{educate.start + "  -  " + educate.end}</h1>
                                                <h1 className=' text-black font-bold text-xl'>{educate.field}</h1>
                                                <h1 className=' text-black font-bold text-lg'>{educate.schoolName + " - " + educate.location}</h1>
                                            </div>
                                        </div>
                                    </>

                                )
                            })
                        }
                    </div>
                    <div>
                        <h1 className=' bg-[#FEAF3A] font-bold text-center text-2xl text-white'>WORK EXPERIENCE</h1>
                        {
                            person.jobs.map((job) => {
                                return (
                                    <>
                                        <div className=' flex gap-4 pb-1 pt-4'>
                                            <div className=' mt-1 font-bold w-[20%] text-sm '>{job.startdate + "-" + job.enddate}</div>
                                            {/* <div className=' h-[100%] w-1 bg-[#606060] ml-2'></div> */}

                                            <div className=' grid gap-2 w-[80%]'>
                                                <h1 className=' text-black font-bold text-xl'>{job.jobtitle}</h1>
                                                <h1 className=' text-black font-bol d text-lg'>{job.city + ", " + job.country}</h1>
                                                <h1 className=' text-black font-serif text-lg' dangerouslySetInnerHTML={{ __html: job.jobdescription }}></h1>
                                            </div>
                                        </div>
                                    </>

                                )
                            })
                        }
                    </div>
                    <div>
                        <h1 className=' bg-[#FEAF3A] font-bold text-center text-2xl text-white'>REFERENCES</h1>

                        {
                            person.reference.map((ref) => {
                                return (
                                    <div className=' pt-5 flex gap-10'>
                                        <div>
                                            <div className=' w-5 h-5 bg-[#FEAF3A] mt-1 rounded-full'></div>
                                            <div className=' h-[90%] w-1 bg-[#606060] ml-2'></div>
                                        </div>
                                        <div className=' grid gap-2'>
                                            <h1 className=' text-black font-serif text-2xl'>{ref.name}</h1>
                                            <h1 className=' text-black font-semibold text-xl'>{ref.position}</h1>
                                            <h1 className=' text-black font-bold text-lg'>{ref.email}</h1>
                                            <h1 className=' text-black font-bold text-lg'>{ref.tel}</h1>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div >
                </div>
            </div>
        </div>
    )
}

export default Youcv
