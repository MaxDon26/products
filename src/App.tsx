import { useEffect, useState } from "react";
import styles from "./App.module.scss";

import { ProductList, SideBar } from "./components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { fetchProduct } from "./store/productSlice";
import { Cart } from "@components/Cart/Cart";

function App() {
  // const [activeFilter, setActiveFilter] = useState<string>("all");
  // const [search, setSearch] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // const filterBtns: string[] = [
  //   "all",
  //   ...new Set(products.map((product) => product.company)),
  // ];

  // const handleChangeFilter = (type: string) => {
  //   setActiveFilter(type);
  //   setSearch("");
  // };

  // useEffect(() => {
  //   setActiveFilter("all");
  // }, [search]);

  // const filtredProducts = search
  //   ? products.filter((product) =>
  //       product.title.toLowerCase().includes(search.toLowerCase())
  //     )
  //   : activeFilter === "all"
  //     ? products
  //     : products.filter((product) => product.company === activeFilter);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product List</h1>
      <div className={styles.wrapper}>
        {/* <SideBar
          searchChange={setSearch}
          searchValue={search}
          filterBtns={filterBtns}
          onClick={handleChangeFilter}
          activeFilter={activeFilter}
        /> */}
        <main>
          <ProductList />
        </main>
        <aside>
          <Cart />
        </aside>
      </div>
    </div>
  );
}

export default App;
