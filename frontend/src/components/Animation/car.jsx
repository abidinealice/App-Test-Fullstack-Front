import { motion } from 'framer-motion'
import Car from '../../assets/Electric car-amico.svg'

export default function AnimationCar() {
  return (
    <div>
      <motion.img
        style={{
          width: '400px',
          position: 'absolute',
          left: '20%',
          top: '20%',
          zIndex: '1',
        }}
        animate={{ y: [5, -5] }}
        transition={{
          ease: 'linear',
          duration: '1.5',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        src={Car}
        alt="Car"
      />
    </div>
  )
}
