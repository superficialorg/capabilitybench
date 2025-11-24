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
      <div className="mt-12">
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
              className="flex flex-col space-y-1 mb-8"
              href={`/research/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-black tabular-nums whitespace-nowrap">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                  {post.slug === 'cape' && (
                    <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200 w-fit">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                      New
                    </span>
                  )}
                </div>
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
