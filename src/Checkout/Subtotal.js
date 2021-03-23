import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { breakStatement } from "@babel/types";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                // this is what is rendered on screen
                renderText={value => (
                    <>
                        <p>
                            Subtotal (0 items):
                            <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2} // 2 decimal places
                value={0} // amount
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

// function Subtotal() {
//     return (
//         <div className="subtotal">
//             <Checkout
//                 renderText={value => (
//                     <>
//                         <p>
//                             Subtotal ({breakStatement.length} items):
//                             <strong>{` ${value}`}</strong>
//                         </p>
//                         <small className="subtotal__gift">
//                             <input type="checkbox" /> This order contains a gift
//                         </small>
//                     </>
//                 )}
//                 decimalScale={2}
//                 value={getBasketTotal(basket)}
//                 displayType={"text"}
//                 thousandSeparator={true}
//                 prefix={"$"}
//             />
//         </div>
//     );
// }

export default Subtotal;
