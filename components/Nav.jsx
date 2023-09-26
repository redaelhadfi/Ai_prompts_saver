'use client'
import Link from 'next/link';
import logo from '../public/logo.png';
import menu from '../public/menu.png';
import Image from 'next/image';
import { useState } from 'react';

const Nav = () => {
    let Logged = false;
    const [open, setOpen] = useState(false);
    const [User, setUser] = useState('');

    return (
        <>
            {/* header background */}
            <div className='absolute w-full h-[90px] bg-slate-300/10 top-0 z-4'></div>
          
          
            {/* header */}

            <nav className=" flex flex-row gap-10  mt-5 z-6">
                <Link href="/">

                    <div className="flex ml-10 z-6 ">
                        <Image src={logo} alt="logo" width={60} height={60} />
                    </div>

                </Link>

                <div className="flex flex-row gap-10 md:mt-[16px]  max-md:hidden z-6">
                    <h1 className="text-2xl font-bold text-cyan-800">UR Saver</h1>
                </div>


                {/*desktop nav*/}

                <div className=" absolute hidden md:flex  flex flex-row gap-10 -right-[-5%] ">
                    {Logged ?
                        <button className="bg_btn">
                            <Link href="/login">
                                Login
                            </Link>
                        </button>
                        :
                        <div className='flex flex-row gap-10 full-rounded center'>
                            <button className="bg_btn">
                                <Link href="/login">
                                    Logout
                                </Link>
                            </button>
                            <Image className="rounded-full" src={logo} alt="user" width={50} height={50} />
                        </div>


                    }
                    {/*mobile nav*/}
                </div>

                <div className="absolute flex flex-row gap-1 md:hidden -right-[-5%]" >


                    <Image src={menu} alt="user" width={40} height={40} onClick={() => setOpen(!open)} />
                    {open &&
                        <div className=' flex flex-col gap-1 absolute w-60 h-40 top-[50px] right-1  bg-sky-500/50 rounded-lg items-center justify-center  shadow-2xl '>
                            <Image src={logo} alt="user" width={70} height={70} className='rounded-full center border-solid border-2 border-indigo-600/60 '></Image>
                            <h1 className='text-2xl font-bold'>{User}</h1>
                            <button className=" z-40 bg_btn">
                                <Link href="/login">
                                    Logout
                                </Link>
                            </button>

                        </div>





                    }



                </div>

















            </nav>
        </>






    )
}

export default Nav;
