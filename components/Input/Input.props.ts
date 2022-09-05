import { AllHTMLAttributes, DetailedHTMLProps } from "react";
import { FieldError } from "react-hook-form";


export interface InputProps extends DetailedHTMLProps<AllHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    typeInput: "text" | "checkbox";
    isChecked?: boolean;
    label?: string;
    checked?: boolean;
    error?: FieldError
}