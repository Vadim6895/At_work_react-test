import React from 'react';

import styles from './spinner.module.scss';

function Spinner({
  width = 75,
  height = 75,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <div className={styles.wrapper}>
      <span
        className={styles.loader}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  );
}

export default Spinner;
