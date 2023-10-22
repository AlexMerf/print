import { useEffect, useRef, useState } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { AnimatePresence, motion } from 'framer-motion';
import Hammer from 'hammerjs';

import { IconButton } from '..';

import styles from './styles.module.scss';

interface IProps {
  items: Item[];
}

interface Item {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string[];
}

export const SliderHome = ({ items }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderContainerRef = useRef(null);

  const nextItem = () => {
    setCurrentSlide((index) => {
      if (index === items.length - 1) return 0;

      return index + 1;
    });
  };

  const prevItem = () => {
    setCurrentSlide((index) => {
      if (index === 0) return items.length - 1;

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
    <div className={styles.wrapper} ref={sliderContainerRef}>
      <div className={styles.container}>
        <IconButton
          aria-label="Предыдущий элемент"
          onClick={prevItem}
          className={styles.btnArrow}
        >
          <SlArrowLeft />
        </IconButton>
        <div className={styles.content}>
          {items.map((item, index) => (
            <AnimatePresence
              key={`${item.title}_${index}`}
              mode="wait"
              initial={false}
            >
              {currentSlide === index && (
                <motion.div
                  className={styles.item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  key={item.title}
                >
                  <div className={styles.wrapperImage}>
                    <img
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={540}
                      height={382}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.infoContent}>
                      <span className={styles.title}>{item.title}</span>
                      <div className={styles.description}>
                        {item.description.map((text, i) => (
                          <p className={styles.text} key={i}>
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        <IconButton
          aria-label="Следующий элемент"
          onClick={nextItem}
          className={styles.btnArrow}
        >
          <SlArrowRight />
        </IconButton>
      </div>
      <div className={styles.pagination}>
        {items.map((itemDot, index) => (
          <button
            key={index}
            className={styles.dot}
            data-active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Изображение ${itemDot.imgAlt}`}
          />
        ))}
      </div>
    </div>
  );
};
