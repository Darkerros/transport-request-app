import { clsx } from "clsx";
import { DetailedHTMLProps, FC, InputHTMLAttributes, useId } from "react";

import styles from './input.module.scss';

type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface InputProps extends Omit<DefaultInputProps, 'className' | 'id' | 'type'> {
  label: string;
  extraClassName?: string;
  type: "email" | "number" | "password" | "tel" | "text";
}

const Input: FC<InputProps> = ({ label, extraClassName, ...otherProps }) => {
  const inputId = useId()

  const containerStyle = clsx({
    [styles.input]: true,
    [`${extraClassName}`]: !!extraClassName,
  })

  return (
    <div className={containerStyle}>
      <label className={styles.input__label} htmlFor={inputId}>{ label }</label>
      <input id={inputId} className={styles.input__input} {...otherProps}/>
    </div>
  );
};

export default Input;
