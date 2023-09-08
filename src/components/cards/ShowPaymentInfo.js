import React from "react";

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <div>
    <p>
      <span>Orden Id: {order.paymentIntent.id}</span>
      {" / "}
      <span>
        Importe:{" / "}
        {(order.paymentIntent.amount /= 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      {" / "}
      <span>Moneda: {order.paymentIntent.currency.toUpperCase()}</span>
      {" / "}
      <span>Método: {order.paymentIntent.payment_method_types[0]}</span>
      {" / "}
      <span>Pago: {order.paymentIntent.status.toUpperCase()}</span>
      {" / "}
      <span>
        Ordenado el:{" / "}
        {new Date(order.paymentIntent.created * 1000).toLocaleString()}
      </span>
      {" / "}
      <br />
      {showStatus && (
        <span className="badge bg-primary text-white">
          STATUS: {order.orderStatus}
        </span>
      )}
    </p>
  </div>
);

export default ShowPaymentInfo;
