

"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePrompt = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [post, setPost] = useState({
        prompt: "",
        answer: "",
        tag: "",
    });
    const [submitting, setSubmitting] = useState(false);

    const createPrompt = async (e) => {

        e.preventDefault();
        setSubmitting(true);

        try {
            
           const res = await fetch("api/prompts/create", {
            method: "POST",
            body: JSON.stringify({
                userId: session?.user.id,
                prompt: post.prompt,
                answer: post.answer,
                tag: post.tag,
            })   })

            if(res.ok)
            {
                 console.log("success");
                router.push("/");

            }
         
              
          
        }
            catch (error) {
                console.log("error fetching data");

                console.error(error);
            }
            finally {
                setSubmitting(false);  
            }

         
   
    }
 

  return (
    <>
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
    </>


  );
};

export default CreatePrompt;