import Image from 'next/image'
import './globals.css'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <section >
      <dev className=" flex flex-col flex-center w-full  text-gray-600 body-font ">
        <div className="flex  flex-col px-5 py-24 mx-auto gap-6">
          <h2 className="text-3xl font-bold text-center text-cyan-800 title-font ">
            Welcome to
          </h2>

          <h1 className='text-5xl font-bold text-center text-cyan-500 title-font'>
            Your Prompts Saver
          </h1>
          <p className="mx-auto text-base font-medium leading-relaxed text-center text-gray-600 lg:w-2/3">
            This is an apen-source app  to save your prompts for later use.
          </p>
        </div>

   
          <Feed />
   


      </dev>



    </section>

  )
}
