import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,

        },
        lastName: {
            type: String,

        },
        email: {
            type: String,
            unique: true,
            required: true,
        },

        password: {
            type: String,
            // required: true,
        },
    },
    { timestamps: true }
);

// export default mongoose.models.User || mongoose.model("User", userSchema);
mongoose.model("User", userSchema);