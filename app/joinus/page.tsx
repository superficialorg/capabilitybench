import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Join us',
  description: 'Join Superficial Labs.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Join us</h1>
      <p className="mb-4">
        Superficial Labs is an artificial intelligence research and product company. Our mission is to accelerate human progress by advancing AI capability and reliability. We're building systems that push the frontier of how AI can be applied in today's most critical domains. If you want to work on hard problems with meaningful impact, we'd love to meet you.
      </p>
      <BlogPosts />
    </section>
  )
}

