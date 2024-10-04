import React from 'react';
import { Link } from 'react-router-dom';

import DropDown from '../../components/dropDown/dropDown';
import Spinner from '../../components/spinner/spinner';
import { fetchUsers } from '../../redux/resumesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import styles from './main.module.scss';
import { appRoute, dropdownOptions, STATUS } from '../../const';
import { User } from '../../types';
import userPhoto from '../../../img/user-image.jpg';

function Main() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.resumes.resumes);
  const archiveUsers = useAppSelector((state) => state.resumes.archiveResumes);
  const status = useAppSelector((state) => state.resumes.status);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <section className={`container ${styles.responseResumes}`}>
        <h2 className={styles.responseResumes__title}>Активные</h2>
        {status === STATUS.LOADING && <Spinner />}
        {status === STATUS.SUCCESS && (
          <div className={styles.responseResumes__wrapper}>
            {users.map((item: User) => (
              <div className={styles.responseResumes__card} key={item.id}>
                <Link
                  to={`${appRoute.EDITPROFILELINK}${item.id}`}
                  className={styles.responseResumes__link}
                />
                <img
                  className={styles.responseResumes__photo}
                  src={userPhoto}
                  alt="resume-photo"
                  width={112}
                  height={120}
                />
                <div className={styles.responseResumes__info}>
                  <p className={styles.responseResumes__name}>{item.name}</p>
                  <DropDown options={dropdownOptions.common} id={item.id} />
                  <p className={styles.responseResumes__company}>
                    {item.company.name}
                  </p>
                  <p className={styles.responseResumes__city}>
                    {item.address.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <section
        className={`container ${styles.responseResumes} ${styles.responseResumesArchives}`}
      >
        <h2 className={styles.responseResumes__title}>Архив</h2>
        <div className={styles.responseResumes__wrapper}>
          {archiveUsers.map((item: User) => (
            <div className={styles.responseResumes__card} key={item.id}>
              <Link
                to={`${appRoute.EDITPROFILELINK}${item.id}`}
                className={styles.responseResumes__link}
              />
              <img
                className={styles.responseResumes__photo}
                src={userPhoto}
                alt="resume-photo"
                width={112}
                height={120}
              />
              <div className={styles.responseResumes__info}>
                <p className={styles.responseResumes__name}>{item.name}</p>
                <DropDown options={dropdownOptions.hidden} id={item.id} />
                <p className={styles.responseResumes__company}>
                  {item.company.name}
                </p>
                <p className={styles.responseResumes__city}>
                  {item.address.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Main;
