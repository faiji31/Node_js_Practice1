import path from 'path'
import fs from "fs"
const filepath = path.join(process.cwd(),"src/database/db.json")

export const readProduct=()=>{
    // console.log(process.cwd())
    // console.log(filepath)

    const products = fs.readFileSync(filepath,"utf-8")
   console.log(JSON.parse(products))
   return JSON.parse(products) 
}