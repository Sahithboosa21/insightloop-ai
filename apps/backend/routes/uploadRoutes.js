import express from "express";
import multer from "multer";
import { uploadDataset } from "../controllers/uploadController.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is working!"
  });
});

router.post("/upload", upload.single("dataset"), uploadDataset);

export default router;