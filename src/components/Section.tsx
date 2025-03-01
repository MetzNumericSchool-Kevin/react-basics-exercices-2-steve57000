import * as React from "react";

interface SectionProps {
  id: string
  className? : string
  children: React.ReactNode
}

export const Section = ({id, className, children} : SectionProps) => {
const classname = className ? `my-5 ${className}` : "my-5";

  return (
    <section id={id} className={classname}>
      {children}
    </section>
  )
}
