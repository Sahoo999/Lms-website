import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("MongoDB Connected");
    });

    mongoose.connection.on("error", (error) => {
        console.error("MongoDB Connection Error:", error);
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`);
};

export default connectDB;