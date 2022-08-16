import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    type: "xsmall" | "small" | "medium" | "large";
    color: "black" | "primary";
    children: ReactNode;
}