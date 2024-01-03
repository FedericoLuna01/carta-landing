'use client'

import { motion } from "framer-motion"
import { useRef } from 'react'

const ScaleReveal = ({ children, className, amount = 1, delay = .3 }: { children: React.ReactNode, className: string, amount?: number, delay?: number }) => {
  const ref = useRef(null)

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.6,
        },
        visible: {
          opacity: 1,
          scale: 1,
        }
      }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount }}
      transition={{ type: 'spring', delay, stiffness: 500, damping: 10 }}
    >
      {children}
    </motion.div>
  )
}

export default ScaleReveal