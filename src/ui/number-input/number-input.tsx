import { DetailedHTMLProps, FC, InputHTMLAttributes, useEffect, useId, useState } from "react";

import styles from './number-input.module.scss'

interface NumberInputProps extends Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,'name'> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  prefix?: string;
  onChange?: (value: number) => void;
}

const NumberInput: FC<NumberInputProps> = ({ onChange, value, prefix, step, min, max, name }) => {
  const inputId = useId()

  const [localInputValue, setLocalInputValue] = useState<number>(value ?? 0)

  useEffect(() => {
    /*
     * Необходим для двойного связывания значений
     */
    value && setLocalInputValue(value)
  }, [value]);

  const handleValueChange = (value: number) => {
    /*
    * Необходим чтобы не выполнять 2 ререндер компонента при 2 связывание
    */
    !onChange && setLocalInputValue(value)

    onChange?.(value)
  }
  const handleAddingButtonClick = () => {
    const maxValue = max ?? Infinity
    const currentStep = Number(step ?? 1)

    const calculateValue = Math.min(localInputValue + currentStep, maxValue)
    handleValueChange(calculateValue)
  }
  const handleDeacreaseButtonClick = () => {
    const minValue = min ?? 0
    const currentStep = Number(step ?? 1)

    const calculateValue = Math.max(localInputValue - currentStep, minValue)
    handleValueChange(calculateValue)
  }

  return (
    <div className={styles.numberInput}>
      <div className={styles.numberInput__inputContainer}>
        <button onClick={handleAddingButtonClick} className={styles.numberInput__button}>+</button>
        <span className={styles.numberInput__inputContent}>{localInputValue} {prefix}</span>
        <button onClick={handleDeacreaseButtonClick} className={styles.numberInput__button}>-</button>
        <input name={name} className={styles.numberInput__input} id={inputId} style={{ display: "none" }} readOnly value={localInputValue} type="number"/>
      </div>
    </div>

  );
};

export default NumberInput;
