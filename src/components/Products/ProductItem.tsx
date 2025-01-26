import { Product } from "model";
import React from "react";
import styles from "./Product.module.scss";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuntity,
  getQuantityById,
  increaseQuntity,
} from "../../store/cartSlice";

interface ProductProps {
  product: Product;
  onDelete?: (id: Product["id"]) => void;
  onChangePrice?: () => void;
}

export const ProductItem: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const quantity = useSelector((state: RootState) =>
    getQuantityById(state, product.id)
  );

  const handleIncrease = () => {
    dispatch(increaseQuntity(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuntity(product.id));
  };

  console.log(product.id, quantity);
  return (
    <div className={styles["product-item"]}>
      <img className={styles.image} src={product.image} alt="img" />

      <div>
        <h3 className={styles.title}>{product.title}</h3>
        <p>{product.price} $</p>
        <p>{product.company}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          add to cart
        </button>

        {!!quantity && (
          <div
            style={{
              marginTop: 10,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};
