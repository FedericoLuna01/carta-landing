'use client'

import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navbarItems } from "@/data/data"

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        <Button
          className="flex md:hidden"
          variant="outline"
          aria-label="Open navigation"
          size='icon'
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side='top'
      >
        <SheetHeader>
          <SheetTitle>
            Carta digital
          </SheetTitle>
        </SheetHeader>
        <ul
          className="flex items-center justify-between flex-col"
        >
          {
            navbarItems.map((item) => (
              <li
                key={item.label}
              >
                <Button
                  variant='link'
                  onClick={() => setOpen(false)}
                  asChild
                >
                  <Link
                    href={item.href}
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                </Button>
              </li>
            ))
          }
          <li
            className="mt-4"
          >
            <Button>
                Se parte
            </Button>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar