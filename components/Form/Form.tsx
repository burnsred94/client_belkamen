import React from "react";
import { Controller, useForm } from "react-hook-form";
import { IFormInterface } from "./Form.interface";
import { FormProps } from "./Form.props";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Htag } from "../Htag/Htag";
import cn from "classnames";
import styles from "./Form.module.css";
import axios from "axios";


export const Form = ({ className, ...props }: FormProps): JSX.Element => {
    const { register, control, handleSubmit, formState, setValue } = useForm<IFormInterface>();

    const onSubmit = (data: IFormInterface, e: React.ChangeEvent) => {
        if(data){
            console.log(data);
            axios.post<FormProps>(process.env.NEXT_PUBLIC_DOMAIN + "/api/feedback/data", { name: data.name, telefone: data.telefone})
                .then(response =>{
                    console.log(response);
                });

            e.preventDefault();
            setValue("telefone", '');
            setValue("name", '');
            setValue('check', false);
        }
    };

    return (
        <div className={cn(styles.container, className)} {...props}>
            <Htag tag="h3">ЗАПОЛНИТЕ ФОРМУ</Htag>
            <span>чтобы оставить заявку на бесплатную консультацию</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    Имя
                    <Input
                        error={formState.errors.name}
                        {...register('name', { required: { value: true, message: "Заполните имя" } })}
                        typeInput="text" />
                </label>
                <label htmlFor="telefone">
                    Телефон
                    <Input
                        error={formState.errors.telefone}
                        {...register('telefone', { required: { value: true, message: "Заполните номер телефона" } })}
                        typeInput='text'
                        placeholder="+375 (code)" />
                </label>
                <label htmlFor="check">
                    <Controller
                        control={control}
                        name="check"
                        render={({ field }) => (
                            <Input
                                typeInput="checkbox"
                                isChecked={field.value}
                                checked={field.value}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
                                    field.onChange(value);
                                }
                                }
                            />
                        )}
                    />
                    <span>Я согласен на обработку персональных данных*</span>
                </label>
                <Button apperance="secondary" type="submit">Получить консультацию</Button>
            </form>
        </div>
    );
};