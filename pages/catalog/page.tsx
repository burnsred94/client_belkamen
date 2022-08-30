import { Htag, Form, CatalogMenu } from "../../components";
import { MenuItem } from "../../interfaces/catalog.interface";
import { GetStaticProps } from "next";
import { withLayout } from "../../layout/Layout";
import axios from "axios";
import styles from "./Catalog.module.css";




function Catalog ({menu}: CatalogProps): JSX.Element {
    return (
      <div className={styles.container}>
      <div className={styles.catalog}>
        <CatalogMenu type="catalog" menu={menu}/>
      </div>
        <div className={styles.review}>
        <div className={styles.reviewText}>
          <span>Не знаете, что делать?</span>
          <Htag tag='h2'>Мы проконсультируем вас по всем вопросам</Htag>
          <span>Оставьте свои контактные данные, наш специалист свяжется с вами и ответит на все ваши вопросы!</span>
        </div>
        <Form />
        </div>
      </div>
    );
}


export const getStaticProps: GetStaticProps<CatalogProps> = async () => {
    const { data: menu } = await axios.get<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/catalog/categories');
    return {
          props:{ 
            menu,
          }
    };
  };
  
  
  export interface CatalogProps extends Record<string, unknown> {
    menu: MenuItem[]
    
  }

export default withLayout(Catalog);