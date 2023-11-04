import {Schema,model,models} from "mongoose";
const BlogSchema = new Schema({
    title:{
        type:String,
        required:[true,"Please add a Title"],
    },
    content:{
        type:String,
        required:[true,"Please add content"],
        minlength:[100,"Title should be at least 100 characters"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
      image:{
        type:String,
      },
      creator:{
        type:Schema.Types.ObjectId,
        ref:'User',
    }
})
BlogSchema.pre("save",async function (next){
    this.updatedAt = new Date();
    next();
});
const Blog = models.Blog || model("Blog",BlogSchema);
export default Blog;