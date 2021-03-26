import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { useStateValue } from "../StateProvider";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                />

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    <div>
                        {basket.map(basketItem => {
                            return <BasketItem basketItem={basketItem} />;
                        })}
                    </div>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
