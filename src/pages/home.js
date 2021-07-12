import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/aketch`}>
                  <ProgressiveImage
                    src={require("../images/aketch.webp")}
                    placeholder={require("../images/compressed-image.jpg")}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Aketch Okoth'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              <div className='title'>Aketch Okoth</div>
              <div className='location'>
                <span>0.0917°S</span>
                <span>34.7680°E</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;