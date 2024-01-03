import { Button } from "../ui/button"

const Pricing = () => {
  return (
    <>
      <section>
        <div className="relative items-center container pt-24">
          <div className="mx-auto space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-14 lg:mx-auto xl:grid-cols-3">
            <div className="p-6 border border-input rounded-xl shadow-sm">
              <div className="flex flex-col p-4">
                <div className="py-6">
                  <h2 className="text-5xl font-thin leading-6 text-muted-foreground">
                    <span className="ml-auto font-extrabold text-muted-foreground"> $107 </span>
                    <del className="text-3xl font-medium text-dim">$179</del>
                  </h2>
                  <p className="mt-6 text-xl font-semibold text-muted-foreground">Teams</p>

                  <p className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-50 text-gray-500 mt-2 w-full">Up to 5 seats and priority support.</p>
                </div>
              </div>
              <div className="p-4">
                <ul role="list" className="mt-4 space-y-3 prose list-disc">
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground"> 15 Templates + releases </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground">UI Kits</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground"> HTML &amp; Next.js </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground"> Figma files </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground"> Flexible license </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground"> Priority Support </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative p-6 bg-card-foreground rounded-xl">
              <div className="absolute inset-x-0 transform translate-y-px -top-1">
                <div className="flex justify-center transform -translate-y-1/2 rounded-3xl">
                  <span className="inline-flex px-4 py-1 text-sm font-bold tracking-wider uppercase bg-card border-8 border-card-foreground text-card-foreground rounded-xl"> Mejor precio </span>
                </div>
              </div>
              <div className="flex flex-col p-4">
                <div className="py-6">
                  <h2 className="text-5xl font-thin leading-6 text-card">
                    <span className="ml-auto font-extrabold text-card"> $53 </span>
                    <del className="text-3xl font-medium text-card">$89</del>
                  </h2>
                  <p className="mt-6 text-xl font-semibold text-card">Freelancer</p>
                  <p className="inline-flex items-center px-3 mt-2 py-1.5 rounded-lg text-sm font-medium bg-card w-full text-card-foreground">This tier includes Figma files too!
                  </p>
                </div>
              </div>
              <div className="p-4">
                <ul role="list" className="mt-4 space-y-3 prose list-disc">
                  <li className="flex space-x-3">
                    <span className="text-base text-card"> 14 Templates + releases </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-card"> HTML &amp; Next.js </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-card"> Figma files </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-card"> Flexible license </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 border border-input rounded-xl shadow-sm">
              <div className="flex flex-col p-4">
                <div className="py-6">
                  <h2 className="text-5xl font-thin leading-6 text-muted-foreground">
                    <span className="ml-auto font-extrabold text-muted-foreground"> $107 </span>
                    <del className="text-3xl font-medium text-dim">$179</del>
                  </h2>
                  <p className="mt-6 text-xl font-semibold text-muted-foreground">Teams</p>

                  <p className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-50 text-gray-500 mt-2 w-full">Up to 5 seats and priority support.</p>
                </div>
              </div>
              <div className="p-4">
                <ul role="list" className="mt-4 space-y-3 prose list-disc">
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground"> 15 Templates + releases </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground">UI Kits</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground"> HTML &amp; Next.js </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground"> Figma files </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground"> Flexible license </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-base text-muted-foreground"> Priority Support </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24 pt-12 container">
        <div className=" flex flex-col items-center justify-center w-full px-6 py-16 mx-auto overflow-hidden bg-zinc-200/40 lg:px-12 shadow-long lg:py-12 rounded-xl">
          <div className="flex flex-col items-center justify-start w-full space-y-8 text-center lg:space-y-0 lg:text-left lg:justify-between lg:flex-row">
            <div className="lg:max-w-xl">
              <h2 className="max-w-5xl pb-4 mx-auto text-3xl font-bold leading-none tracking-tighter text-primary sm:pb-0 sm:text-3xl">
              Preguntar por un precio
                <span className="ml-2 font-bold">
                  <span className="text-primaryRed"> ESPECIAL </span>
                </span>
              </h2>
            </div>
            <div className="flex justify-start">
              <Button
                size='lg'
                className="font-bold py-4 px-8 text-md sm:px-12 sm:py-6 sm:text-lg"
              >
                Obtener
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing