import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Center } from "@react-three/drei";
import Typical from "react-typical";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#b6ff00]' />
          <div className='w-1 sm:h-80 h-40 yellow-gradient' />
        </div>

        <div>         
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Government College of Engineering, Dharmapuri &<br className='sm:block hidden' />
            Association of Computer Science Engineers proudly presents
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            TEKZESTA '<span className='text-[#b6ff00]'>23</span>
          </h1>
          <h1 className="font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[35px] content-center lg:leading-[98px] mt-2">
          <span><Typical loop={Infinity} wrapper="b" steps={['25 APRIL 2023',2000,'And',2000,'26 APRIL 2023',2000]}/></span>
          </h1>
        </div>
      </div>
<<<<<<< HEAD
      {/* <ComputersCanvas/> */}
      <div className='absolute xs:bottom-10 bottom-16 lg:bottom-12 sm:bottom-10 w-full flex justify-center items-center'>
=======
      <div className='absolute xs:bottom-10 bottom-16 lg:bottom-32 sm:bottom-10 w-full flex justify-center items-center'>
>>>>>>> 091622f4631b2b211c6004a1afc40c0ebb07db36
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;