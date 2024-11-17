import express from "express";
import cors from "cors"
import "dotenv/config";
import { GitIgnoreList } from "./GitignoreList.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());



app.get("/list", (req, res) => {
    try {
        res.status(200).json({ GitIgnoreList, messgae: "Send data successfully", success: true })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false, error })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})
