'use client'

import { motion } from "framer-motion"
import { useRef } from 'react'

interface XRevealProps {
  children: React.ReactNode,
  className: string,
  delay?: number
  amount?: number
  side?: 'left' | 'right'
  index?: number
}

const XReveal: React.FC<XRevealProps> = ({
  children,
  className,
  delay = 0.05,
  amount = 1,
  side = 'left',
  index = 1
}) => {
  const ref = useRef(null)

  const x = side === 'left' ? -100 : 100

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x
        },
        visible: (i: number) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: delay + (i * 0.1)
          }
        })
      }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount }}
      transition={{ type: 'spring', delay, stiffness: 500, damping: 20 }}
      custom={index}
    >
      {children}
    </motion.div>
  )
}

export default XReveal