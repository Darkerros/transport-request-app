import styles from './input-group.module.scss';
import {FC, ReactNode} from "react";

interface InputGroupProps {
  children: ReactNode;
}

const InputGroup: FC<InputGroupProps> = ({ children }) => {
  return (
    <div className={styles.inputGroup}>
      { children }
    </div>
  );
};

export default InputGroup;
