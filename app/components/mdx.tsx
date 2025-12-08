import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  // Italicize http/https external links
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return (
      <a target="_blank" rel="noopener noreferrer" {...props} className="italic">
        {props.children}
      </a>
    )
  }

  // mailto: and other links without arrow
  return <a {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="italic">
      {children}
    </a>
  )
}

function InternalLink({ href, children }) {
  return (
    <Link href={href} className="italic">
      {children}
    </Link>
  )
}

function Code({ children, ...props }) {
  if (typeof children !== 'string') {
    return <code {...props}>{children}</code>
  }
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function Heading({ level, children }) {
  const slug = typeof children === 'string' ? slugify(children) : ''
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  
  return (
    <Tag id={slug}>
      <a href={`#${slug}`} className="anchor" />
      {children}
    </Tag>
  )
}

const H1 = ({ children }) => <Heading level={1}>{children}</Heading>
const H2 = ({ children }) => <Heading level={2}>{children}</Heading>
const H3 = ({ children }) => <Heading level={3}>{children}</Heading>
const H4 = ({ children }) => <Heading level={4}>{children}</Heading>
const H5 = ({ children }) => <Heading level={5}>{children}</Heading>
const H6 = ({ children }) => <Heading level={6}>{children}</Heading>

let components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  ExternalLink,
  InternalLink,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
