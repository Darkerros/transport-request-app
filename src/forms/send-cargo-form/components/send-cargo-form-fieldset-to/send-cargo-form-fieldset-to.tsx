import SendCargoFieldset from "../send-cargo-form-fieldset/send-cargo-fieldset.tsx";
import Input from "../../../../ui/input/input.tsx";
import {ChangeEvent, FC, memo} from "react";
import {FieldsetValuesChange} from "../../types/fieldset-values-change.ts";

export interface SendCargoFormFieldsetToValues {
  adress: string;
}

export type SendCargoFieldsetToChangeValue = FieldsetValuesChange<SendCargoFormFieldsetToValues>

interface SendCargoFormFieldsetToProps extends SendCargoFormFieldsetToValues {
  onChange: SendCargoFieldsetToChangeValue
}

const SendCargoFormFieldsetTo: FC<SendCargoFormFieldsetToProps> = memo(({ onChange, adress }) => {
  const handleAdressChange = ({ target: { value }}: ChangeEvent<HTMLInputElement>) => {
    onChange('adress', value)
  }

  return (
    <SendCargoFieldset title="Куда">
      <Input value={adress} onChange={handleAdressChange} label="Адрес" type={'text'} placeholder="ул. Маршала Блюхера, 72" required/>
    </SendCargoFieldset>
  );
});

export default SendCargoFormFieldsetTo;
