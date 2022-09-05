import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import TelIcon from "./tel.svg";
import cn from 'classnames';
import Link from "next/link";





export const Header = ({ className }: HeaderProps): JSX.Element => {


    return (
        <div className={cn(styles.header, className, {
            // [styles.background_state]: isMainPage 
        })}>
            <img src="/logo.png" alt="logo" />
            <ul>
              <li>
                <Link href='/'>Главная</Link>
              </li>
              <li>
                <Link href='/catalog/page'>Каталог</Link>
              </li>
              <li>
                <Link href='/improvement/page'>Благоустройства</Link>
              </li>
              <li>
                <Link href='/about/page'>О нас</Link>
              </li>
              <li>
                <Link href='/contacts/page'>Контакты</Link>
              </li>
            </ul>
            <div>
              <TelIcon />
              <a href="tel:+375445689224">+375(44)568-92-24</a>
            </div>
        </div>  
    );
};
