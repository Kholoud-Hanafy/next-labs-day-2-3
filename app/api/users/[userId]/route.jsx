import { NextResponse } from "next/server";


// get by id
export function GET(request,{params}){

    return NextResponse.json({id:params.userId, name:"ahmed"})

}

export async function PUT(request, {params}){
    const body =  await request.json();
    
    if(params.userId<100) {
        return NextResponse.json({error:'user not found!'})
    }else{
    return NextResponse.json({id:params.userId, name:body.name})
    }
}

export function DELETE(request,{params}){

    if(params.userId<100) 
        return NextResponse.json({error:'user not found!'})

    return NextResponse.json({})
}