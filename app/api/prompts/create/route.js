import Prompt from "@/model/Prompt";

import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
    const {userId, prompt, answer, tag} = await req.json();
    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            answer,
            tag,
        });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {status:201});

    }
    catch (error) {
        console.log("api:create "+error);
        return new  Response(JSON.stringify(error), {status:500});
       
    }
}








