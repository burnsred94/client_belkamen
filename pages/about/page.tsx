
import { withLayout } from "../../layout/Layout";
import axios from 'axios'; 
import { AboutPage } from "../../interfaces/about.interfaces";
import { GetStaticProps } from "next";
import styles from './about.module.css';
import cn from 'classnames'
import { Htag } from "../../components";
import MonIcon from "./img/mon.svg";
import FoundIcon from "./img/found.svg";
import FancesIcon from "./img/fances.svg";
import BlagIcon from "./img/blag.svg";





function About({ about }: AboutProps): JSX.Element {
    const data = about[0];
    return (
        <div className={cn(styles.about)}>
            <Htag tag='h2'>{data.title}</Htag>
            <img src="/logo2.png" alt="" />
            {data.description && <div className={styles.description} dangerouslySetInnerHTML={{__html: data.description}} />}
            <ul className={cn(styles.services)}>
                <span>Услуги</span>
                <li>
                    <MonIcon/>
                    <span>{data.services[0]}</span>
                </li>
                <li>
                    <BlagIcon/>
                    <span>{data.services[1]}</span>
                </li>
                <li>
                    <FoundIcon/>
                    <span>{data.services[2]}</span>
                </li>
                <li>
                    <FancesIcon/>
                    <span>{data.services[3]}</span>
                </li>
            </ul>
            <div className={cn(styles.subDescription)}>
                <h3>{data.subTitle}</h3>
                {data.subDescription && <div className={styles.subDescription_text} dangerouslySetInnerHTML={{__html: data.subDescription}}/>}
            </div>
        </div>
    )
    
}

export default withLayout(About);

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const { data: about } = await axios.get<AboutPage[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/about/page');
  console.log();
  return {
        props:{ 
            about
        }
  };
};


export interface AboutProps extends Record<string, unknown> {
    about: AboutPage[]
}