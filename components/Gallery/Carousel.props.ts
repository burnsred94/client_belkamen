import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface CarouselProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}