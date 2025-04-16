import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    offerprice: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: Array,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
}, {Timestamps: true});

const Product = mongoose.models.product || mongoose.model('product', productSchema);

export default Product;