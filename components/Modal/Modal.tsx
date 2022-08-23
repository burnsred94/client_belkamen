import styles from "./Modal.module.css";
import { ModalProps } from "./Modal.props";
import cn from "classnames";

export const Modal = ({active, children, className, ...props}: ModalProps): JSX.Element => {

    return (
        <div className={cn({
            [styles.modal]: active,
            [styles.activeNon]: !active
        }) }>
            {children}
        </div>
    );
};