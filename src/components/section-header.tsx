export default function SectionHeader({ children }: { children : React.ReactNode}) {
  return (
    <h3 className="font-bold border-b-4 border-b-blue-950 inline-block print:text-sm">
      {children}
    </h3>
  )
}