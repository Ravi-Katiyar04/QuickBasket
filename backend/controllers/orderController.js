import Product from "../models/Product.js";
import Order from "../models/Order.js";

export const placedOrderCOD= async (req, res) => {
    try {
        const { userId, items, address } = req.body;
        if( !address || items.length === 0) {
            return res.status(400).json({ message: "Invalid order data" });
        }

        let amount= await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            return (await acc) + (product.offerprice * item.quantity);
        }, 0);

        amount += Math.floor(amount * 0.02); // Adding 2% TAX

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "cod",
        });
        return res.status(200).json({ message: "Order placed successfully" });
        

    } catch (error) {
        console.error("Error creating order:", error.message);
        return res.status(500).json({ message: "Error creating order", error });
    }
}

export const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await Order.find({ userId, $or: [{ paymentType: "cod" }, { isPaid: "true" }] }).populate("items.product").populate("address").sort({ createdAt: -1 });

        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error.message);
        return res.status(500).json({ message: "Error fetching orders", error });
    }
}


export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find( {$or: [{ paymentType: "cod" }, { isPaid: "true" }]}).populate("items.product").populate("address").sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error.message);
        return res.status(500).json({ message: "Error fetching orders", error });
    }
}