import SectionHeader from '@/components/section-header'
import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ul: (props) => <ul className="list-disc list-outside py-2 px-4" {...props} />,
    li: (props) => <li {...props} />,
    p: (props) => <p className="py-2" {...props} />,
    h3: (props) => <SectionHeader {...props} />,
  }
}