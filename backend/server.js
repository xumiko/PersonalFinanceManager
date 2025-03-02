const express =require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const connectDB = require("./config/db");

const dotenv=require ("dotenv");


const TransactionDetails = require("./models/transactionDetails");
const UserDetails = require('./models/users'); 


dotenv.config();

connectDB();



app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Backend is up and running!');
  });

//   app.post('/api/transaction', async (req, res) => {
//     const { type, amount, category, date, description  } = req.body;
  
//     try {
//         // new transaction
//         const newTransaction = new transactionDetails({ type, amount, category, date, description });
//         await newTransaction.save(); // Saving the transaction in MongoDB
  
//         res.status(201).json({ message: 'Transaction details saved successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error saving transaction details', error });
//     }
//   });


app.post("/api/transaction", async (req, res) => {
    const { type, amount, category, date, description } = req.body;
  
    try {
        console.log("Received Data:", req.body);  // Check if data is received
        const newTransaction = new TransactionDetails({
            type,
            amount,
            category,
            date: new Date(date),  // Ensure proper date format
            description,
        });

        await newTransaction.save();
        console.log("Transaction saved successfully!");
        res.status(201).json({ message: "Transaction details saved successfully" });
    } catch (error) {
        console.error("Error saving transaction details:", error);
        res.status(500).json({ message: "Error saving transaction details", error: error.message });
    }
});


//--------------------------------------------------------------------------------------------------------------------


app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new UserDetails({
            name,
            email,
            password,
        });

        await user.save();
        const token = user.generateAuthToken(); // Generate JWT token
        res.status(201).json({
            message: 'User registered successfully',
            token, // Send token to client
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});


// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await UserDetails.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if password is correct
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate and send JWT token
        const token = user.generateAuthToken();
        res.status(200).json({
            message: 'Login successful',
            token, // Send token to client
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});


const auth = require('./middleware/auth'); // Import auth middleware

// Protected route - Dashboard
app.get('/api/dashboard', auth, async (req, res) => {
    try {
        // You can now access req.user (decoded token data)
        const user = await UserDetails.findById(req.user._id).select('-password'); // Exclude password from user data
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching dashboard data', error: error.message });
    }
});

  





  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});