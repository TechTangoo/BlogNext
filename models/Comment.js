import {Schema,model,models} from "mongoose";
const CommentSchema = new Schema({
    commentcontent:{
        type:String,
        required:[true,"Please add content"],
        minlength:[100,"Title should be at least 100 characters"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
     commentcreator:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    comment_blod:{
        type:Schema.Types.ObjectId,
        ref:'Blog',
    }
})
const Comment = models.Comment || model("Comment",CommentSchema);
export default Comment;