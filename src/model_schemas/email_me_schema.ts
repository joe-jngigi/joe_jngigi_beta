import mongoose from "mongoose";

const { Schema, models } = mongoose;

const emailSchema = new Schema(
  {
    email: String,
    message: String,
  },
  { timestamps: true }
);


const Email = models.Email || mongoose.model("Email", emailSchema);
export default Email;
