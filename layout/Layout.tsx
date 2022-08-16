import { LayoutProps } from "./Layout.props";
import { Footer, Header } from '../layout';
import { FunctionComponent } from "react";
import styles from "./Layout.module.css";
import cn from 'classnames';

export const Layout = ({children}: LayoutProps): JSX.Element => {
    return( 
    <>
        <Header />
            <div>
                {children}
            </div>
        <Footer />
    </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};