import { Button } from "../components/Button/Button";
import { Htag } from "../components/Htag/Htag";
import { Layout, withLayout } from "../layout/Layout";


function Home(): JSX.Element {
  return (
      <>
        <Htag tag='h1'>TEXT</Htag>
        <Button apperance="primary">Заказать консультации</Button>
        <Button apperance="secondary">Заказать консультации</Button>
        <Button apperance="ghost">Заказать консультации</Button>
    </>
  );
}

export default withLayout(Home);
