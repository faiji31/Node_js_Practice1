import { createServer, IncomingMessage, Server } from "http";
import { routeHandler } from "./routes/route";

const server : Server = createServer((req : IncomingMessage,res)=>{
    // console.log(req.url)
    // console.log(req.method)

    routeHandler(req,res);

  
})

server.listen(5000,()=>{
    console.log("server is running on port 5000")
})