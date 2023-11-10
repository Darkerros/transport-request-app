import { clsx } from "clsx";
import { memo } from "react";
import type { ComponentProps, FC } from "react";

import Button from "../button/button.tsx";

import styles from './button-with-icon.module.scss'

import Icons from "../icons/icons.tsx";

interface ButtonWithIcon extends ComponentProps<typeof Button>, Pick<ComponentProps<typeof Icons>,'iconName'> {}

const ButtonWithIcon: FC<ButtonWithIcon> = memo(({ extraClassName, children, iconName, ...otherProps }) => {

  const buttonStyles = clsx({
    [styles.buttonWithIcon]: true,
    [`${extraClassName}`]: !!extraClassName
  })

  return (
    <Button extraClassName={buttonStyles} {...otherProps}><Icons iconName={iconName}/>{ children }</Button>
  );
});

export default ButtonWithIcon;
