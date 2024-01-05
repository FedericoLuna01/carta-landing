import { featuresItems } from "@/data/data"
import YReveal from "../reveals/y-reveal"
import XReveal from "../reveals/x-reveal"

const Features = () => {
  return (
    <section className="container py-28">
      <div className="mx-auto">
        <YReveal
          amount={1}
          className="mb-10 md:mb-16"
        >
          <h2 className="mb-4 text-center text-2xl font-bold text-primary md:mb-6 lg:text-3xl">
            Our competitive advantage
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-muted-foreground md:text-lg">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
          </p>
        </YReveal>
        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
          {
            featuresItems.map((item, i) => (
              <XReveal index={i} side="right" key={item.title} className="flex gap-4 md:gap-6 border rounded-lg border-border p-4 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-foreground text-white dark:text-black shadow-lg md:h-14 md:w-14 md:rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mb-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </XReveal>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Features