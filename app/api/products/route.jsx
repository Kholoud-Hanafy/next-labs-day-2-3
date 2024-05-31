import { NextResponse } from "next/server";
import schema from "./schema";
import Product from "@/app/models/product.model";
import {connectDB} from '../../db/dbConfig'
connectDB();

// get 
export  async function GET(request){
    
  const products =  await Product.find();
  
    return NextResponse.json(products)
}


//  post

export  async function POST(request){
try{
    // const newProduct = {id:'400', name:'milk'}
    const body = await request.json()
    const validation =    schema.safeParse(body)  
    if(!validation.success) 
        return NextResponse.json(validation.error.errors,{status:400})

    //check is product exists by email
    const {name,description,price,img} = body;
    const product = await Product.findOne({name})
    if(product)
        return NextResponse.json({errorMessage:"product already exists, pease provide another name.."})
    
   
    const newProduct =  await Product.create({
        name,
        description,
        img,
        price
    })


    return NextResponse.json(newProduct);
}catch(error){
    return NextResponse.json(error,{status:400})
}
}