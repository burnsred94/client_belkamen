import { DetailedHTMLProps, HTMLAttributes} from "react";


export interface FormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    buttonClose?: boolean;
}