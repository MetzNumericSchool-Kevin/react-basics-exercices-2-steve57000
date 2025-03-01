import * as React from "react";

interface PotionShopProps {
  title: string;
  children: React.ReactNode
}
export const PotionShop = ( {title, children} : PotionShopProps ) => {
  // const {title} = props

  return (
    <>
      <h2 className="mb-5">{title}</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
        <div className="card col border text-bg-dark bg-dark">
            {children}
        </div>
      </div>
    </>
  );
};