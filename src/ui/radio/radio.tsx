import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import styles from './radio.module.scss'

interface CheckBoxProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,'className' | 'value'> {
  label?: string;
}

const Radio: FC<CheckBoxProps> = ({ label, ...otherProps }) => {
  return (
    <label className={styles.radio}>
      { label }
      <input className={styles.radio__input} type="radio" style={{ display: 'none' }} readOnly {...otherProps} />
      <div className={styles.radio__radio}/>
    </label>
  );
};

export default Radio;
