import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '../icon/icon';

import styles from './dropDown.module.scss';
import { spriteNames } from '../../const';
import useOnClickOutSide from '../../hooks/useOnClickOutside';
import {
  addToArchive,
  addToHidden,
  addToResumes,
} from '../../redux/resumesSlice';
import { useAppDispatch } from '../../hooks/hooks';

function DropDown({
  options,
  id,
}: {
  options: { name: string }[];
  id: number;
}) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOnClickOutSide(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickItem = (name: string) => {
    if (name === 'Редактировать') {
      navigate(`/editprofile/${id}`);
    } else if (name === 'Архивировать') {
      dispatch(addToArchive(id));
    } else if (name === 'Скрыть') {
      dispatch(addToHidden(id));
    } else if (name === 'Активировать') {
      dispatch(addToResumes(id));
    }
  };

  return (
    <div className={styles.dropDown} ref={ref}>
      <button
        className={styles.dropDown__btn}
        type="button"
        aria-label="dots-btn"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <Icon width={24} height={24} name={spriteNames.details} />
      </button>
      {isComponentVisible && (
        <div className={styles.dropDown__list}>
          {options.map((item) => (
            <button
              className={styles.dropDown__item}
              type="button"
              key={item.name}
              onClick={() => onClickItem(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
