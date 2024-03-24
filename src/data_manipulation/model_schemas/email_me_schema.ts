import mongoose from "mongoose";

const { Schema, models } = mongoose;

const emailSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      minlength: 10,
    },
  },
  { timestamps: true }
);

/**
 * The schema has {name, email and message} initialized by new Schema. <br />
 * This will check whether the schema exist, if it exist, it will not create a model.
 *  - Otherwise it creates a model that it creates a collection in the database.
 * 
 * it has
 * 
 * @types values {email, name, message}
 */
const Email = models.Email || mongoose.model("Email", emailSchema);
export default Email;
