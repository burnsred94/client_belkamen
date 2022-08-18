
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from 'classnames';
import axios from "axios";
import { Menu } from "../../interfaces/menu.interface";
import { GetStaticProps } from "next";




export const Header = ({ className}: MenuProps): JSX.Element => {

    return (
        <div className={cn(styles.header, className, {
            // [styles.background_state]: isMainPage 
        })}>
            <img src="/logo.png" alt="logo" />
            <div>

            </div>
            <span>tel: 32322</span>
        </div>  
    );
};


export const getStaticProps: GetStaticProps<MenuProps> = async () => {
    const { data: menu } = await axios.get<Menu[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/menu');
    return {
      props: {
        menu,
      }
    };
  };
  
  
  export interface MenuProps extends Record<string, unknown> {
    menu: Menu[]
  }