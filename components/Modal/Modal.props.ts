import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    active: boolean;
    children: ReactElement;
}