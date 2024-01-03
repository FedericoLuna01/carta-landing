'use client'

import { motion } from "framer-motion"
import { useRef } from 'react'

interface YRevealProps {
  children: React.ReactNode,
  className: string,
  delay?: number
  amount?: number
}

const YReveal: React.FC<YRevealProps> = ({ children, className, delay = 0, amount = 0 }) => {
  const ref = useRef(null)

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 100
        },
        visible: {
          opacity: 1,
          y: 0
        }
      }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount }}
      transition={{ type: 'spring', delay, stiffness: 500, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

export default YReveal