import React from 'react'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen py-9 bg-gray-100">
      <form className="flex flex-col items-center justify-center w-4/5 max-md:w-full h-4/5 bg-white rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold py-10 text-gray-800">{type} Post</h1>
        <div className="flex flex-col items-center  w-full h-full">
          <textarea
            className="w-1/2 h-10 px-3 py-2 mb-5 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline z-50 max-md:w-4/5"
            type="text"
            placeholder="prompt"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          />
          <textarea
            className="w-1/2 h-32 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline z-50 max-md:w-4/5" 
            type="text"

            placeholder="answer"
            value={post.answer}
            onChange={(e) => setPost({ ...post, answer: e.target.value })}
          />
          <input min="2" max="777"
            className="w-1/2 h-13 px-3 py-2 my-5 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline z-50 max-md:w-4/5 " 
            type="text"

            placeholder="tags"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            
            />
          <button
            className="w-1/2 h-10 px-3 py-2 mt-5 text-base text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 z-50"
            type="submit"
            disabled={submitting}
            onClick={handleSubmit}
          >
            {type}
          </button>
        </div>
        </form> 


</section>
  )
}

export default Form;