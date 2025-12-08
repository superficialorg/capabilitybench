export default function Footer() {
  return (
    <footer className="mb-16">
      <div className="mt-8 text-black text-sm">
        <div className="flex items-center gap-4 flex-wrap">
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
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Superficial Labs</p>
      </div>
    </footer>
  )
}
