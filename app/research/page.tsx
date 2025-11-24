import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/research/utils'

export const metadata = {
  title: 'Research',
  description: 'Research publications and articles.',
}

export default function Page() {
  let allBlogs = getBlogPosts()
  // Filter to only show the CAPE post
  let researchPosts = allBlogs.filter((post) => post.slug === 'cape')

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Research</h1>
      <p className="mb-8">
        We believe AI accelerates human progress only when capability and reliability move forward together. Our research creates transparent, interpretable, and verifiable systems that make that possible.
      </p>
      <div className="mt-8">
        {researchPosts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/research/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-black w-[100px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-black tracking-tight font-medium">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  )
}
