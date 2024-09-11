"use client"
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/gallery': {
    name: 'gallery',
  },
  '': {
    name: 'ES/EN'
  }
}
// Change LANGUAGE from ES/EN
function switchLang(){
  let lang = document.getElementsByClassName("lang") as HTMLCollectionOf<HTMLElement>;
  if(lang.length > 1){
    console.log(lang)
      if(lang[1].hidden){
        lang[0].hidden = true;
        lang[1].hidden = false;
      } else {
        lang[1].hidden = true;
        lang[0].hidden = false;
      }
  } else {
    console.log("There it is another blog entry on English. The swith ES/EN will not work on this page.")
  }

}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              if(path.length > 0){
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )} else {
                return (
                  <p
                    key={path}
                    onClick={switchLang}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                    style={{cursor: "pointer"}}
                  >
                    {name}
                </p>
            )}
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
