import { Check } from "lucide-react"
import Image from "next/image"
import XReveal from "../reveals/x-reveal"

const About = () => {
  return (
    <section>
      <div
        className="container flex flex-col md:flex-row py-28 justify-between items-center gap-8"
      >
        <XReveal
          className="flex flex-col max-w-lg"
        >
          <span
            className="text-sm font-medium"
          >
            Editar
          </span>
          <h2
            className="mb-2 text-2xl font-bold text-primary md:mb-4 lg:text-3xl"
          >
            ¿Qué es Carta Digital?
          </h2>
          <p
            className="text-muted-foreground"
          >
            Con Carta digital tendrás tu usuario personalizado al que accederás desde tu mail y contraseña para poder gestionar todos los datos de tu cuenta.
          </p>
          <div>
            {
              new Array(4).fill(0).map((_, i) => (
                <XReveal
                  className="flex flex-row items-center gap-2 mt-4"
                  key={i}
                  index={i}
                  delay={1}
                >
                  <Check strokeWidth={3.4} />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, enim.
                  </p>
                </XReveal>
              ))
            }
          </div>
        </XReveal>
        <XReveal
          side='right'
          className="w-auto"
        >
          <Image
            src="/about.png"
            alt="Hero"
            width={600}
            height={600}
            className="rounded-md"
          />
        </XReveal>
      </div>
    </section>
  )
}

export default About