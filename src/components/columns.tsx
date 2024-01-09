export default function Columns({ children }: { children : React.ReactNode }) {
  return (
    <div className="flex gap-4 justify-between flex-col lg:flex-row print:flex-row">
      {children}
    </div>
  )
}