import { Schema,model,models } from "mongoose";
// import bcrypt from "bcrypt";
const UserSchema = new Schema({
    email:{
        type:String,
        unique:[true,"email already exists"],
        required:[true,"please enter your email"]
    },
    username:{
        type:String,
        required:[true,"username is required"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]

    },
    image:{
        type:String,
    },
    // password:{
    //     type:String,
    //     required:[true,'Passcode is must to log in'],
    // },
    // desc:{
    //     type:String,
    //     required:[true,'Small desc is required']
    // },
    createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
});
UserSchema.pre("save",async function (next){
    this.updatedAt = new Date();
    next();
});
// Hash the password before saving it
// UserSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       return next();
//     }
  
//     try {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(this.password, salt);
//       this.password = hashedPassword;
//       next();
//     } catch (error) {
//       next(error);
//     }
//   });
const User = models.User || model("User",UserSchema);
export default User;