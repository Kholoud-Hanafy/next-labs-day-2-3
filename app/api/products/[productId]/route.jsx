import { NextResponse } from "next/server";
import {connectDB} from '../../../db/dbConfig'
import schema from "./../schema";
import Product from "@/app/models/product.model";

connectDB();
export async function GET(request,{params}){
    const product = await Product.findOne({_id:params.productId})
    
    return NextResponse.json(product)

}

export async function PATCH(request, {params}){
    const body =  await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400})
    
    //fetch user from db with given ID
    const product = await Product.findOne({_id:params.productId})
    

    if(!product)
        return NextResponse.json({error:'product not found!'})


    //update
    const updatedProduct = await Product.findOneAndUpdate({_id:params.productId},{name:body.name})
    return NextResponse.json(updatedProduct)
}

export async function DELETE(request,{params}){

    const product = await Product.findOne({_id:params.productId});
    if(!product) //not found
        return NextResponse.json({error:'product not found!'})

    await Product.findOneAndDelete({_id:params.productId})
    return NextResponse.json({})
}