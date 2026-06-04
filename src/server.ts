import { createServer, IncomingMessage, Server } from "http";

const server : Server = createServer((req : IncomingMessage,res)=>{
    // console.log(req.url)
    // console.log(req.method)

    const url = req.url
    const method = req.method

    if(url === "/" && method === "GET"){
       res.writeHead(200,{"content-type":"text/plain"})
       res.end("This is The Route Server!")
    }else{
        res.writeHead(404,{"content-type":"text/plain"})
        res.end("Route not found")
    }
})

server.listen(5000,()=>{
    console.log("server is running on port 5000")
})