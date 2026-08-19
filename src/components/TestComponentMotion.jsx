import React from 'react'
import {motion }from 'motion/react'

export default function TestComponentMotion() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
  );
}
