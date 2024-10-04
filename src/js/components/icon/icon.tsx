import React from 'react';

import sprite from '../../../img/sprite.svg';

interface iconProps {
  width?: number;
  height?: number;
  name: string;
  className?: string;
}

function Icon({ width = 30, height = 30, name, className = '' }: iconProps) {
  return (
    <svg className={className} width={width} height={height} focusable="false">
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
}

export default Icon;
