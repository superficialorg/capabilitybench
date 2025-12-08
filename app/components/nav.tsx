import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link href="/" className="flex items-center align-middle relative py-1 pl-0 gap-2">
            <Image src="/Logo1.png" alt="CapabilityBench Logo" width={23} height={23} />
            <span className={`${inter.className} font-semibold text-lg`}>CapabilityBench</span>
          </Link>
        </nav>
      </div>
    </aside>
  )
}
