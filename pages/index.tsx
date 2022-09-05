import { createRef, useRef, useState } from "react";
import { withLayout } from "../layout/Layout";
import { Card, MainPage } from "../interfaces/main.interfaces";
import { MenuItem } from "../interfaces/catalog.interface";
import { Button, Htag, Carousel, CatalogMenu, Modal, Form, MapY } from "../components";
import BuildIcon from "./img/build.svg";
import RasroIcon from "./img/rasro.svg";
import GarantIcon from "./img/garant.svg";
import axios from 'axios';
import cn from 'classnames';
import styles from './home.module.css';



function Home({ main, menu }: HomeProps): JSX.Element {
  const [active, setActive] = useState(false);
  

  const moveToFeedback = () => {
    setTimeout(() => {
      window.scrollTo(0, 3900);
    }, 1000);
  };

  const data = main[0];
  return (
    <div className={cn(styles.home)}>
      <Modal className={styles.modal} active={active}>
        <Form />
      </Modal>
      <Htag tag="h1">{data.title}</Htag>
      <span>{data.description}</span>
      <Button apperance="primary" onClick={() => setActive(true)}>Заказать консультацию</Button>
      <ul key={data.id} className={cn(styles.specificswork)}>
        {data.specificsWork.map((e: string) => (<li key={e}>{e}</li>))}
      </ul>
      <ul className={cn(styles.individualplanwork)}>
        <li key={data.titleIndividualPlanWork.index}>
          <RasroIcon />
          <span>{data.titleIndividualPlanWork[0]}</span>
        </li>
        <li key={data.titleIndividualPlanWork.index}>
          <GarantIcon />
          <span>{data.titleIndividualPlanWork[1]}</span>
        </li>
        <li key={data.titleIndividualPlanWork.index}>
          <BuildIcon />
          <span>{data.titleIndividualPlanWork[2]}</span>
        </li>
      </ul>
      <div className={styles.catalog}>
        <CatalogMenu type="main" menu={menu} />
      </div>
      <div className={cn(styles.cards)}>
        <Htag tag="h2">Выберите индивидуальный план работы</Htag>
        <div>
          {data.cards.map((card: Card) => (<div className={cn(styles.card)} key={card.id}>
            <span>{card.title}</span>
            <span className={cn(styles.pricee)}><span>от</span>{card.price}BYN</span>
            <ul className={cn(styles.carddescription)}>
              {card.description.map((d: string) => (<li>{d}</li>))}
            </ul>
            <span>Бесплатно:</span>
            <ul className={cn(styles.cardfreedescription)}>
              {card.freeDescription.map((d: string) => (<li>{d}</li>))}
              <Button onClick={()=> moveToFeedback()} apperance="primary">Заказать Пакет</Button>
            </ul>
          </div>))}
        </div>
      </div>
      <div className={styles.advatages}>
        <Htag tag="h2">{data.advatages['title']}</Htag>
        <span>{data.advatages['subTitle']}</span>
        <ul className={styles.advatageslist}>
          {data.advatages['description'].map((d: string) => (
            <li>{d}</li>))}
        </ul>
      </div>
      <div className={styles.carousel}>
        <Htag tag='h2'>Галерея работ</Htag>
        <Carousel>{data.gallery}</Carousel>
      </div>
      <div className={styles.form}>
        <div className={styles.formText}>
          <span>Не знаете, что делать?</span>
          <Htag tag='h2'>Мы проконсультируем вас по всем вопросам</Htag>
          <span>Оставьте свои контактные данные, наш специалист свяжется с вами и ответит на все ваши вопросы!</span>
        </div>
        <Form />
      </div>
      <div className={styles.map}>
        <Htag tag='h2'>Наши контакты</Htag>
        <div className={styles.map_block}>
          <MapY />
        </div>
      </div>
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps = async () => {
  const { data: main } = await axios.get<MainPage>(process.env.NEXT_PUBLIC_DOMAIN + '/api/main');
  const { data: menu } = await axios.get<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/catalog/categories');
  return {
    props: {
      main,
      menu
    }
  };
};


export interface HomeProps extends Record<string, unknown> {
  props: MainPage
  menu: MenuItem[]
}