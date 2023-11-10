import SendCargoFieldset from "../send-cargo-form-fieldset/send-cargo-fieldset.tsx";

import styles from './send-cargo-form-fieldset-transport.module.scss'

import {InputGroup} from "../../../../components/input-group";
import Radio from "../../../../ui/radio/radio.tsx";
import NumberInput from "../../../../ui/number-input/number-input.tsx";
import Selector, {Option} from "../../../../ui/selector/selector.tsx";
import {FC, memo} from "react";
import CloseIcon from "../../../../ui/icons/close-icon.tsx";
import {FieldsetValuesChangeWithIndex} from "../../types/fieldset-values-change.ts";

const cargoOptions = [
  { label: 'Грузовик 1', value: "Грузовик 1" },
  { label: 'Грузовик 2', value: "Грузовик 2" },
  { label: 'Грузовик 3', value: "Грузовик 3" },
]

export interface SendCargoFormFieldsetTransportValues {
  id: string;
  needLoader: boolean;
  needPassengers: boolean;
  loaderCount: number;
  paassengersCount: number;
  transport: Option;
}

export type SendCargoFieldsetTransportChangeValue = FieldsetValuesChangeWithIndex<SendCargoFormFieldsetTransportValues>

interface SendCargoFormFieldsetTransportProps extends SendCargoFormFieldsetTransportValues {
  index: number;
  isDeletable: boolean;
  onRemove: (index: number) => void;
  onChange: SendCargoFieldsetTransportChangeValue
}

const SendCargoFormFieldsetTransport: FC<SendCargoFormFieldsetTransportProps> = memo(({ needLoader, loaderCount, needPassengers, paassengersCount, onChange, index, isDeletable, onRemove, transport }) => {

  const handleLoaderCountChange = (value: number) => {
    onChange(index, 'loaderCount', value)
  }
  const handlePassengerCountChange = (value: number) => {
    onChange(index, 'paassengersCount', value)
  }
  const handleNeedPassengerChange = () => {
    onChange(index, 'needPassengers', !needPassengers)
  }
  const handleNeedLoaderChange = () => {
    onChange(index, 'needLoader', !needLoader)
  }
  const handleTransportChange = (option: Option) => {
    onChange(index, 'transport', option)
  }

  const handleRemoveTransport = () => onRemove(index)

  return (
    <SendCargoFieldset title={`Транспорт ${index + 1}`}>
      { isDeletable && <button type="button" className={styles.sendCargoFormFieldsetTransport__removeButton} onClick={handleRemoveTransport}><CloseIcon/></button>}
      <div className={styles.sendCargoFormFieldsetTransport}>
        <InputGroup>
          <Radio checked={needLoader} onClick={handleNeedLoaderChange} label="Грузчики"/>
          {needLoader && <NumberInput value={Number(loaderCount)} onChange={handleLoaderCountChange} label="Кол-во грузчиков" min={1} max={4}/>}
          <Radio checked={needPassengers} onClick={handleNeedPassengerChange} label="Пассажиры" />
          {needPassengers && <NumberInput value={Number(paassengersCount)} onChange={handlePassengerCountChange} label="Кол-во пассажиров" min={1} max={3}/>}
          </InputGroup>
        <Selector value={transport} options={cargoOptions} onChange={handleTransportChange}/>
      </div>
    </SendCargoFieldset>
  );
});

export default SendCargoFormFieldsetTransport;
