import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import Icons from "../icons/icons.tsx";

import styles from './checkbox.module.scss'

interface CheckBoxProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,'className' | 'value'> {
  value?: boolean;
}

const Checkbox: FC<CheckBoxProps> = ({ value, ...otherProps }) => {
  return (
    <label className={styles.checkbox}>
      <input className={styles.checkbox__input} type="checkbox" style={{ display: 'none' }} checked={value} {...otherProps} />
      <div className={styles.checkbox__checkBox}>
        <div className={styles.checkbox__icon}><Icons iconName={'check'}/></div>
      </div>
    </label>
  );
};

export default Checkbox;
