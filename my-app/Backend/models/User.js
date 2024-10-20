import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: false },
    phoneNumber: { type: String, required: false },
    address: { type: String, required: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
