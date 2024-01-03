import YReveal from "../reveals/y-reveal"
import TestimonialsCarousel from "../testimonials-carousel"

const Testimonials = () => {
  return (
    <section
      className=""
      id="testimonials"
    >
      <YReveal
        className="container flex flex-col items-center justify-center gap-4 py-24"
        amount={.7}
      >
        <div
          className="text-center space-y-2"
        >
          <p
            className="text-sm font-medium"
          >
            Testimoniales
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold"
          >
            Algunos de nuestros clientes
          </h2>
        </div>
        <TestimonialsCarousel />
      </YReveal>
    </section>
  )
}

export default Testimonials