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