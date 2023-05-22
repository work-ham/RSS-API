const multer = require('multer');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the destination folder for uploaded files
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension);
  }
});

// Create the multer upload object
const upload = multer({ storage: storage });

// Define the middleware function
const handleFormData = (req, res, next) => {
  // Pass the uploaded files and form fields to the next middleware
  upload.any()(req, res, err => {
    if (err) {
      // Handle any multer errors
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};

module.exports = handleFormData;