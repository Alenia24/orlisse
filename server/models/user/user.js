import mongoose from "mongoose";
import bcrypt from "bcrypt";

// import addressSchema from "./models/address.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: {
      type: String,
    },
    adresses: [addressSchema],
    defaultAddressIndex: {
        type: Number,
        default: 0,
    }
  },
  { timestamps: true },
);

// Hash password before saving
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;

