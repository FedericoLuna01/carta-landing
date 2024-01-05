'use client'

import { Star } from "lucide-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { testimonialsItems } from "@/data/data"

const TestimonialsCarousel = () => {
  return (
    <div
      className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl px-0 md:px-8"
    >
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
        className="flex items-center justify-center gap-4"
      >
        <CarouselContent>
          {
            testimonialsItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card
                    className="cursor-pointer"
                  >
                    <CardContent className="flex items-center justify-start px-8 py-4">
                      <div>
                        <Image
                          src={`/testimonial-${index + 1}.webp`}
                          width={100}
                          height={100}
                          alt="Testimonial"
                          className="aspect-square"
                        />
                      </div>
                      <div
                        className="ml-4 "
                      >
                        <p className="font-medium">
                          {item.name}
                        </p>
                        <p className="text-sm">
                          {item.type}
                        </p>
                        <div
                          className='flex items-center justify-start mt-2'
                        >
                          <Star className="w-5 h-5" fill="#ffc107" color='ffc107' />
                          <Star className="w-5 h-5" fill="#ffc107" color='ffc107' />
                          <Star className="w-5 h-5" fill="#ffc107" color='ffc107' />
                          <Star className="w-5 h-5" fill="#ffc107" color='ffc107' />
                          <Star className="w-5 h-5" fill="#ffc107" color='ffc107' />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <div
        >
          <CarouselPrevious className="top-[120%] left-[30%] sm:-left-16 sm:-right-12 sm:top-1/2 sm:-translate-y-1/2" />
          <CarouselNext className="top-[120%] right-[30%] sm:-right-12 sm:top-1/2 sm:-translate-y-1/2" />
        </div>
      </Carousel>
    </div>
  )
}

export default TestimonialsCarousel