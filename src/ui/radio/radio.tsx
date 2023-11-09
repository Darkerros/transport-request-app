import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import styles from './radio.module.scss'

interface CheckBoxProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,'className' | 'value'> {}

const Radio: FC<CheckBoxProps> = ({ ...otherProps }) => {
  return (
    <label className={styles.radio}>
      <input className={styles.radio__input} type="radio" style={{ display: 'none' }} {...otherProps} />
      <div className={styles.radio__radio}/>
    </label>
  );
};

export default Radio;
