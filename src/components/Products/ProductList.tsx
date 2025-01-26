import React from "react";
import { ProductItem } from "./ProductItem";
import styles from "./Product.module.scss";
import { useSelector } from "react-redux";

import { getLoading, getProducts } from "../../store/productSlice";

export const ProductList: React.FC = () => {
  const list = useSelector(getProducts);
  const loading = useSelector(getLoading);
  return (
    <div className={styles["product-list"]}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        list.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
};
