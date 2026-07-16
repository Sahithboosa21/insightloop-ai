export function uploadDataset(req, res) {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded.",
    });
  }

  res.json({
    success: true,
    filename: req.file.originalname,
    size: req.file.size,
    mimetype: req.file.mimetype,
    message: "Dataset uploaded successfully!",
  });
}