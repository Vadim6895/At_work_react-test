import React from 'react';

import Icon from '../icon/icon';

import styles from './successModal.module.scss';
import { spriteNames } from '../../const';

interface Props {
  modalRef: React.RefObject<HTMLDivElement>;
  handler: (v: boolean) => void;
}

function SuccessModal({ modalRef, handler }: Props) {
  React.useEffect(() => {
    setTimeout(() => {
      handler(false);
    }, 4000);
  }, []);

  return (
    <div className={styles.overlay} ref={modalRef}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          type="button"
          aria-label="close"
          onClick={() => handler(false)}
        >
          <Icon width={24} height={24} name={spriteNames.close} />
        </button>
        <Icon width={60} height={60} name={spriteNames.success} />
        <p className={styles.text}>Изменения сохранены!</p>
      </div>
    </div>
  );
}

export default SuccessModal;
