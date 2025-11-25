import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mb-16">
      <p className="mt-8 text-black flex items-center gap-4 text-sm flex-wrap">
        <span className="whitespace-nowrap">© {new Date().getFullYear()} Superficial Company</span>
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
