import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsBagXFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { GetStaticProps } from "next";
import { Product, ProductSpace } from "../../interfaces/catalog.interface";
import { MenuItem } from "../../interfaces/catalog.interface";
import { CatalogProps } from "./Catalog.props";
import { motion } from "framer-motion";
import cn from "classnames";
import styles from "./Catalog.module.css";
import axios from "axios";

export const CatalogMenu = ({ type, menu }: CatalogProps & MenuProps): JSX.Element => {
    const [menuState, setMenuState] = useState(0);
    const [productsName, setProductName] = useState('singlemonument');
    const [productState, setProductState] = useState<ProductSpace>();

    const products = productState ? productState.products : [];


    useEffect(() => {
        async function fetchProducts(products: string) {
            try {
                const { data } = await axios.get<ProductSpace>(
                    process.env.NEXT_PUBLIC_DOMAIN + `/api/catalog/categories/productCategory/${products}`
                );
                setProductState(data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchProducts(productsName);
    }, [productsName]);


    const buildFirstLevelMenu = () => {
        return (
            <div className={cn({
                [styles.menu_container]: type === 'catalog',
                [styles.menuMainContainer]: type === 'main'
            })}>
                <div className={cn({
                    [styles.titleCatalogue]: type === 'catalog',
                    [styles.mainTitleContainer]: type === 'main'
                })}>
                    <span>Каталог товаров</span>
                </div>
                {menu?.map((e) => (
                    <motion.div key={e.id} className={cn({
                        [styles.menuTopName]: type === "catalog",
                        [styles.mainMenuTopName]: type === "main",
                    })}>
                        <a onClick={() => setMenuState(e.id)}>
                            <span className={cn({
                                [styles.menuTitle] : type === "catalog",
                                [styles.mainMenuTitle] : type === "main"
                            })}>{e.title}</span>
                            <div>{e.id == menuState ? buildSecondLevelMenu() : null}</div>
                        </a>
                    </motion.div>
                ))}
            </div>
        );
    };

    const buildSecondLevelMenu = (): JSX.Element => {
        const secondMenu = menu.find(((e) => e.id === menuState));
        return (
            <>{secondMenu?.productCategory.map((p) =>
                <span className={cn({
                    [styles.productCategory] : type === 'catalog',
                    [styles.mainProductCategory] : type === 'main'
                })}>
                    <a onClick={() => (
                        setProductName(p.nameCategory), 
                        setWidth(0), 
                        setCountDown(type === 'main' ? 1 : 0),
                        setHeight(0)
                        )}>
                        {p.title}
                    </a>
                </span>
            )}</>
        );
    };

    const carousel = useRef<HTMLDivElement>();
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [countClickDown, setCountDown] = useState(type === 'main' ? 1 : 0);

    const productsLengthMovetoDownUp = Math.floor(products?.length / 9);
    const productsLengthMoveToRightLeft = Math.round(products?.length / 4);

    const clickDown = () => {
        if (productsLengthMovetoDownUp != 0) {
            if (countClickDown !== productsLengthMovetoDownUp) {
                setHeight(height - 1280);
                setCountDown(countClickDown + 1);
            }

        }
    };

    const clickUp = () => {
        if (productsLengthMovetoDownUp != 0) {
            if (countClickDown == productsLengthMovetoDownUp) {
                setHeight(height + 1280);
                setCountDown(countClickDown + 1);
            }
        }
    };

    const clickRight = () => {
        if (productsLengthMoveToRightLeft != 1) {
            if (countClickDown !== productsLengthMoveToRightLeft) {
                setWidth(width - 1450);
                setCountDown(countClickDown + 1);
            }
        }
    };

    const clickLeft = () => {
        if (productsLengthMoveToRightLeft != 0) {
            if (width < 0 ) {
                setWidth(width + 1450);
                setCountDown(countClickDown - 1);
            }
        }
    };

    return (
        <div className={cn({
        [styles.mainPageContainer]: type === 'main',
        [styles.container]: type === 'catalog'
        })}>
            <div className={cn({
                [styles.menu]: type === 'catalog',
                [styles.mainMenu]: type === 'main'
            })}>
                {buildFirstLevelMenu()}
            </div>
            <motion.div
                className={cn(styles.productsMessage, {
                    [styles.productsMessageHidden]: products?.length === undefined || products?.length === 0,
                })}>
                <span>
                    Выберите продукт в Каталоге
                    <BsBagXFill />
                </span>
            </motion.div>
            <motion.div className={cn({
                [styles.products]: type === 'catalog',
                [styles.mainProducts]: type === 'main'
            })}>
                <motion.div ref={carousel} className={cn({
                    [styles.products_inner]: type === 'catalog',
                    [styles.mainProducts_inner]: type === 'main'
                })}
                    animate={{ y: height, x: width }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    {products?.map((e: Product) => (
                        <motion.div className={styles.productItem}>
                            <img width="300px" height="300px" src={process.env.NEXT_PUBLIC_DOMAIN + '/' + e.image} alt="Product Image" />
                            <div>
                                <span>{e.title}</span>
                                <span>{e.price + " BYN"}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div className={cn({
                [styles.buttonClose]: products?.length == undefined || products?.length == 0, 
                [styles.buttonBlock]: type === "catalog",
                [styles.buttonMain]: type === 'main' 
            })}>
                <motion.button onClick={() => type === 'catalog' ? clickUp() : clickLeft()}>
                    <BsFillArrowLeftCircleFill className={styles.buttonIcon} />
                </motion.button>
                <motion.button onClick={() => type === 'catalog' ? clickDown() : clickRight()}>
                    <BsFillArrowRightCircleFill className={styles.buttonIcon} />
                </motion.button>
            </motion.div>
        </div>
    );
};


export const getStaticProps: GetStaticProps<MenuProps> = async () => {
    const { data: menu } = await axios.get<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/catalog/categories');
    return {
        props: {
            menu,
        }
    };
};


export interface MenuProps extends Record<string, unknown> {
    menu: MenuItem[]

}

