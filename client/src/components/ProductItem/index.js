import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import "./style.css";
import { idbPromise } from "../../utils/helpers"

function ProductItem(item) {
  const { image, name, _id, price } = item;

  const [state, dispatch] = useStoreContext();
  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity),
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", {
        ...item,
        purchaseQuantity: 1,
      });
    }
  };

  return (
    <div className="product">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`}></img>
      </Link>
      <h3>{name}</h3>
      <h4>Price: $ {price}</h4>
      <div className="btn-wrapper">
        <Link to={`/products/${_id}`}>
          <button>View</button>
        </Link>
        <button onClick={addToCart}>
          <i class="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
