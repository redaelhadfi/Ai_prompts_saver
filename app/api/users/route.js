import User from "@/model/User";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const users = await User.find({})

        return new Response(JSON.stringify(users), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all users", { status: 500 })
    }
}

