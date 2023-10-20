import { useEffect, useRef, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';

import { IconButton } from '../../../../components';

import styles from './styles.module.scss';

interface IProps {
  sliderItems: Item[];
}

interface Item {
  imgSrc: string;
  imgAlt: string;
  mediaType: 'image' | 'video' | string;
}

export const Slider = ({ sliderItems }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderContainerRef = useRef(null);

  const nextItem = () => {
    setCurrentSlide((index) => {
      if (index === sliderItems.length - 1) return 0;

      return index + 1;
    });
  };

  const prevItem = () => {
    setCurrentSlide((index) => {
      if (index === 0) return sliderItems.length - 1;

      return index - 1;
    });
  };

  useEffect(() => {
    const container = sliderContainerRef.current;
    if (!container) return;

    const hammer = new Hammer(container);

    hammer.on('swipeleft', nextItem);
    hammer.on('swiperight', prevItem);

    return () => {
      hammer.off('swipeleft');
      hammer.off('swiperight');
      hammer.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.topImages} ref={sliderContainerRef}>
        {sliderItems.length !== 1 && (
          <IconButton
            aria-label="Предыдущий элемент"
            className={cn(styles.btnArrow, styles.btnPrev)}
            onClick={prevItem}
          >
            <SlArrowLeft />
          </IconButton>
        )}

        <div className={styles.content}>
          {sliderItems.map((item, index) => (
            <AnimatePresence key={index} mode="wait" initial={false}>
              {currentSlide === index && (
                <motion.div
                  className={styles.item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={item.imgSrc}
                >
                  {item.mediaType === 'image' ? (
                    <div className={styles.wrapperImage}>
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        width={680}
                        height={465}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className={styles.wrapperImage}>
                      <video
                        src={item.imgSrc}
                        width={680}
                        height={465}
                        autoPlay
                        loop
                        muted
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        {sliderItems.length !== 1 && (
          <IconButton
            aria-label="Следующий элемент"
            className={cn(styles.btnArrow, styles.btnNext)}
            onClick={nextItem}
          >
            <SlArrowRight />
          </IconButton>
        )}
      </div>
      {sliderItems.length !== 1 && (
        <div className={styles.lowerImages}>
          {sliderItems.map((itemLower, index) => (
            <button
              key={index}
              className={styles.image}
              data-active={currentSlide === index}
              onClick={() => setCurrentSlide(index)}
            >
              <img
                src={itemLower.imgSrc}
                alt={itemLower.imgAlt}
                width={163}
                height={129}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
