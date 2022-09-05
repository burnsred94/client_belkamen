import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Htag } from "../../components";
import { ImprovementPage, Item } from "../../interfaces/improvement.interafaces";
import { withLayout } from "../../layout/Layout";
import styles from "./Improvement.module.css";

function Improvement ({page}: ImprovementProps): JSX.Element {
    const data = page[0];
    const [stateItem, setStateItem] = useState<Item[]>([]);
    
    useEffect(() => {
        setStateItem(data.items);
    },[data]);

    const renderImage = () => {
        return (
            <>
            {stateItem.map((item: Item) => (
                <motion.div className={styles.innerImg}>
                    <motion.figure whileHover={{ scale: 1.05, transition: { duration: 0.3 }}} className={styles.effectImg}>
                        <img width='500px' height='500px' src={process.env.NEXT_PUBLIC_DOMAIN + "/uploads/gallery/" + item.photo} alt="" />
                        <figcaption>
                            <Htag tag='h3'>{item.title}</Htag>
                            <p className={styles.list} dangerouslySetInnerHTML={{__html: item.description}}></p>
                        </figcaption>
                    </motion.figure>
                </motion.div>
            ))}
            </>
        );
    };
    
    return (
        <div className={styles.container}>
        <Htag tag="h2">{data.title}</Htag>
        <p>{data.description}</p>
        <div className={styles.innerBlockImg}>
            {renderImage()}
        </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const { data: page } = await axios.get<ImprovementPage>(process.env.NEXT_PUBLIC_DOMAIN + '/api/improvement/page');
    return {
      props: {
        page
      }
    };
  };
  
  
  export interface ImprovementProps extends Record<string, unknown> {
    page: ImprovementPage;
  }

export default withLayout(Improvement);