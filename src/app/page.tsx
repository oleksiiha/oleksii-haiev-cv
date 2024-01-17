import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Columns from '@/components/columns'
import Experience, { Entry } from '@/components/experience'
import Hat from '@/components/hat'
import Skills from '@/components/skills.mdx'

export default async function Home() {
  const experiences = await getData()
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
        <Experience entries={experiences as Entry[]} />
        <Skills />
      </Columns>
    </main>
  )
}

async function getData() {
  const blogDir = "./src/experiences"
  const files = fs.readdirSync(path.join(blogDir))
  const experiences = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')
    const { data, content } = matter(fileContent)
    return { data, content }
  })

  return experiences.sort((a, b) => {
    const yearA = a.data.period.split('-')[0].split('/')[1] 
    const yearB = b.data.period.split('-')[0].split('/')[1]
    return yearA > yearB ? -1 : 1
  })
}