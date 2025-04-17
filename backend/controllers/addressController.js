import Address from "../models/Address.js";


export const addAddress = async (req, res) => {
    try {
        const { address, userId } = req.body;

        await Address.create({ ...address, userId });
        return res.status(200).json({ message: "Address added successfully" });
        
    } catch (error) {
        console.error("Error adding address:", error.message);
        return res.status(500).json({ message: "Error adding address", error });
    }
}

export const getAddress = async (req, res) => {
    try {
        const { userId } = req.body;
        const addresses = await Address.find({ userId });
        res.status(200).json(addresses);
    } catch (error) {
        console.error("Error fetching address:", error.message);
        return res.status(500).json({ message: "Error fetching address", error });
    }
}