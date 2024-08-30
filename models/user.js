import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;



// import mongoose, { Schema, models } from "mongoose";

// const userSchema = new Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//     },
//     officialEmail: {
//       type: String,
//       required: true,
//       unique: true,  // Ensures that official email is unique
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     batch: {
//       type: String,
//       required: true,
//     },
//     sapId: {
//       type: String,
//       required: true,
//       unique: true,  // Ensures that SAP ID is unique
//     },
//     rollNo: {
//       type: String,
//       required: true,
//       unique: true,  // Ensures that Roll No is unique
//     },
//     phoneNumber: {
//       type: String,
//       required: true,
//     },
//     specialization: {
//       type: String,
//       required: true,
//     },
//     passingOutYear: {
//       type: Number,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const User = models.User || mongoose.model("User", userSchema);
// export default User;
