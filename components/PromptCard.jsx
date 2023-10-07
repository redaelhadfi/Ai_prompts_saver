import React from 'react'
import Image from 'next/image';
import img from '../public/logo.png'

   


const PromptCard = ({Id,name,email,prompt,answer,tag,setshowPrompt ,showPrompt,picture}) => {
    




 

 


  return ( 
    <>


    <div className=' relative  flex flex-col  bg-white  rounded-md shadow-md w-[290px] max-md:w-full h-[200px]' onClick={() => setshowPrompt({bool:true,prompt:prompt,answer:answer,hint:tag})}>
      
      <Image 
      src={picture} 
      alt="user" 
      width={40} height={40}
      className='absolute top-6 ml-5 rounded-full'
      />
      <h1 className='text-sm font-bold ml-[80px] mt-6'>{name}</h1>
      <h1 className='text-sm  ml-[80px]'>{email}</h1>
      <div className=' box-content  mx-3 border-2 rounded mt-5 w-4/5/4 h-1/2'>
    
      <p className=' p-2 text-sm    h-4/5 overflow-hidden ...'>
        {prompt}
      </p>
 
    

    </div>
    </div></>

    )
}

export default PromptCard