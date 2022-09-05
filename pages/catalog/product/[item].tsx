import axios from "axios";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import { Form, Htag } from "../../../components";
import { Product } from "../../../interfaces/catalog.interface";
import { withLayout } from "../../../layout/Layout";
import styles from "./Item.module.css";

function Item(): JSX.Element {
    const { query } = useRouter();
    const [product, setProduct] = useState<Product>();



    useEffect(() => {
        async function fetchProduct(query: ParsedUrlQuery) {
            try {
                const { data } = await axios.get<Product>(process.env.NEXT_PUBLIC_DOMAIN + `/api/product/${query.item}`);
                setProduct(data);
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchProduct(query);
    }, [query]);

    return (
        <div className={styles.container}>
            <Htag tag='h2'>{product && product.title}</Htag>
            <div className={styles.table}>
                <div className={styles.blockImage}>
                    <img src={process.env.NEXT_PUBLIC_DOMAIN + '/product/' + `${product && product.image}`} alt="" />
                    <div className={styles.price}>
                        <span>Цена:</span>
                        <span>{product && product.price + ' BYN'}</span>
                    </div>
                </div>
                <div className={styles.blockDescription}>
                    <div>
                        <span>В стоимость входит:</span>
                        <span>{product && product.description.priceIncludes}</span>
                    </div>
                    <div>
                        <span>Художественное оформление:</span>
                        <span>{product && product.description.decor}</span>
                    </div>
                    <div>
                        <span>Цена указана за стандартный:</span>
                        <span>{product && product.description.priceInComplect}</span>
                    </div>
                    <div>
                        <span>Размер стеллы:</span>
                        <span>{product && product.description.stellaSize}</span>
                    </div>
                    <div>
                        <span>Размер тумбы:</span>
                        <span>{product && product.description.cabinetSize}</span>
                    </div>
                    <div>
                        <span>Размер цветника:</span>
                        <span>{product && product.description.floowerBadSizes}</span>
                    </div>
                    <div>
                        <span>Полировка:</span>
                        <span>{product && product.description.polishing}</span>
                    </div>
                    <div>
                        <span>Цвет:</span>
                        <span>{product && product.description.color}</span>
                    </div>
                    <div>
                        <span>Общая высота:</span>
                        <span>{product && product.description.otherSize}</span>
                    </div>
                    <div>
                        <span>Гарантия:</span>
                        <span>{product && product.description.guarantee}</span>
                    </div>
                    <div>
                        <span>Форма памятника:</span>
                        <span>{product && product.description.format}</span>
                    </div>
                    <div>
                        <span>Хранение:</span>
                        <span>{product && product.description.storage}</span>
                    </div>
                    <div>
                        <span>Время изготовления:</span>
                        <span>{product && product.description.productionTime}</span>
                    </div>
                    <div>
                        <span>Другой размер:</span>
                        <span>{product && product.description.otherSize}</span>
                    </div>
                    <div>
                        <span>Другой гранит:</span>
                        <span>{product && product.description.otherGranitRock}</span>
                    </div>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.formText}>
                    <span>Не знаете, что делать?</span>
                    <Htag tag='h2'>Мы проконсультируем вас по всем вопросам</Htag>
                    <span>Оставьте свои контактные данные, наш специалист свяжется с вами и ответит на все ваши вопросы!</span>
                </div>
                <Form />
            </div>
        </div>
    );
}

export default withLayout(Item);