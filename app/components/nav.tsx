import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const navItems = {
  '/research': {
    name: 'research',
  },
  '/joinus': {
    name: 'join us',
  },
  '/cape': {
    name: 'cape',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center space-x-0 pr-10 flex-nowrap overflow-x-auto">
            <Link href="/" className="flex items-center gap-2 align-middle relative py-1 px-2 m-1 mr-6">
              <Image
                src="/superficial-icon.png"
                alt="Superficial Labs"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className={`${inter.className} font-medium`}>Superficial</span>
            </Link>
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
