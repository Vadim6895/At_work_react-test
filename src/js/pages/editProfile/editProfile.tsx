import React from 'react';
import { Link, useParams } from 'react-router-dom';

import TextField from '../../components/textField/textField';
import SuccessModal from '../../components/successModal/successModal';
import Icon from '../../components/icon/icon';
import Spinner from '../../components/spinner/spinner';

import styles from './editProfile.module.scss';
import { appRoute, profileDataMap, spriteNames, STATUS } from '../../const';
import api from '../../api';
import useOnClickOutSide from '../../hooks/useOnClickOutside';
import userPhotoVertical from '../../../img/user-image-vertical.jpg';

function EditProfile() {
  const { id } = useParams();
  const [status, setStatus] = React.useState(STATUS.LOADING);
  const [data, setData] = React.useState();
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOnClickOutSide(false);

  React.useEffect(() => {
    const request = async () => {
      const response = await api.getUser(id);
      response.data.city = response.data.address.city;
      response.data.company = response.data.company.name;
      setData(response.data);
      setStatus(STATUS.SUCCESS);
    };
    request();
  }, [id]);

  console.log(data);

  const onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsComponentVisible(true);
  };

  return (
    <>
      {isComponentVisible && (
        <SuccessModal modalRef={ref} handler={setIsComponentVisible} />
      )}
      <div className={`container ${styles.backLink}`}>
        <Link to={appRoute.MAIN}>
          <Icon width={20} height={20} name={spriteNames.backArrow} />
          Назад
        </Link>
      </div>
      {status === STATUS.LOADING && <Spinner />}
      {data && (
        <section className={`container ${styles.editProfile}`}>
          <div className={styles.editProfile__user}>
            <img
              src={userPhotoVertical}
              className={styles.editProfile__userPhoto}
              alt="user-photo"
              width="280px"
              height="485px"
            />
            <button
              className={`${styles.editProfile__categoryBtn} ${styles.editProfile__categoryBtnActive}`}
              type="button"
            >
              Данные профиля
            </button>
            <button className={styles.editProfile__categoryBtn} type="button">
              Рабочее пространство
            </button>
            <button className={styles.editProfile__categoryBtn} type="button">
              Приватность
            </button>
            <button className={styles.editProfile__categoryBtn} type="button">
              Безопасность
            </button>
          </div>
          <div className={styles.editProfile__data}>
            <h2 className={styles.editProfile__title}>Данные профиля</h2>
            <form onSubmit={onSubmitForm}>
              {profileDataMap.map((item) => (
                <TextField key={item.name} data={item} text={data[item.name]} />
              ))}
              <button className={styles.editProfile__saveBtn} type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default EditProfile;
