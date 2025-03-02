const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('x-auth-token'); // Get token from request header

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token with the secret key
        req.user = decoded; // Attach user data to request object
        next(); // Proceed to the next middleware/route handler
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }

};


// export const setAuthToken = (token) => {
//     localStorage.setItem('authToken', token);
// };

// export const getAuthToken = () => {
//     return localStorage.getItem('authToken');
// };

// export const removeAuthToken = () => {
//     localStorage.removeItem('authToken');
// };


module.exports = auth;
