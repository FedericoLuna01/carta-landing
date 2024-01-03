import Image from "next/image"

import { navbarItems, socialItems } from "@/data/data"
import { Button } from "./ui/button"
import Link from "next/link"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-background">
      <div className="container py-4 mx-auto">
        <hr className="my-6 border-gray-200 md:my-10 " />
        <div className="flex flex-col items-center text-center">
          <Link href="#">
            <Image
              className="w-auto h-7"
              src="/logocartafinal.png"
              alt="Logo carta"
              width={200}
              height={100}
            />
          </Link>
          <div className="flex flex-wrap justify-center -mx-4">
            {
              navbarItems.map(item => (
                <Button
                  key={item.label}
                  variant='link'
                  asChild
                >
                  <a
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </Button>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            Carta © Copyright 2023 - {year}. Todos los derechos reservados.
          </p>
          <div className="flex">
            {
              socialItems.map(({ href, icon, id }) => (
                <Button
                  key={id}
                  className="pl-0 space-x-2"
                  variant='ghost'
                  size='icon'
                  asChild
                >
                  <a href={href}>
                    {icon}
                  </a>
                </Button>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer