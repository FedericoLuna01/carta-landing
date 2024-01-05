import TestimonialsCarousel from "../testimonials-carousel"

const Testimonials = () => {
  return (
    <section
      id="testimonials"
    >
      <div
        className="container flex flex-col items-center justify-center gap-4 py-24"
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
      </div>
    </section>
  )
}

export default Testimonials