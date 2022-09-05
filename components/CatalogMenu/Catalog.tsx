import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsBagXFill } from "react-icons/bs";
import { useEffect , useRef, useState } from "react";
import { GetStaticProps } from "next";
import { MenuItem, Product } from "../../interfaces/catalog.interface";
import { CatalogProps } from "./Catalog.props";
import { motion } from 'framer-motion';
import cn from "classnames";
import styles from "./Catalog.module.css";
import axios from "axios";
import Link from "next/link";

export const CatalogMenu = ({ type, menu }: CatalogProps & MenuProps): JSX.Element => {

    useEffect(() => setMenuState(1),[]);
    
    const [menuState, setMenuState] = useState(0);
    const [productsName, setProductName] = useState('singlemonument');
    const [productState, setProductState] = useState<Product[]>();

    const products = productState;

    

    useEffect(() => {
        async function fetchProducts(products: string) {
            try {
                const { data: product } = await axios.post<Product[]>(
                    process.env.NEXT_PUBLIC_DOMAIN + `/api/product/find/${products}`
                );
                setProductState(product);
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
                        setCountDown(0),
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
    const [countClickDown, setCountDown] = useState(0);

    const productsLengthMovetoDownUp = type === 'catalog' ? Math.floor(products?.length / 9) : Math.floor(products?.length / 8);
    

    const clickDown = () => {
        if (productsLengthMovetoDownUp !== 0) {
            if (countClickDown !== productsLengthMovetoDownUp) {
                type === 'catalog' ? setHeight(height - 1280) : setHeight(height - 860);
                setCountDown(countClickDown + 1);
            }

        }
    };

    const clickUp = () => {
        if (productsLengthMovetoDownUp != 0) {
            if (countClickDown == productsLengthMovetoDownUp) {
            type === 'catalog' ? setHeight(height + 1280) : setHeight(height + 860);
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
                    animate={{ y: height }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    {products?.map((e: Product) => (
                        <motion.div className={styles.productItem}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 }}}
                        >
                            <Link className={styles.productLink} href={{
                                pathname: `/catalog/product/[item]`,
                                query: {item: `${e.id}`}
                            }}> 
                                <motion.img whileHover={{ opacity: 0, transition: { duration: 0.3 } }} width="300px" height="300px" src={process.env.NEXT_PUBLIC_DOMAIN + '/uploads/' + e.image} alt="Product Image" />
                            </Link>
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
                <motion.button onClick={() => clickUp()}>
                    <BsFillArrowLeftCircleFill className={styles.buttonIcon} />
                </motion.button>
                <motion.button onClick={() => clickDown()}>
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

