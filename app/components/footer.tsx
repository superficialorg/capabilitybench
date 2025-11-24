import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-row space-x-4 text-black">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 text-black"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/superficiallabs"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">X</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 text-black"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/superficiallabs"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 text-black"
            href="mailto:contact@superficiallabs.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">contact@superficiallabs.com</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-black flex items-center gap-4">
        © {new Date().getFullYear()} Superficial Company
        <span className="flex items-center gap-4">
          <Link href="/terms" className="transition-all hover:text-neutral-800 underline">
            Terms
          </Link>
          <Link href="/privacy" className="transition-all hover:text-neutral-800 underline">
            Privacy
          </Link>
        </span>
      </p>
    </footer>
  )
}
