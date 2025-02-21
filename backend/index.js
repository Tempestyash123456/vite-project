// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Your personal details
const USER_ID = "yash_dwivedi_23122002";  
const EMAIL = "22BDO10019@cuchd.in";         
const ROLL_NUMBER = "22BDO10019";         

app.use(cors());
app.use(express.json());

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// POST endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        // Validate input
        if (!Array.isArray(data)) {
            throw new Error('Input data must be an array');
        }

        // Process data
        const numbers = [];
        const alphabets = [];

        data.forEach(item => {
            if (typeof item === 'string') {
                if (/^\d+$/.test(item)) {
                    numbers.push(item);
                } else if (/^[A-Za-z]$/.test(item)) {
                    alphabets.push(item);
                }
            }
        });

        // Find highest alphabet
        const highest_alphabet = alphabets.length > 0 
            ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)]
            : [];

        res.status(200).json({
            is_success: true,
            user_id: USER_ID,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            numbers,
            alphabets,
            highest_alphabet
        });

    } catch (error) {
        res.status(400).json({
            is_success: false,
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});