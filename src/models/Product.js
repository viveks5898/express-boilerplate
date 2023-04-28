import mongoose from "mongoose"; 


 const {Schema, model} = mongoose;
   const productSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true}
   },{
    timestamps:false
   })

    const Product = model('Product', productSchema);
      export default Product