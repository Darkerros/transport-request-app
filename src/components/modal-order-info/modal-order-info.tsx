import { FC } from 'react';

import Modal from "../modal/modal.tsx";
import Button from "../../ui/button/button.tsx";
import InfoGroup from "../info-group/components/info-group/info-group.tsx";

import { InfoLine } from "../info-group/components/info-group-line/info-group-line.tsx";

import styles from './modal-order-info.module.scss'

export interface OrderInfo {
  details: InfoLine[];
  contacts: InfoLine[];
  transport: (InfoLine[])[];
}

interface ModalOrderInfoProps {
  orderInfo: OrderInfo;
  onClose: () => void;
  modalState: boolean;
}

const ModalOrderInfo: FC<ModalOrderInfoProps> = ({ orderInfo, modalState, onClose }) => {
  return (
    <Modal modalState={modalState} onClose={onClose} title={'Заявка отправлена'}>
      <div className={styles.modalOrderInfo__content}>
        <div className={styles.modalOrderInfo__orderInfoCOntainer}>
          <InfoGroup borderPosition="bottom" infoLines={orderInfo.details}/>
          { orderInfo.transport.map((transportInfo) =>
            (<InfoGroup borderPosition="none" infoLines={transportInfo}/> )
          )}
          <InfoGroup borderPosition="top" infoLines={orderInfo.contacts}/>
        </div>
        <p className={styles.modalOrderInfo__infoMessage}>Информация продублирована на электронную почту</p>
        <Button theme="primary" extraClassName={styles.modalOrderInfo__closeBtn} onClick={onClose}>ОК</Button>
      </div>
    </Modal>
  );
};

export default ModalOrderInfo;
