// api/clerk/webhook
export const POST = async (req:Request)=>{
    const {data} = await req.json()
    console.log("clerk Webhook received",data)
    return new Response("webhook received",{status:200})
}
