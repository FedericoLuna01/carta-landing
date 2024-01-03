import Hero from '@/components/sections/hero'
import Features from '@/components/sections/features'
import Pricing from '@/components/sections/pricing'
import Cta from '@/components/sections/cta'
import Contact from '@/components/sections/contact'
import Testimonials from '@/components/sections/testimonials'
import About from '@/components/sections/about'
import Whatsapp from '@/components/whatsapp'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Cta />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
      <Whatsapp />
    </main>
  )
}
