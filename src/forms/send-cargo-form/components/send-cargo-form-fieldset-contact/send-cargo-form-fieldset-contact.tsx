
import SendCargoFieldset from "../send-cargo-form-fieldset/send-cargo-fieldset.tsx";
import Input from "../../../../ui/input/input.tsx";
import {ChangeEvent, FC, memo} from "react";
import {normalizePhoneNumber} from "../../../../utils/normalize-phone-number.ts";
import {FieldsetValuesChange} from "../../types/fieldset-values-change.ts";

export interface SendCargoFormFieldsetContactValues {
  firstName: string;
  lastName: string;
  phone: string;
  mail: string;
}

export type SendCargoFieldsetContactChangeValue = FieldsetValuesChange<SendCargoFormFieldsetContactValues>


interface SendCargoFormFieldsetContactValuesProps extends SendCargoFormFieldsetContactValues {
  onChange: SendCargoFieldsetContactChangeValue
}

const SendCargoFormFieldsetContact: FC<SendCargoFormFieldsetContactValuesProps> = memo(({ onChange, firstName, lastName, phone, mail }) => {

  const handleFirstNameChange = ({ target: { value }}: ChangeEvent<HTMLInputElement>) => {
    onChange('firstName', value)
  }
  const handleLastNameChange = ({ target: { value }}: ChangeEvent<HTMLInputElement>) => {
    onChange('lastName', value)
  }
  const handleMailChange = ({ target: { value }}: ChangeEvent<HTMLInputElement>) => {
    onChange('mail', value)
  }
  const handlePhoneChange = ({ target: { value }}: ChangeEvent<HTMLInputElement>) => {
    onChange('phone', normalizePhoneNumber(value))
  }


  return (
    <SendCargoFieldset title="Контакты">
      <Input value={firstName} onChange={handleFirstNameChange} label={'Имя'} type="text" placeholder="Иван" required/>
      <Input value={phone} onChange={handlePhoneChange} label={'Телефон'} type="tel" placeholder="+7 (___) ___ - __ - __" required/>
      <Input value={lastName} onChange={handleLastNameChange} label={'Фамилия'} type="text" placeholder="Иванов" required/>
      <Input value={mail} onChange={handleMailChange} label={'E-mail'} type="email" placeholder="ivan-ivanov@yandex.ru" required/>
    </SendCargoFieldset>
  );
});

export default SendCargoFormFieldsetContact;
