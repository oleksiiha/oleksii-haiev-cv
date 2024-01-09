export default function HatTag({ children }: { children : React.ReactNode }) {
  return (
    <div className="flex items-center gap-1 flex-0 rounded-lg p-1 px-3 bg-slate-300 text-sm">
      {children}
    </div>
  )
}