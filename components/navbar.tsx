import Link from "next/link"

import { Button } from "./ui/button"
import { navbarItems } from "@/data/data"
import MobileNavbar from "./mobile-navbar"

const Navbar = () => {
  return (
    <header
      className="sticky top-0 z-50 bg-background"
    >
      <div
        className="container flex flex-row justify-between items-center h-full gap-4"
      >
        <h1
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Carta digital
        </h1>
        <nav>
          <ul
            className="flex items-center justify-between gap-2 md:gap-4"
          >
            {
              navbarItems.map((item) => (
                <li
                  key={item.label}
                  className="hidden md:block"
                >
                  <Button
                    variant='link'
                    asChild
                  >
                    <a
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </Button>
                </li>
              ))
            }
            <MobileNavbar />
            <li
              className="hidden md:block"
            >
              <Button>
                Se parte
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="h-20 bg-gradient-to-b from-background"
      />
    </header>
  )
}

export default Navbar