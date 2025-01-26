import { CartItem as CartItemType } from "model";
import React from "react";
import styles from "./Cart.module.scss";

export const CartItem: React.FC<
  Omit<CartItemType, "company"> & { onRemove: (id: string) => void }
> = React.memo(({ image, price, quantity, title, onRemove, id }) => {
  const totalPrice = price * quantity;

  console.log("render cart item", title);
  return (
    <div className={styles["cart-item"]}>
      <img className={styles["cart-item-img"]} src={image} alt="img cart" />
      <div className={styles["cart-item-info"]}>
        <h3>{title}</h3>
        <p>
          {price} x {quantity}
        </p>
        <span className={styles["cart-item-price"]}>
          {totalPrice.toFixed(2)}
        </span>
      </div>
      <button onClick={() => onRemove(id)}>X</button>
    </div>
  );
});
