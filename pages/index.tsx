import { Button } from "../components/Button/Button";
import { Htag } from "../components/Htag/Htag";


export default function Home(): JSX.Element {
  return (
      <div>
        <Htag tag='h1'>TEXT</Htag>
        <Button apperance="primary">Заказать консультации</Button>
        <Button apperance="secondary">Заказать консультации</Button>
        <Button apperance="ghost">Заказать консультации</Button>
    </div>
  );
}
