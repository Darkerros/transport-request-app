import { FC, FormEvent, useCallback, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Button from "../../../../ui/button/button.tsx";
import ButtonWithIcon from "../../../../ui/button-with-icon/button-with-icon.tsx";

import SendCargoFormFieldsetTo, {
  SendCargoFieldsetToChangeValue,
} from "../send-cargo-form-fieldset-to/send-cargo-form-fieldset-to.tsx";
import SendCargoFormFieldsetFrom,
{ SendCargoFieldsetFromChangeValue, SendCargoFormFieldsetFromValues }
  from "../send-cargo-form-fieldset-from/send-cargo-form-fieldset-from.tsx";
import SendCargoFormFieldsetTransport,
{ SendCargoFieldsetTransportChangeValue, SendCargoFormFieldsetTransportValues }
  from "../send-cargo-form-fieldset-transport/send-cargo-form-fieldset-transport.tsx";
import SendCargoFormFieldsetContact,
{ SendCargoFieldsetContactChangeValue }
  from "../send-cargo-form-fieldset-contact/send-cargo-form-fieldset-contact.tsx";

import styles from './send-cargo-form.module.scss'

export interface FormState {
  from: SendCargoFormFieldsetFromValues;
  to: {
    adress: string;
  };
  transport: SendCargoFormFieldsetTransportValues[];
  contacts: {
    firstName: string;
    lastName: string;
    phone: string;
    mail: string;
  }
}

const getInitialFormState = (): FormState => (
  {
    from: {
      adress: "",
      date: "",
      time: 1,
    },
    to: {
      adress: "",
    },
    transport: [
      createNewTransport()
    ],
    contacts: {
      firstName: "",
      lastName: "",
      phone: "",
      mail: ""
    }
  }
)
const createNewTransport = (): SendCargoFormFieldsetTransportValues => (
  {
    id: uuidv4(),
    needLoader: true,
    needPassengers: true,
    paassengersCount: 1,
    loaderCount: 1,
    transport: { label: 'Выберите машину', value: '1' }
  }
)

interface SendCargoFormProps {
  onSubmit: (formValues: FormState) => void
}

const SendCargoForm: FC<SendCargoFormProps> = ({onSubmit}) => {
  const [formState, setFormState] = useState<FormState>(getInitialFormState)

  const handleToFieldsetChange = useCallback<SendCargoFieldsetToChangeValue>((inputName, value) => {
    setFormState(prevFormState => {
      prevFormState.to[inputName] = value
      return {...prevFormState};
    })
  },[])
  const handleFromFieldsetChange = useCallback<SendCargoFieldsetFromChangeValue>((inputName, value) => {
    setFormState(prevFormState => {
      prevFormState.from[inputName] = value
      return {...prevFormState};
    })
  },[])
  const handleContactFieldsetChange = useCallback<SendCargoFieldsetContactChangeValue>((inputName, value) => {
    setFormState(prevFormState => {
      prevFormState.contacts[inputName] = value
      return {...prevFormState};
    })
  },[])
  const handleTransportFieldsetChange = useCallback<SendCargoFieldsetTransportChangeValue>((transportIndex, inputName, value) => {
    setFormState(prevFormState => {
      if (prevFormState.transport[transportIndex]) {
        const transportValues = prevFormState.transport[transportIndex]
        transportValues[inputName] = value
        prevFormState.transport[transportIndex] = {...transportValues}
      }
      return {...prevFormState};
    })
  },[])

  const handleRemoveTransport = (transportIndex: number) => {
    setFormState(prevState => {
      prevState.transport.splice(transportIndex,1)
      return {...prevState}
    })
  }
  const handleAddNewTransport = useCallback<VoidFunction>(() => {
    formState.transport = [
      ...formState.transport,
      createNewTransport()
    ]
    setFormState({...formState})
  },[formState])

  const handleResetForm = () => {
    setFormState({ ...getInitialFormState() })
  }
  const handleSubmitForm = (evt: FormEvent) => {
    evt.preventDefault()
    onSubmit(formState)
  }

  return (
    <form className={styles.sendCargoForm} onSubmit={handleSubmitForm} onReset={handleResetForm}>
      <p className={styles.sendCargoForm__title}>Заявка на отправку груза</p>
      <div className={styles.sendCargoForm__content}>
        <div className={styles.sendCargoForm__groupedFieldset}>
          <SendCargoFormFieldsetFrom {...formState.from} onChange={handleFromFieldsetChange}/>
          <SendCargoFormFieldsetTo {...formState.to} onChange={handleToFieldsetChange}/>
        </div>
        { formState.transport.map((values, index) =>
          (<SendCargoFormFieldsetTransport key={values.id} index={index} isDeletable={index !== 0} onRemove={handleRemoveTransport} onChange={handleTransportFieldsetChange} {...values}/>)
        )}
        <ButtonWithIcon extraClassName={styles.sendCargoForm__addTransportBtn} theme="outlined" iconName="plus" type="button" onMouseDown={handleAddNewTransport}>Добавить еще транспорт</ButtonWithIcon>
        <SendCargoFormFieldsetContact {...formState.contacts} onChange={handleContactFieldsetChange}/>
        <div className={styles.sendCargoForm__formButtonContainer}>
          <Button theme="primary" type="submit">Отправить</Button>
          <Button theme="outlined" type="reset">Сбросить</Button>
        </div>
      </div>
    </form>
  );
};

export default SendCargoForm;
