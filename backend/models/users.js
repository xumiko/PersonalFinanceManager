const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,  
    },
});

// Hash the password before saving the user document
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next(); // Only hash if password is modified

    try {
        const salt = await bcrypt.genSalt(10); // Generate salt for hashing
        this.password = await bcrypt.hash(this.password, salt); // Hash password
        next();
    } catch (err) {
        next(err);
    }
});

// Compare entered password with the hashed password in the database
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password); // Compare passwords
};

// Generate JWT token for the user
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // 1 hour expiration
    return token;
};

const UserDetails = mongoose.model('UserDetails', userSchema);

module.exports = UserDetails;
