import { useEffect, useState } from "react";
import { FormProps } from "./Form.props";
import { Input } from "../Input/Input";
import cn from "classnames";
import styles from "./Form.module.css";
import { Button } from "../Button/Button";
import { Htag } from "../Htag/Htag";


export const Form = ({ className, ...props }: FormProps): JSX.Element => {
    const [check, setIsCheck] = useState(false);

    useEffect(() => {
        setIsCheck(check);
    }, [check]);

    return (
        <div className={cn(styles.container, className)} {...props}>
            <Htag tag="h3">ЗАПОЛНИТЕ ФОРМУ</Htag>
            <span>чтобы оставить заявку на бесплатную консультацию</span>
            <form>
                <label>
                    Имя
                    <Input type="text" />
                </label>
                <label>
                    Телефон
                <Input type="text" placeholder="+375 (code)" />
                </label>
                <Input
                    type="checkbox"
                    label="Я согласен на обработку персональных данных*"
                    checked={check}
                    onChange={() => setIsCheck(true)} />
                <Button apperance="secondary" type="submit">Получить консультацию</Button>
            </form>
        </div>
    );
};