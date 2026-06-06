import type { IncomingMessage } from "http"

export const ServerResponse=(res:IncomingMessage, success:boolean , message: String , data?: any)=>{
   
    const Response ={
        success: success,
        message: message,
        data : data,

    }

    res.writeHead(200,{"content-type":"application/json"})
       res.end(JSON.stringify({"message": "Product retrive Succesfully!", data:{products}}))
}