import SectionContent from "@/components/section-content";
import SectionHeader from "@/components/section-header";
import { useMDXComponents } from "@/mdx-components";
import { MapPinIcon } from "@heroicons/react/16/solid";
import { MDXRemote } from 'next-mdx-remote/rsc'

export interface Entry {
  data: {
    company: string
    title: string
    location: string
    period: string
  }
  content: string
}

interface Props {
  entries: Entry[]
}

export default function Experience({ entries }: Props) {
  const components = useMDXComponents({})
  return (
    <section className="p-2 px-4 w-full print:w-3/5">
      <SectionHeader>Experience</SectionHeader>
      {entries.map((entry, index) => (
        <div key={index} className="my-4">
          <div className="flex justify-between items-baseline gap-3">
            <h3 className="font-bold text-md print:text-sm">
              {entry.data.company}, {entry.data.title}
            </h3>
            <h3 className="text-blue-950 text-md shrink-0 print:text-xs">
              {entry.data.period}
            </h3>
          </div>
          <h4 className="font-semibold text-md flex gap-1 items-center text-gray-600 print:text-xs">
            <MapPinIcon className="size-5 print:size-3" /> {entry.data.location}
          </h4>
          <SectionContent>
            <MDXRemote source={entry.content} components={components} />
          </SectionContent>
        </div>
      ))}
    </section>
  )
}