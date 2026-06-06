import type { ServerResponse } from "http"

export const SendResponse=(res:ServerResponse, success:boolean, message: string, statusCode:number, data?: any)=>{
   
    const Response ={
        success,
        message,
        data,
       

    }

   res.writeHead(statusCode,{"content-type":"application/json"})
       res.end(JSON.stringify(Response))
}