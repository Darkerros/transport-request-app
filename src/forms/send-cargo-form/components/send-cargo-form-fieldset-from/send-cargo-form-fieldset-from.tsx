import { FC, memo, ChangeEvent,  } from "react";

import Input from "../../../../ui/input/input.tsx";
import NumberInput from "../../../../ui/number-input/number-input.tsx";

import SendCargoFieldset from "../send-cargo-form-fieldset/send-cargo-fieldset.tsx";

import { FieldsetValuesChange } from "../../types/fieldset-values-change.ts";

export interface SendCargoFormFieldsetFromValues {
  adress: string;
  date: string;
  time: number;
}

export type SendCargoFieldsetFromChangeValue = FieldsetValuesChange<SendCargoFormFieldsetFromValues>

interface SendCargoFormFieldsetFromProps extends SendCargoFormFieldsetFromValues {
  onChange: SendCargoFieldsetFromChangeValue
}

const SendCargoFormFieldsetFrom: FC<SendCargoFormFieldsetFromProps> = memo(({ onChange, adress, date, time }) => {
  const handleAdressChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange('adress', evt.target.value)
  }
  const handleDateChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange('date', evt.target.value)
  }
  const handleTimeChange = (value: number) => {
    onChange('time', value)
  }

  return (
    <SendCargoFieldset title="Откуда">
      <Input value={adress} onChange={handleAdressChange} label="Адрес" type={'text'} placeholder="ул. Маршала Блюхера, 72" required/>
      <Input value={date} onChange={handleDateChange} label="Дата отправки" type={'text'} placeholder="28 декабря" required/>
      <NumberInput value={Number(time)} onChange={handleTimeChange} label="Длительность" prefix={"ч"} min={1} step={1} required/>
    </SendCargoFieldset>
  );
});

export default SendCargoFormFieldsetFrom;
