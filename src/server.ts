import { createServer, IncomingMessage, Server } from "http";
import { routeHandler } from "./routes/route";
import config from "./config";

const server : Server = createServer((req : IncomingMessage,res)=>{
    // console.log(req.url)
    // console.log(req.method)

    routeHandler(req,res);

  
})

server.listen(config.port,()=>{
    console.log("server is running on port 5000")
})