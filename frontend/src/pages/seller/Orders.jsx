import { useEffect, useState } from "react";
import { assets, dummyOrders } from "../../assets/assets";
import { useAppCOntext } from "../../context/AppContext";

const Orders = () => {

    // const orders = [
    //     { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA" }, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
    //     { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA" }, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
    //     { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA" }, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
    // ];

    const [orders, setOrders] = useState([]);

    const { currency } = useAppCOntext();

    const fetchOders = async () => {
        setOrders(dummyOrders);
    }

    useEffect(() => {
        fetchOders();
    }, []);

    return (
        <div className="no-scrollbar flex-1 md:px-14 overflow-y-scroll h-[calc(100vh-64px)]">
            <div className="md:p-10 p-4 space-y-4">
                <h2 className="text-lg font-medium">Orders List</h2>
                {orders.map((order, ind) => (
                    <div key={ind} className="flex flex-col md:flex-row md:items-center  gap-5 justify-between p-5 max-w-4xl rounded-md border border-gray-300 hover:border-gray-500 transition">
                        <div className="flex gap-5 mx-w-80">
                            <img className="w-12 h-12 object-cover" src={assets.box_icon} alt="boxIcon" />
                            <div>
                                {order.items.map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        <p className="font-medium">
                                            {item.product.name} {" "}
                                            <span className="text-primary">x {item.quantity}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-sm md:text-base text-black/60">
                            <p className='text-black/80'>{order.address.firstName} {order.address.lastName}</p>
                            <p>{order.address.street},{" "} {order.address.city}, </p>
                            <p> {order.address.state},{" "}{order.address.zipcode},{" "} {order.address.country}</p>
                            <p>

                            </p>
                            <p>Mobile No.: {" "}{order.address.phone}</p>
                        </div>

                        <p className="font-medium text-lg my-auto text-black/70">{currency}{order.amount}</p>

                        <div className="flex flex-col text-sm md:text-base text-black/60">
                            <p>Method: {order.paymentType}</p>
                            <p>Date: {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(order.createdAt))}</p>
                            <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Orders