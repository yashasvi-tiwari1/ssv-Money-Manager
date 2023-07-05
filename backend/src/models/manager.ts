import  mongoose from 'mongoose';

const managerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    fa_code:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})
const Manager = mongoose.model('Manager',managerSchema)
export {Manager}