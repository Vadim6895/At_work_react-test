export const appRoute = {
  MAIN: '/',
  EDITPROFILELINK: '/editprofile/',
  EDITPROFILE: '/editprofile/:id',
};

export const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const spriteNames = {
  success: 'success',
  close: 'close',
  favorite: 'favorite',
  notification: 'notification',
  backArrow: 'backArrow',
  details: 'details',
};

export const profileDataMap = [
  {
    name: 'name',
    title: 'Имя',
    type: 'text',
  },
  {
    name: 'username',
    title: 'Никнейм',
    type: 'text',
  },
  {
    name: 'email',
    title: 'Почта',
    type: 'text',
  },
  {
    name: 'city',
    title: 'Город',
    type: 'text',
  },
  {
    name: 'phone',
    title: 'Телефон',
    type: 'text',
  },
  {
    name: 'company',
    title: 'Название компании',
    type: 'text',
  },
];

export const dropdownOptions = {
  common: [
    { name: 'Редактировать' },
    { name: 'Архивировать' },
    { name: 'Скрыть' },
  ],
  hidden: [{ name: 'Активировать' }],
};
