import { CarouselProps } from "./Carousel.props";
import cn from 'classnames';
import styles from "./Carousel.module.css";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";



export const Carousel = ({ children, className, ...props }: CarouselProps): JSX.Element => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <motion.div ref={carousel} className={styles.carousel}>
            <motion.div
                drag='x'
                dragConstraints={{ right: 0, left: -width }}
                className={styles.inner_carousel}
            >
                {children['image'].map((image: string) => {
                    return (
                        <motion.div className={styles.item} key={image}>
                            <img src={process.env.NEXT_PUBLIC_DOMAIN + '/gallery/' + image.split('/')[2]} alt="ImageGallery" />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};


