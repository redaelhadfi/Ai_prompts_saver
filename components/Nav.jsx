'use client'
import Link from 'next/link';
import logo from '../public/logo.png';
import menu from '../public/menu.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";




const Nav = () => {
    const [open, setOpen] = useState(false);

    const { data: session, status } = useSession();

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);





    return (
        <>
            {/* header background */}
            <div className='absolute w-full h-[90px] bg-slate-300/10 top-0 z-4'></div>


            {/* header */}
            <nav className=" flex flex-row gap-10  mt-5 z-50">
              

                    <div className="flex ml-10  ">
                        <Link href="/">
                        <Image src={logo} alt="logo" width={60} height={60} />
                        </Link>
                    </div>

             

                <div className="flex flex-row gap-10 md:mt-[16px]  max-md:hidden z-6">
                    <h1 className="text-2xl font-bold text-cyan-800">UR Saver</h1>
                </div>




                {/* desktop nav */}



                <div className=" absolute hidden md:flex  flex flex-row gap-10 -right-[-5%] ">
                    {status === "authenticated" ?
                        (

                            <div className='flex flex-row gap-10 full-rounded center'>
                                <button className="bg_btn mt-2" onClick={() => signOut()} >

                                    Sign Out

                                </button>

                                <Image className="rounded-full" src={session?.user.image} alt="user" width={50} height={50} />
                            </div>
                        )
                        :
                        <>{
                            providers && Object.values(providers).map((provider) => (
                                <div key={provider.name}>


                                    <button className="bg_btn" onClick={() => signIn(provider.id)}>

                                        signIn with {provider.name}

                                    </button>
                                </div>
                            ))}
                        </>

                    }

                </div>







                {/*mobile nav*/}







                <div className="absolute flex flex-row gap-1 md:hidden -right-[-5%]" >
                   
                    {status === "authenticated" ?
                    <Image src={menu} alt="user" width={40} height={40} onClick={() => setOpen(!open)} />
                    :   
                    <>{
                        providers && Object.values(providers).map((provider) => (
                            <div key={provider.name}>


                                <button className="bg_btn" onClick={() => signIn(provider.id)}>

                                    signIn with {provider.name}

                                </button>
                            </div>
                        ))}
                    </>
                    
                }
                    {open & status === "authenticated" ?
                        <div className=' flex flex-col gap-1 absolute w-60 h-40 top-[50px] right-1  bg-sky-500/50 rounded-lg items-center justify-center  shadow-2xl '>
                            <Image className="rounded-full" src={session?.user.image} alt="user" width={50} height={50} />                            <h1 className='text-2xl font-bold'>{session?.user.name} </h1>
                            <button className=" z-40 bg_btn" onClick={signOut}>
                                Sign Out
                            </button>

                        </div>
                        :<> 
                        
                        </>







                    }



                </div>
















            </nav>
        </>






    )
}

export default Nav;
