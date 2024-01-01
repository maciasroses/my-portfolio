import React from "react";
import { INavButtonProps } from "../types";

const NavButton = ({ isTop, onClick, title }: INavButtonProps) => {
  return (
    <button
      type="button"
      className={`${isTop ? "pb-4 px-4" : "p-4"}`}
      onClick={onClick}
    >
      <li>{title}</li>
    </button>
  );
};

export default NavButton;
