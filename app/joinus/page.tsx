import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/research/utils'

export const metadata = {
  title: 'Join us',
  description: 'Join Superficial Labs.',
}

export default function Page() {
  let allBlogs = getBlogPosts()
  // Filter to show joinus posts, exclude CAPE post
  let joinusPosts = allBlogs.filter((post) => 
    post.slug === 'post-training' || post.slug === 'cape-developer-experience'
  )

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Join us</h1>
      <p className="mb-4">
        Superficial is an artificial intelligence research and product company. Our goal is to accelerate human progress by making AI capable and reliable enough for the world's most important work.
      </p>
      <p className="mb-4">
        We're building the infrastructure that advances the frontier of what AI can achieve in real-world, high-stakes domains. Our work spans research, engineering, and product development — united by a belief that progress accelerates when intelligence becomes both more powerful and more dependable.
      </p>
      <p className="mb-12">
        If you want to solve hard problems with real-world significance, and help shape the systems that will define the next era of AI, we'd love to meet you.
      </p>
      <h2 className="font-semibold text-xl mb-8 tracking-tighter">Open roles</h2>
      <div>
        {joinusPosts
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
                <p className="text-black tabular-nums whitespace-nowrap">
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

