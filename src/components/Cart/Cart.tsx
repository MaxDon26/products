import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.scss";
import { AppDispatch, RootState } from "../../store/store";
import { clearCart, getTotalPrice, removeItem } from "../../store/cartSlice";
import { CartItem } from "./CartItem";
import { useCallback } from "react";

export const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart);
  const totalPrice = useSelector(getTotalPrice);

  const handleCrear = () => {
    dispatch(clearCart());
  };

  const handleRemove = useCallback(
    (id: string) => {
      dispatch(removeItem(id));
    },
    [dispatch]
  );
  return (
    <div className={styles.cartWrapper}>
      <h2>Корзина товаров</h2>
      <ol className={styles["cart-list"]}>
        {cartItems.map((item) => (
          <CartItem
            image={item.image}
            key={item.id}
            price={item.price}
            id={item.id}
            quantity={item.quantity}
            title={item.title}
            onRemove={handleRemove}
          />
        ))}
      </ol>

      <p>Сумма заказов: {totalPrice.toFixed(2)}</p>

      <button onClick={handleCrear}>очистить корзину</button>
    </div>
  );
};
