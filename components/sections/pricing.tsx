import { pricingItems } from "@/data/data"
import PricingCard from "../pricing-card"

const Pricing = () => {
  return (
    <section
      id='precios'
    >
      <div className="relative items-center container py-28">
        <div className="mx-auto space-y-12 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-14 lg:mx-auto xl:grid-cols-3">
          {
            pricingItems.map(({ description, include, period, price, oldPrice, discount, isBest }, index) => (
              <PricingCard
                key={index}
                delay={index}
                description={description}
                include={include}
                period={period}
                price={price}
                oldPrice={oldPrice}
                discount={discount}
                isBest={isBest}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Pricing