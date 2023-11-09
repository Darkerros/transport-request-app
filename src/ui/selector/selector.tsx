import { Listbox } from "@headlessui/react";
import { FC } from "react";

import styles from './selector.module.scss'

import DownChevron from "../icons/down-chevron.tsx";

interface Option {
  label: string;
  value: string;
}

interface SelectorProps {
  name?: string;
  value: Option;
  options: Option[];
  onChange: (value: Option) => void;
}

const Selector: FC<SelectorProps> = ({ value, onChange, options, name }) => {

  return (
    <div className={styles.selector}>
      <Listbox value={value} onChange={onChange} name={name}>
        <Listbox.Button className={styles.selector__selector}>
          {({ open }) => (
              <>
                {value.label}
                <span className={open ? `${styles.selector__icon} ${styles.selector__icon_dropdown_open}` : styles.selector__icon}>
                  <DownChevron/>
                </span>
              </>
            )
          }
        </Listbox.Button>
        <Listbox.Options className={styles.selector__dropdown}>
          {options.map(option => (
            <Listbox.Option
              className={styles.selector__option}
              key={option.value}
              value={option}
            >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
};

export default Selector;
