import * as React from "react";

interface InventoriaProps {
  list: string[];
  isOpen: boolean;
}

export const Inventoria = ({list, isOpen} : InventoriaProps) => {
  console.log(isOpen)
  return (
    <>
      {isOpen &&
        <ul className="list-group list-group-horizontal flex-wrap">
          {list.length >= 1 ? list.map((item, i) => (
            <li key={i} className="list-group-item list-group-item-info">
              {item}
            </li>
          )) : (
            <li className="list-group-item list-group-item-info">
              Inventoria est pour le moment vide ⛺
            </li>
          )}
        </ul>
      }
    </>

  );
};