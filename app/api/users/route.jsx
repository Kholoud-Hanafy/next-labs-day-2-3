import { NextResponse } from "next/server";

// get 
export function GET(request){

    const users = [{
            id:100,
            name:'kholoud'
        },
        {
            id:200,
            name:'omr'
        },
        {
            id:300,
            name:'fatma'
        }
    ]
    
    return NextResponse.json(users)
}


//  post

export  async function POST(request){

    const newUser = {id:'400', name:'rania'}
    
    return NextResponse.json(newUser);
}