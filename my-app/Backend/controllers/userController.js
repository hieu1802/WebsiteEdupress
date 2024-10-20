import CommentModel from "../models/comment.js";
import mongoose from "mongoose";
const createComment = async (req, res) => {
<<<<<<< HEAD
  try {
    let { comment, author, email } = req.body;
    const newComment = new CommentModel({
      comment,
      author,
      email,
      date: new Date().toLocaleDateString(),
    });
    const saveComment = await newComment.save();
    return res.status(201).json(saveComment);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Có lỗi xảy ra khi comment");
  }
};

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export { createComment };
=======
    try {
        let { comment, author, email } = req.body;
        let courseId = req.params.courseId;

        if (!mongoose.Types.ObjectId.isValid(courseId)) {
            return res.status(400).json({ error: "Invalid courseId" });
        }
        const newComment = new CommentModel({
            courseId: new mongoose.Types.ObjectId(courseId),
            comment,
            author,
            email,
            date: new Date().toLocaleDateString()
        })

        const saveComment = await newComment.save()
        return res.status(201).json(saveComment);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Có lỗi xảy ra khi comment');
    }
}
export { createComment }
>>>>>>> main
