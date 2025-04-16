
import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized User" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if (decoded.id) {
            // Instead of setting req.body.userId, assign directly to req.userId
            req.userId = decoded.id;
        } else {
            return res.status(401).json({ message: "Unauthorized User" });
        }
        return next();
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

export default authUser;

