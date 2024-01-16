export default function SectionContent({ children }: { children : React.ReactNode}) {
  return (
    <section className="p-2 px-4 text-sm print:text-xs">
      {children}
    </section>
  )
}