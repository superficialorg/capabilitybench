import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Superficial
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="mb-4 flex items-center gap-2">
        <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
          New
        </span>
        <Link
          href="https://core-seven-nu.vercel.app/cape"
          className="text-neutral-900 underline transition-colors hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400"
        >
          Introducing CAPE: Breaking Through the Post-Training Scaling Wall
        </Link>
      </div>
    </section>
  )
}
