import type { IncomingMessage, ServerResponse } from "http";
import { insertproduct, readProduct } from "../service/product.service";
import type { Iproduct } from "../types/product.types";
import { parseBody } from "../utility/parseBody";

export const productController =async(req:IncomingMessage,res:ServerResponse)=>{

    // console.log("Request:",req)
const url = req.url
    const method = req.method

    const urlParts = url?.split("/");
  
    const id = urlParts && urlParts[1] === "products" ? Number(urlParts[2]) :null;
    // console.log("this is the actual id:",id)

    // Get all products

    if (url === "/products" && method === "GET"){

        // const products =[
        //     {
        //         id:1,
        //         name:"Apple"
        //     }
        // ]
       const products = readProduct()
        res.writeHead(200,{"content-type":"application/json"})
       res.end(JSON.stringify({"message": "Product retrive Succesfully!", data:{products}}))
    } else if(method === "GET" && id!== null){
        const products = readProduct()
        const product = products.find((p : Iproduct) => p.id === id)
        // console.log(product)
        
        res.writeHead(200,{"content-type":"application/json"})
       res.end(JSON.stringify({"message": "Products retrive Succesfully!", data:{product}}))
    } else if(method === "POST" && url === "/products"){
        const body =await parseBody(req)
       
        const newproduct ={
            id : Date.now(),
            ...body
            
        }
        const products = readProduct()
        products.push(newproduct)
        // console.log(newproduct)
        // console.log(products)
        insertproduct(products)
         res.writeHead(200,{"content-type":"application/json"})
       res.end(JSON.stringify({"message": "Products created Succesfully!",
         data:{newproduct}
        }))
    } else if(method === "PUT" && id !== null){
        const body = await parseBody(req)
        const products = readProduct()

       

        const index = products.findIndex((p : Iproduct)=> p.id === id)
        if(index <0){
            res.writeHead(404,{"content-type":"application/json"})
       res.end(JSON.stringify({"message": "Products not found!",
         data:null
        })) 
            
        } 
        products[index] = {id : products[index].id,...body

            
        }
         insertproduct(products)
         res.writeHead(200,{"content-type":"application/json"})
       res.end(JSON.stringify({"message": "Products Updated Succesfully!",
         data:products[index]
        })) 
    } else if(method === "DELETE" && id !== null){
    const products = readProduct();

    const index = products.findIndex(
        (p: Iproduct) => p.id === id
    );
    

    if(index === -1){
        res.writeHead(404, {
            "content-type": "application/json"
        });

        return res.end(JSON.stringify({
            message: "Product not found!",
            data: null
        }));
    }

    products.splice(index, 1);

    insertproduct(products);

    res.writeHead(200, {
        "content-type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Product Deleted!",
        data: null
    }));
}
   
}