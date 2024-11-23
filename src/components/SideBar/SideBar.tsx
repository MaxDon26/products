import { Button } from "@components/common";
import styles from "./SideBar.module.scss";
import React, { ChangeEvent } from "react";

interface SidebarProps {
  filterBtns: string[];
  onClick: (type: string) => void;
  activeFilter: string;
  searchChange: (search: string) => void;
  searchValue: string;
}

export const SideBar: React.FC<SidebarProps> = ({
  filterBtns,
  onClick,
  activeFilter,
  searchValue,
  searchChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchChange(event.target.value);
  };
  return (
    <aside className={styles.sideBar}>
      <input onChange={handleChange} value={searchValue} />
      <div className={styles.buttons}>
        {filterBtns.map((btn) => (
          <Button
            isActive={btn === activeFilter}
            onClick={() => onClick(btn)}
            key={btn}
          >
            {btn}
          </Button>
        ))}
      </div>
    </aside>
  );
};
