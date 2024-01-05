import { Check } from "lucide-react"

import XReveal from "./reveals/x-reveal"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  price: number
  oldPrice?: number
  period: string
  description: string
  discount?: string
  include: string[]
  isBest?: boolean
  delay?: number
}

const PricingCard: React.FC<PricingCardProps> = ({
  price,
  oldPrice,
  period,
  description,
  discount,
  include,
  isBest,
  delay = 0
}) => {
  return (
    <XReveal
      className={cn("relative p-6  rounded-xl shadow-sm", {
        "bg-card border border-border": !isBest,
        "bg-card-foreground": isBest,
      })}
      index={delay}
      side="right"
    >
      {
        isBest && (
          <div className="absolute inset-x-0 transform translate-y-px -top-1">
            <div className="flex justify-center transform -translate-y-1/2 rounded-3xl">
              <span className="inline-flex px-4 py-1 text-sm font-bold tracking-wider uppercase bg-card border-8 border-card-foreground text-card-foreground rounded-xl"> Mejor precio </span>
            </div>
          </div>
        )
      }
      <div className="flex flex-col p-4">
        <div className="py-6">
          <h2 className={cn("text-5xl font-thin leading-6", {
            'text-muted-foreground': !isBest,
            'text-card': isBest
          })}>
            <span className="ml-auto font-extrabold"> ${price} </span>
            <del className="text-3xl font-medium">${oldPrice}</del>
          </h2>
          {
            discount && (
              <p
                className={cn("text-sm font-medium mt-2", {
                  "text-muted-foreground": !isBest,
                  "text-card": isBest
                })}
              >
                {discount}
              </p>
            )
          }
          <p className={cn("mt-6 text-xl font-semibold", {
            'text-muted-foreground': !isBest,
            'text-card': isBest
          })}>
            {period}
          </p>
          <p className={cn("inline-flex items-center px-3 mt-2 py-1.5 rounded-lg text-sm font-medium  w-full", {
            'text-muted-foreground bg-gray-200/60': !isBest,
            'text-card-foreground bg-card': isBest
          })}>
            {description}
          </p>
        </div>
      </div>
      <div className="p-4">
        <ul role="list" className="mt-4 space-y-3 prose list-disc">
          {
            include.map((item, i) => (
              <li
                key={i}
                className="flex items-center space-x-3"
              >
                <Check className="w-4 h-4" color={isBest ? '#FFFFFF' : '#64748b'} strokeWidth={4} />
                <span className={cn("text-base text-card", {
                  'text-muted-foreground': !isBest,
                })}>
                  {item}
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    </XReveal>
  )
}

export default PricingCard