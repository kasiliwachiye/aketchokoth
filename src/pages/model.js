import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

 import ScrollForMore from "../components/scrollForMore";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div className='location'>
                <span>0.0917°S</span>
                <span>34.7680°E</span>
              </div>
              <div className='mua'>MUA: @fictionalmua</div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>k</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>c</motion.span>
                <motion.span variants={letter}>h</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>O</motion.span>
                <motion.span variants={letter}>k</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>h</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../images/aketch.webp")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -1200 : -600,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              Through the Eyes of Kasili & <br /> what it means.
            </h2>
            <p>
              I was introduced to supermodel Aketch by creative director Laura Lanteri. 
              Aketch is the founder of the We Are Nilotic initiative for Nyanza women, and Laura has a background in fashion and international development.
              I wanted to tell the story of these 14 extraordinary people and the story behind South Sudan’s conflict.
              I grew up in the Nairobi, and in 2016 when I was 18 years old I moved to Utopia to attend Mythical University for college. 
              My art class took me to the Emmanuel Museum of Afro-Utopian Art for the first time and my mind exploded. 
              After that everything became abstracted for me. Later I saw Richard Serra’s process art Verb List and also his large steel sculptures that interact with the viewer’s perspective as you walk through them. I knew anything was possible.
              I have always been interested in conceptual art in any medium, and from the beginning I was always coming from an art point of view. 
              I think my style of portraiture is very natural but also very painterly. 
              The light pouring through a window in an old Renaissance painting is very beautiful to me. 
              I think I have reached the style that I have now by constantly working but also by being very critical and conscious of what I am doing. 
              From the beginning, allegory was always very interesting too because for me great art asks more questions than it provides answers.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;