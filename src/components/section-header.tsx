export default function SectionHeader({ children }: { children?: React.ReactNode}) {
  return (
    <h3 className="mb-2 font-bold border-b-4 border-b-blue-950 inline-block text-lg print:text-sm">
      {children}
    </h3>
  )
}