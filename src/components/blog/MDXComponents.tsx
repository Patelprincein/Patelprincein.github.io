import type { ComponentProps } from 'react'

export const MDXComponents = {
  h2: (props: ComponentProps<'h2'>) => <h3 className="mdx-heading" {...props} />,
  a: (props: ComponentProps<'a'>) => <a target="_blank" rel="noreferrer" {...props} />,
  code: (props: ComponentProps<'code'>) => <code className="mdx-code" {...props} />,
  pre: (props: ComponentProps<'pre'>) => <pre className="mdx-pre" {...props} />,
}
