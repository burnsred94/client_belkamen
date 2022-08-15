import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./button.module.css";

export const Button = ({apperance, children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary] : apperance == "primary",
            [styles.secondary] : apperance == "secondary",
            [styles.ghost] : apperance == "ghost",
        })} {...props}>
            {children} 
        </button>
    );
};