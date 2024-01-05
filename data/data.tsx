import { Eye, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const navbarItems = [
  {
    label: 'Inicio',
    href: '#'
  },
  {
    label: 'Sobre carta',
    href: '#'
  },
  {
    label: 'Precios',
    href: '/#precios'
  },
  {
    label: 'Contacto',
    href: '#'
  },
]

export const contactItems = [
  {
    id: 1,
    label: 'Teléfono',
    value: '+54 9 11 1234-5678',
    icon: <Phone />,
    href: ''
  },
  {
    id: 2,
    label: 'Correo',
    value: 'carta@carta.com',
    icon: <Mail />,
    href: 'mailto:carta@carta.com'
  },
  {
    id: 3,
    label: 'Ubicacion',
    value: 'Rosario, Santa Fe',
    icon: <MapPin />,
    href: ''
  }
]

export const socialItems = [
  {
    id: 1,
    icon: <Instagram />,
    href: ''
  },
  {
    id: 2,
    icon: <Linkedin />,
    href: ''
  },
  {
    id: 3,
    icon: <Facebook />,
    href: ''
  }
]

export const featuresItems = [
  {
    title: 'Feature 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ultricies ipsum.  ultricies ipsum.',
    icon: <Eye className="stroke-red-700 dark:stroke-red-900" />
  },
  {
    title: 'Feature 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ultricies ipsum.  ultricies ipsum.',
    icon: <Eye />
  },
  {
    title: 'Feature 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ultricies ipsum.  ultricies ipsum.',
    icon: <Eye />
  },
  {
    title: 'Feature 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ultricies ipsum.  ultricies ipsum.',
    icon: <Eye />
  },
  {
    title: 'Feature 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ultricies ipsum.  ultricies ipsum.',
    icon: <Eye />
  },
  {
    title: 'Feature 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ultricies ipsum.  ultricies ipsum.',
    icon: <Eye />
  },
]

export const pricingItems = [
  {
    id: 1,
    price: 28,
    oldPrice: 30,
    period: "Mensual",
    description: 'Ideal para pequeños negocios',
    include: [ "Menu autogestionable", "tulocal.carta.ar", "Generación de QR", "Diseño para impresión", "Post e historia de publicidad"],
  },
  {
    id: 2,
    isBest: true,
    price:96,
    oldPrice:196,
    discount:"Ahorrá 50%",
    period:"6 Meses + 1 Mes gratis",
    description:"Ideal para pequeños negocios",
    include:["Capacidad de recibir ordenes", "Menu autogestionable", "tulocal.carta.ar", "Generación de QR", "Diseño para impresión", "Post e historia de publicidad"],
  },
  {
    id: 3,
    price: 66,
    oldPrice: 112,
    discount:"Ahorrá 40%",
    period:"3 Meses + 1 Mes gratis",
    description:"Ideal para pequeños negocios",
    include:["Capacidad de recibir ordenes", "Menu autogestionable", "tulocal.carta.ar", "Generación de QR", "Diseño para impresión", "Post e historia de publicidad"],
  }
]

export const stepsItems = [
  {
    id: 1,
    title: 'Registra tu comercio gratis',
    description: 'Completa el formulario online en unos segundos',
  },
  {
    id: 2,
    title: 'Configura tu cuenta en minutos',
    description: 'Te ayudamos con la carga de tu menú y te capacitamos sin costo',
  },
  {
    id: 3,
    title: 'Comienza a vender',
    description: 'Vende online con solo compartir el acceso a tu menú',
  },
  {
    id: 4,
    title: 'Triplica tu venta en 6 meses',
    description: 'A través de nuestro plan de aceleración digital',
  }
]

export const testimonialsItems = [
  {
    name: 'Cacatúa',
    type: 'Resto bar',
  },
  {
    name: 'Cacatúa',
    type: 'Resto bar',
  },
  {
    name: 'Cacatúa',
    type: 'Resto bar',
  },
  {
    name: 'Cacatúa',
    type: 'Resto bar',
  },
  {
    name: 'Cacatúa',
    type: 'Resto bar',
  },
  {
    name: 'Cacatúa',
    type: 'Resto bar',
  },
]