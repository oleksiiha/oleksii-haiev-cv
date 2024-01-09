export default function SectionContent({ children }: { children : React.ReactNode}) {
  return (
    <section className="p-4 text-sm">
      {children}
    </section>
  )
}