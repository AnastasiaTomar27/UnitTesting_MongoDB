const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
console.log("Connected to MongoDB")