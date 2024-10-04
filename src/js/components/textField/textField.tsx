import React from 'react';

import Icon from '../icon/icon';

import styles from './textField.module.scss';
import { spriteNames } from '../../const';

interface Props {
  data: {
    name: string;
    title: string;
    type: string;
  };
  text: string;
}

function TextField({ data, text }: Props) {
  const [value, setValue] = React.useState(text);

  return (
    <div className={styles.textFieldBlock}>
      <label htmlFor={data.name} className={styles.label}>
        {data.title}
        <input
          id={data.name}
          type={data.type}
          className={styles.input}
          required
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
      </label>
      {Boolean(value.length) && (
        <span onClick={() => setValue('')}>
          <Icon name={spriteNames.close} className={styles.clearInput} />
        </span>
      )}
    </div>
  );
}

export default TextField;
