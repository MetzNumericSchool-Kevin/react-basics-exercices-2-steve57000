import * as React from "react";

interface BienvenueAventurierProps {
  children: React.ReactNode
}
export const BienvenueAventurier = ({children} : BienvenueAventurierProps)  => {
  return (
    <>
      {children}
    </>
  )
}