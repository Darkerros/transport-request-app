import {FC, memo, ReactNode} from "react";

import styles from './send-cargo-form-fieldset.module.scss'

interface SendCargoFieldsetProps {
  title: string;
  children: ReactNode;
}

const SendCargoFieldset: FC<SendCargoFieldsetProps> = memo(({ title, children }) => {
  return (
    <fieldset className={styles.sendCargoFormFieldset}>
      <p className={styles.sendCargoFormFieldset__title}>{ title }</p>
      { children }
    </fieldset>
  );
});

export default SendCargoFieldset;
