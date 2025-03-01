import * as React from "react";

interface PotionProps {
  list: string[];
}
export const Potion = ( {list} :PotionProps) => {
  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index} title={item}>{item}</li>
        ))}
      </ul>
      <div className="card-actions">
        <button>Ajouter à Inventoria</button>
      </div>
    </>
  );
};