import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password:{type:String, required:true},
    // authentication : {
    //     passwords: {type: String, required: true, select: false},
    //     sale:{type:String, select:false},
    //     sessionToken:{type:String, select:false}
    // }
})

export const UserModel = mongoose.model('User', UserSchema)

export const getUserByEmail = (email:string) =>  {
    
    return UserModel.findOne({email})
}

export const createUser =  (values:Record<string, any>) => new UserModel(values).save().then((user)=>user.toObject())

