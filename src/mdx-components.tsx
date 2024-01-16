import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ul: (props) => <ul className="list-disc list-outside" {...props} />,
    li: (props) => <li className="my-3" {...props} />,
  }
}