import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import toast from "react-hot-toast";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth] = useAuth();

  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data ,fetchData} = await axios.get(
          "http://localhost:8080/api/v1/orders/get-orders"
        );
        console.log("THe data is: ",data);
        setOrders(data.fetchData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    // Update pending and completed orders when 'orders' change
    const pending = orders.filter((order) => order.status === "Pending");
    const completed = orders.filter((order) => order.status === "Completed");

    setPendingOrders(pending);
    setCompletedOrders(completed);
  }, [orders]);

  const handleDeleteOrder = async (id) => {
    try {
      console.log("Deleting order with ID:", id);
      await axios.delete(
        `http://localhost:8080/api/v1/orders/delete-order/${id}`
      );
      toast.success("Order Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      console.log(`Changing order status to ${newStatus} for ID:`, id);
      // Make the API call to update the order status
      // ...

      // Update local state to reflect the change
      const updatedOrders = orders.map((order) =>
        order._id === id ? { ...order, status: newStatus } : order
      );
      setOrders(updatedOrders);

      // Update pending and completed orders separately
      const pending = updatedOrders.filter(
        (order) => order.status === "Pending"
      );
      const completed = updatedOrders.filter(
        (order) => order.status === "Completed"
      );

      setPendingOrders(pending);
      setCompletedOrders(completed);
    } catch (error) {
      console.log(error);
    }
  };

  const PendingOrders = orders.filter((order) => order.status === "Pending");
  const CompletedOrders = orders.filter(
    (order) => order.status === "Completed"
  );
  return (
    <Layout title={"All Orders"}>
      <div className="container-fluid p-3 m-3 dashboard">
        <div className="row">

          <div className="col-md-12">
            <h1 className="text-center">Pending Orders</h1>
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : orders && orders.length > 0 ? (
              orders &&
              orders.map((order) => (order.status=='Pending'?(
                <div key={order._id} className="border shadow p-3 mb-3">
                  <h4>Order ID: {order._id}</h4>
                  <p>Status: {order.status}</p>
                  <p>Total Price: {order.totalPrice}</p>
                  <h5>User Details:</h5>
                  {order.user && (
                    <>
                      <p>Name: {order.user}</p>
                      <p>Email: {order.user.email}</p>
                    </>
                  )}
                  <h5>Items:</h5>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteOrder(order._id)}
                    className="btn btn-danger"
                  >
                    Delete Order
                  </button>

                  <div>
                    <h5>Change Status</h5>
                    <button
                      onClick={() => handleStatusChange(order._id, "Pending")}
                      className="btn btn-primary m-1"
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => handleStatusChange(order._id, "Completed")}
                      className="btn btn-success m-1"
                    >
                      Completed
                    </button>
                  </div>
                </div>
              ):('')))
            ) : (
              <p className="text-center">No orders found</p>
            )}
          </div>

          <div className="col-md-12">
            <h1 className="text-center">Completed Orders</h1>
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : orders && orders.length > 0 ? (
              orders &&
              orders.map((order) => (order.status=='Completed'?(
                <div key={order._id} className="border shadow p-3 mb-3">
                  <h4>Order ID: {order._id}</h4>
                  <p>Status: {order.status}</p>
                  <p>Total Price: {order.totalPrice}</p>
                  <h5>User Details:</h5>
                  {order.user && (
                    <>
                      <p>Name: {order.user}</p>
                      <p>Email: {order.user.email}</p>
                    </>
                  )}
                  <h5>Items:</h5>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteOrder(order._id)}
                    className="btn btn-danger"
                  >
                    Delete Order
                  </button>

                  <div>
                    <h5>Change Status</h5>
                    <button
                      onClick={() => handleStatusChange(order._id, "Pending")}
                      className="btn btn-primary m-1"
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => handleStatusChange(order._id, "Completed")}
                      className="btn btn-success m-1"
                    >
                      Completed
                    </button>
                  </div>
                </div>
              ):('')))
            ) : (
              <p className="text-center">No orders found</p>
            )}
          </div>


        </div>
      </div>
    </Layout>
  );
};

export default Orders;