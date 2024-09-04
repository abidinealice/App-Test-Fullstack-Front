import { motion } from 'framer-motion'
import Car from '../../assets/Electriccar-bro.svg'

export default function AnimationCar2() {
  return (
    <div>
      <motion.img
        style={{
          width: '500px',
          position: 'absolute',
          left: '15%',
          top: '25%',
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
