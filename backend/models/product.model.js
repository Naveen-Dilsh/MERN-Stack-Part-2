import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
}, {
    timestamps:true //CreatedAt, UpdateAt
});

const Product = mongoose.model("Product",productSchema);
//mongoose convert Product ==> products

export default Product;