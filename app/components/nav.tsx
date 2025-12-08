import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const navItems = {
  '/research': {
    name: 'research',
  },
  '/cape': {
    name: 'cape',
  },
  '/capabilitybench': {
    name: 'capabilitybench',
  },
}

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link href="/" className="flex items-center align-middle relative py-1 pl-0 gap-2">
            <Image src="/Logo1.png" alt="Superficial Logo" width={23} height={23} />
            <span className={`${inter.className} font-semibold text-lg`}>Superficial</span>
          </Link>
          <div className="flex flex-row items-center space-x-0 flex-nowrap overflow-x-auto">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 flex align-middle relative py-1 px-2 m-1 text-black whitespace-nowrap"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
