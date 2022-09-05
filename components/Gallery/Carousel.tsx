import { CarouselProps } from "./Carousel.props";
import styles from "./Carousel.module.css";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";



export const Carousel = ({ children }: CarouselProps): JSX.Element => {
    const [width, setWidth] = useState(0);
    const [[ moveClickWidth, countClick ], setMoveClickWidth] = useState([0, 1]);
    const carousel = useRef<HTMLDivElement>();

    const carouselItemCount = Math.round(children['image'].length);
    
    const clicRight = () => {
        if(countClick !== carouselItemCount) {
            setMoveClickWidth([moveClickWidth - 960, countClick + 1]);
        }
    };

    const clickLeft = () => {
        if(countClick != 1 ) {
            setMoveClickWidth([moveClickWidth + 960, countClick - 1]);
        }
    };


    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);


    return (
        <motion.div className={styles.container}>
            <motion.div ref={carousel} className={styles.carousel}>
                <motion.div
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    className={styles.inner_carousel}
                    animate={{ x: moveClickWidth }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    {children['image'].map((image: string) => {
                        return (
                            <motion.div className={styles.item} key={image}>
                                <img src={process.env.NEXT_PUBLIC_DOMAIN + '/uploads/gallery/' + image.split('/')[2]} alt="ImageGallery" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
            <motion.div className={styles.buttonBlock}>
                <motion.button onClick={() => clickLeft()}>
                    <BsFillArrowLeftCircleFill className={styles.buttonIcon} />
                </motion.button>
                <motion.button onClick={() => clicRight()}>
                    <BsFillArrowRightCircleFill className={styles.buttonIcon} />
                </motion.button>
            </motion.div>
        </motion.div>
    );
};


