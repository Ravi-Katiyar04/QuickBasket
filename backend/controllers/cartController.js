
import User from "../models/User.js";

export const updateCart = async (req, res) => {

    try {
        const { cartItems } = req.body;
        const {userId}= req;

        await User.findByIdAndUpdate(userId, { cartItems });

        return res.status(200).json({ message: "Cart updated successfully" });

        // Validate the input data
        
    } catch (error) {

        console.error("Error updating card:", error.message);
        return res.status(500).json({ message: "Error updating card", error });
    }

}