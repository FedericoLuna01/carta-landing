import { stepsItems } from "@/data/data"
import YReveal from "../reveals/y-reveal"
import XReveal from "../reveals/x-reveal"
import { Button } from "../ui/button"

const Steps = () => {
  return (
    <section
      className="my-28"
    >
      <div
        className="container flex items-center flex-col"
      >
        <YReveal
          amount={1}
          className="mb-6"
        >
          <h2 className="mb-1 text-center text-2xl font-bold text-primary md:mb-2 lg:text-3xl">
            Empezá hoy mismo!
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-muted-foreground md:text-lg">
            Seguí estos simples pasos para comenzar a disfrutar de tu nuevo espacio.
          </p>
        </YReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {
            stepsItems.map(({ id, description, title }, index) => (
              <XReveal
                key={index}
                index={index}
                className="bg-white rounded-lg p-4 text-center shadow-sm border border-border flex flex-col justify-between">
                <div>
                  <div className="bg-gradient-to-br from-primaryRed from-50% to-primaryYellow font-bold text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {id}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {title}
                  </h3>
                  <p>
                    {description}
                  </p>
                </div>
              </XReveal>
            ))
          }
        </div>
        <div>
          <Button
            size='lg'
            className="font-bold"
          >
            Lo quiero!
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Steps