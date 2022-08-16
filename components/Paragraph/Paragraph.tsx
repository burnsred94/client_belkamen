import { ParagraphProps } from "./Paragraph.props";
import cn from 'classnames';
import styles from 'Paragraph.module.css';

export const Paragraph = ({ type, color, children, className, ...props}: ParagraphProps): JSX.Element => {
    return (
        <p className={cn(styles.paragraph, className, {
            [styles.xsmall]: type == "xsmall",
            [styles.small]: type == "small",
            [styles.medium]: type == "medium",
            [styles.large]: type == "large",
            [styles.black]: color == "black",
            [styles.primary]: color == "primary",
        })} {...props}>
            {children}
        </p>
    );
};