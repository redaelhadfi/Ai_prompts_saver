'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import PromptCard from './PromptCard'
import PromptDetails from './PromptDetails'
import { set } from 'mongoose'
import { useSession } from 'next-auth/react'

const PromptList = ({ Data }) => {

  const [showPrompt, setshowPrompt] = useState({
    bool: false,
    Prompt: '',
    answer: '',
    hint: ''
  });

  



  return (
    < div className='flex flex-row  lg:m-[120px] flex-wrap justify-around  gap-10  w-full max-md:w-full  '>
      {showPrompt.bool &&
        <PromptDetails prompt={showPrompt.prompt} answer={showPrompt.answer} hint={showPrompt.hint} setshowPrompt={setshowPrompt} showPrompt={showPrompt} />}
      {Data.map((prompt) => (
        <PromptCard key={prompt.id} name={prompt.creator.username} email={prompt.creator?.email} prompt={prompt.prompt} answer={prompt.answer} tag={prompt.tag} setshowPrompt={setshowPrompt} showPrompt={showPrompt}  picture={prompt.creator?.image} />


      ))

      }
    </div>
  )
}













const Feed = () => {
  const [newData, setNewData] = useState([]);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([])


  const {data:session,status}=useSession();




  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }




  //  fetch data from api

  const fetchData = async () => {
    const res1 = await fetch('api/prompts');
    const data = await res1.json();




    setData(data);
    setNewData(data)

  }




  useEffect(() => {


    fetchData();
    



  }, [])

  // search data

  const handleClick = (e) => {
    e.preventDefault()
    searchData()

  }
  const searchData = () => {


    let res = newData.filter((mpt) => {
      console.log(mpt.prompt.toLowerCase().includes(search.toLowerCase()));
      return mpt.prompt.toLowerCase().includes(search.toLowerCase())
    }
    )

    setData(res)


  }








  return (

    <div className='flex flex-col  '>

      <form className="flex  justify-center items-center space-x-4">
        {/* search bar */}

        <input
          type="text"
          placeholder="Search.."
          name="search"
          className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/5 max-md:w-2/5 z-40 rounded-md  sm:text-sm focus:ring-1"   '

          onChange={handleSearchChange}
          value={search}

        />
        {/* search button */}
        <button
          type='search'
          className="rounded border border-black bg- py-1.5 px-5 text-black transition-all hover:bg-black  hover:text-white text-center text-sm  flex items-center justify-center h-9 z-40"
          onClick={(e) => handleClick(e)}>



          Search
        </button>
       
        {/* create post button */}

        {
          session &&
        <Link href='/Create-prompt' type="submit" className=" rounded border border-black bg-black py-1.5 px-5 max-md:px-1  text-white transition-all hover:bg-white hover:text-black text-center text-sm  flex items-center justify-center h-9 z-40" >

          Create Post

        </Link>

        }






      </form>



      {/* prompt list */}

      <div className="relative flex  m-5 lg:px-11 my-[1%] z-40  mt-8">
        <PromptList Data={data} />

      </div>
    </div>



  )
}

export default Feed;