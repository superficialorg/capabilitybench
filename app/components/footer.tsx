import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-row space-x-4 text-black text-sm">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 text-black"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/superficiallabs"
          >
            <p className="h-7">twitter</p>
            <span className="ml-1">→</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 text-black"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/superficiallabs"
          >
            <p className="h-7">github</p>
            <span className="ml-1">→</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 text-black"
            href="mailto:contact@superficiallabs.com"
          >
            <p className="h-7">contact@superficiallabs.com</p>
            <span className="ml-1">→</span>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-black flex items-center gap-4 text-sm">
        © {new Date().getFullYear()} Superficial Company
        <span className="flex items-center gap-4">
          <Link href="/terms" className="transition-all hover:text-neutral-800">
            Terms
          </Link>
          <Link href="/privacy" className="transition-all hover:text-neutral-800">
            Privacy
          </Link>
        </span>
      </p>
    </footer>
  )
}
