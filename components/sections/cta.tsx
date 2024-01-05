import { Button } from '../ui/button'
import ScaleReveal from '../reveals/scale-reveal'

const Cta = () => {
  return (
    <section
      className='radiant-gradient'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        className='h-16 w-full'
      >
        <path
          fill="#FFF"
          d="M1200 0H0l598.97 114.72L1200 0z"
          className="shape-fill"
        ></path>
      </svg>
      <ScaleReveal
        className="container my-14 space-y-8 px-6 text-gray-500 md:px-12 lg:px-20"
      >
        <div className="m-auto space-y-6 md:w-8/12 lg:w-7/12">
          <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
            Empezá ahora con carta digital
          </h1>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300">
          Be part of millions people around the world using tailus in modern User Interfaces.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size='lg'
              asChild
            >
              {/* TODO: Api de wpp */}
              <a href="">
                Obtener
              </a>
            </Button>
          </div>
        </div>
      </ScaleReveal>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        className='h-16 w-full rotate-180'
      >
        <path
          fill="#FFF"
          d="M1200 0H0l598.97 114.72L1200 0z"
          className="shape-fill"
        ></path>
      </svg>
    </section>

  )
}

export default Cta