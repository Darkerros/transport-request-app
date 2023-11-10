import { useState } from "react";

import SendCargoForm,
{ FormState } from "./forms/send-cargo-form/components/send-cargo-form/send-cargo-form.tsx";
import ModalOrderInfo,
{ OrderInfo } from "./components/modal-order-info/modal-order-info.tsx";

import { InfoLine } from "./components/info-group/components/info-group-line/info-group-line.tsx";

import styles from './app.module.scss'

const transformSendCargoFormDataToDetails = (formData: FormState): InfoLine[] => {
  return [
    { label: 'Откуда забрать:', value: formData.from.adress, type: "default" },
    { label: 'Куда привезти:', value: formData.to.adress, type: "default" },
    { label: 'Дата отправки:', value: formData.from.date, type: "default" }
  ]
}
const transformSendCargoFormDataToContacts = ({ contacts } : FormState): InfoLine[] => {
  return [
    { label: 'Заказчик:', value: `${contacts.firstName} ${contacts.lastName}`, type: "default" },
    { label: 'Телефон:', value: contacts.phone, type: "default" },
    { label: 'E-mail:', value: contacts.mail, type: "default" }
  ]
}
const transformSendCargoFormDataToTransport = ({ transport } : FormState): (InfoLine[])[] => {

  return transport.map((transport, index) => {
    return [
      { label: `Транспорт ${index+1}:`, value: transport.transport.label, type: "accent" },
      { label: 'Кол-во грузчиков:', value: transport.needLoader ? transport.loaderCount : 'Нет', type: "default" },
      { label: 'Кол-во пассажиров:', value: transport.needPassengers ? transport.paassengersCount : 'Нет', type: "default" }
    ]
  })
}

function App() {
  const [modalState, setModalState] = useState(true)
  const [orderInfo, setOrderInfo] = useState<OrderInfo | null>(null)

  const handleFormSubmit = (formData: FormState) => {
    setOrderInfo({
      details: transformSendCargoFormDataToDetails(formData),
      contacts: transformSendCargoFormDataToContacts(formData),
      transport: transformSendCargoFormDataToTransport(formData),
    })

    setModalState(true)
  }

  return (
    <>
      <header className={styles.app__header}></header>
      <main className={styles.app__content}>
        <SendCargoForm onSubmit={handleFormSubmit}/>
        { orderInfo && <ModalOrderInfo orderInfo={orderInfo} modalState={modalState} onClose={() => setModalState(false)}/> }
      </main>
    </>
  )
}

export default App
