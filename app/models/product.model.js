import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    img :{
        type:String,
        required:true,
        
    },
    description:{
        type:String
        
    },
    price:{
        type:String,
        required: true
    }

})

const Product = mongoose.models.Product||  mongoose.model('Product',productSchema);
export default Product;