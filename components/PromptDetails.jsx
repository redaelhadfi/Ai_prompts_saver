import { set } from 'mongoose';
import React from 'react'

const PromptDetails = ({prompt,answer,hint,setshowPrompt}) => {
    return (
        // this show the details of the prompt with a nice animation
       
            <div className='absolute flex flex-col items-center justify-center w-4/5 max-md:w-full h-screen bg-white rounded-lg shadow-2xl z-50'>
                <h1 className='text-4xl font-bold py-10 text-gray-800'>Prompt Details</h1>
                <div className='flex flex-col items-center  w-full h-full'>
                    <p className='w-1/2 h-10 px-3 py-2 mb-5 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline z-50 max-md:w-4/5 overflow-hidden' type="text" placeholder="prompt" >{prompt}</p>
                    <p className='w-1/2 h-32 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline z-50 max-md:w-4/5 overflow-hidden' type="text" placeholder="answer" >{answer}</p>
                    <p className='w-1/2 h-13 px-3 py-2 my-5 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline z-50 max-md:w-4/5 overflow-hidden ' type="text" placeholder="tags" >{hint}</p>
                    <button className='w-1/6 h-10 px-3 py-2 mt-5 text-base text-white  bg-red-600  rounded-lg shadow-md hover:bg-red-400  z-50' type="submit"
                    onClick={()=>{
                        setshowPrompt(false)
                    }
                    }>quit</button>
                </div>
            </div>
        
)
}

export default PromptDetails;