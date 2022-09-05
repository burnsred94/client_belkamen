import axios from "axios";
import { GetStaticProps } from "next";
import { Htag, MapY } from "../../components";
import { ContactsPage } from "../../interfaces/contacts.interfaces";
import { withLayout } from "../../layout/Layout";
import styles from "./Contacts.module.css";


function Contacts ({contacts}: ContactsProps): JSX.Element  {
    const data = contacts[0];
    return (
        <div className={styles.container}>
            <Htag tag='h2'>{data.title}</Htag>
            <ul className={styles.list}>
                <li>
                <Htag tag='h3'>Адресс</Htag>
                    <span className={styles.item}>
                    {data.address}
                    </span>
                    <span className={styles.item}>
                        {data.city}
                    </span>
                </li>
                <li>
                    <Htag tag='h3'>Режим работы</Htag>
                    {data.timeWork.map((time) => (<span className={styles.item} key={time}>{time}</span>))}
                </li>
                <li>
                <Htag tag='h3'>Режим работы</Htag>
                    {data.phone.map((tel) => (<span className={styles.item} key={tel}>{tel}</span>))}
                </li>
            </ul>
            <div className={styles.map}>
                <MapY/>
            </div>
        </div>
    );
}


export const getStaticProps: GetStaticProps<ContactsProps> = async () => {
    const { data: contacts } = await axios.get<ContactsPage[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/contacts');
    return {
          props:{ 
            contacts
          }
    };
  };
  
  
  export interface ContactsProps extends Record<string, unknown> {
      contacts: ContactsPage[]
  }

export default withLayout(Contacts);