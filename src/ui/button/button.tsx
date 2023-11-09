import { clsx } from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

import styles from './button.module.scss'



interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'> {
  children: ReactNode;
  /*
   * Классовое имя для расширения стилей (отступов и тд)
   */
  extraClassName?: string;
  /*
   * Изменяет вид кнопки
   */
  theme: 'primary' | 'outlined'
}

const Button: FC<ButtonProps> = ({ children, extraClassName, theme, ...otherProps }) => {

  const buttonStyle = clsx({
    [styles.button]: true,
    [`${extraClassName}`]: !!extraClassName,
    [styles.button_theme_primary]: theme === 'primary',
    [styles.button_theme_outlined]: theme === 'outlined',
  })

  return (
    <button className={buttonStyle} {...otherProps}>{ children }</button>
  );
};

export default Button;
