import { contactItems, socialItems } from "@/data/data"
import { Button } from "../ui/button"
import ContactForm from "../contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import XReveal from "../reveals/x-reveal"

const Contact = () => {
  return (
    <section className="bg-background">
      <div className="container py-12 ">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <XReveal
            className="lg:w-1/2 lg:mx-6">
            <h2
              className="text-2xl font-bold text-primary md:mb-4 lg:text-3xl"
            >
              Nos podes encontrar en
            </h2>
            <div className="flex flex-col items-start gap-2">
              {
                contactItems.map(({ id, value, href, icon }) => (
                  <Button
                    key={id}
                    className="pl-0 space-x-2"
                    variant='link'
                    asChild
                  >
                    <a href={href}>
                      {icon}
                      <p>{value}</p>
                    </a>
                  </Button>
                ))
              }
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-600">Seguinos en</h3>
              <div
                className="space-x-4 mt-2"
              >
                {
                  socialItems.map(({ href, icon, id }) => (
                    <Button
                      key={id}
                      className="pl-0 space-x-2"
                      variant='ghost'
                      size='icon'
                      asChild
                    >
                      <a href={href}>
                        {icon}
                      </a>
                    </Button>
                  ))
                }
              </div>
            </div>
          </XReveal>
          <XReveal
            side='right'
            className="mt-8 lg:w-1/2 lg:mx-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  No dudes en hacer tu consulta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </XReveal>
        </div>
      </div>
    </section>
  )
}

export default Contact