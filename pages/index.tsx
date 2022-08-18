import { Button } from "../components/Button/Button";
import { Htag } from "../components/Htag/Htag";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MainPage } from "../interfaces/main.interfaces";



function Home({menu}: HomeProps): JSX.Element {
  return (
      <>
        <Htag tag='h1'>TEXT</Htag>
        <Button apperance="primary">Заказать консультации</Button>
        <Button apperance="secondary">Заказать консультации</Button>
        <Button apperance="ghost">Заказать консультации</Button>
        {/* {menu.map(e => (<li key={e.id}>{e.firstCategory}</li>))} */}
    </>
  );
}

export default withLayout(Home);

export const getStaticProps = async () => {
  const { data: menu } = await axios.get<MainPage>(process.env.NEXT_PUBLIC_DOMAIN + '/api/menu');
  return {
    props: {
      menu,
    }
  };
};


export interface HomeProps extends Record<string, unknown> {
    props: MainPage
}