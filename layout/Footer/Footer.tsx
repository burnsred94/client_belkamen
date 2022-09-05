import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from 'classnames';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
       <div className={cn(styles.footer, className)} {...props}>
        <div>
            <img src="/logo.png"  alt="logo" />
            <span>Copyright  (c) БелКамень. Все права защищены.</span>
        </div>
            <span>Email: <a href="#">belkamen@gmail.com</a></span>
            <span>ООО “БЕЛКАМЕНЬ” УНП 699111000</span>
        </div>
    );
};