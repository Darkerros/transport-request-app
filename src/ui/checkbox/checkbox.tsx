import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import Icons from "../icons/icons.tsx";

import styles from './checkbox.module.scss'

interface CheckBoxProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,'className' | 'value'> {
  label?: string;
  labelPosition?: 'start' | 'end';
}

const Checkbox: FC<CheckBoxProps> = ({ label, labelPosition, ...otherProps }) => {
  return (
    <label className={styles.checkbox}>
      { labelPosition === "start" && label }
      <input className={styles.checkbox__input} type="checkbox" style={{ display: 'none' }} {...otherProps} />
      <div className={styles.checkbox__checkBox}>
        <div className={styles.checkbox__icon}><Icons iconName={'check'}/></div>
      </div>
      { labelPosition === "end" && label }
    </label>
  );
};

export default Checkbox;
