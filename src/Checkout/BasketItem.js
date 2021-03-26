import React from "react";
import "./BasketItem.css";

function BasketItem({ basketItem }) {
    return (
        <div className="basketItem">
            <p>id: {basketItem.id}</p>
            <p>title: {basketItem.title}</p>
            <p>image: {basketItem.image}</p>
            <p>price: {basketItem.price}</p>
            <p>rating: {basketItem.rating}</p>
        </div>
    );
}

export default BasketItem;
