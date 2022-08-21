import { DetailedHTMLProps, HTMLAttributes} from "react";


export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: "text" | "checkbox";
    label?: string;
    checked?: boolean;
}