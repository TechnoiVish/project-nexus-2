import mongoose from "mongoose";


 export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://greatproject:831881@cluster0.zs71d4i.mongodb.net/restaurent-website').then(()=>console.log("DB Connected"));
}