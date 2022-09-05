import { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./Input.props";
import cn from "classnames";
import styles from "./Input.module.css";

export const Input = forwardRef(({typeInput, isChecked, className, error, ...props} : InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    switch(typeInput) {
        case "text":
            return (
            <div className={styles.inputWrapper}>
                <input className={cn(className, styles.input, {
                    [styles.error]: error
                })} ref={ref} {...props}/>
                {error && <span className={styles.errorMessage}>{error.message}</span>}
            </div>
            );
        case "checkbox":
            return (
                <div className={styles.checkbox_wrapper}>
                  <input ref={ref} className={cn({ 
                    [styles.checked]: isChecked === true, 
                    [styles.disabled]: isChecked === false
                    })} 
                    type="checkbox" {...props}
                    />
            </div>
            );
    }
});
