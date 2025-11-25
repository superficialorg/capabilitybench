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
            <p className="h-7">Twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 text-black"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/superficiallabs"
          >
            <p className="h-7">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 text-black"
            href="mailto:contact@superficiallabs.com"
          >
            <p className="h-7">Contact</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-black flex items-center gap-4 text-sm">
        © {new Date().getFullYear()} Superficial Company
        <span className="flex items-center gap-4">
          <a
            href="https://x.com/superficiallabs"
            className="transition-all hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://github.com/superficiallabs"
            className="transition-all hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@superficiallabs.com"
            className="transition-all hover:text-neutral-800"
          >
            Contact
          </a>
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
