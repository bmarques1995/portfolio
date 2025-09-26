"use client";
import Link from 'next/link'
import Image from 'next/image'

const navItems = {
  '/': {
    name: 'home',
  },
  '/portfolio': {
    name: 'portfolio',
  },
  '/blog': {
    name: 'blog',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export function Navbar() {
  const buttonStyle = "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-0.5 mx-0.5 my-1";
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <div className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
            <button type="button" className={buttonStyle} onClick={() => console.log("Clicked US")}>
              <Image
                src="/assets/us.svg"
                alt="US Flag"
                width={32}
                height={24}
              />
            </button>
            <button type="button" className={buttonStyle} onClick={() => console.log("Clicked BR")}>
              <Image
                src="/assets/br.svg" 
                alt="BR Flag"
                width={32}
                height={24}
              />
            </button>
          </div>
        </nav>
      </div>
    </aside>
  )
}
