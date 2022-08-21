import { InputProps } from "./Input.props";
import cn from "classnames";
import styles from "./Input.module.css";
import { useEffect, useState } from "react";

export const Input = ({label, checked, type, className, ...props }: InputProps): JSX.Element => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    useEffect(() => {
        setIsChecked(defaultChecked);
    }, [defaultChecked]);

    switch (type) {
        case "text":
            return <input className={cn(className, styles.input)} {...props} />;
        case "checkbox":
            return (
                <div className={styles.checkbox_wrapper}>
                    <label>
                        <input
                        className={cn({
                            [styles.checked]: isChecked,
                        })} 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={(prev) => !prev}
                         {...props}/>
                        <span>{label}</span>
                    </label>
                </div>);
        default:
            return <input className={cn(className, styles.input)} {...props} />;
    }
};