const { mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    displayName: mongoose.Schema.Types.String,
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;