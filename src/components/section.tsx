interface SectionProps {
  id: string
  className? : string
  children?: React.ReactNode
}

export const Section = ({id, className, children} : SectionProps) => {
const classname = `my-5 ${className}`;

  return (
    <section id={id} className={classname}>
      {children}
    </section>
  )
}