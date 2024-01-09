import Columns from '@/components/columns'
import Experience from '@/components/experience'
import Hat from '@/components/hat'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className={`
      max-w-screen-lg m-4 lg:mx-auto print:m-0
      p-4 print:p-0
      rounded-lg shadow-2xl shadow-black print:shadow-none
      flex flex-col gap-4
      `}
    >
      <Hat />
      <Columns>
        <Experience />
        <Skills />
      </Columns>
    </main>
  )
}
