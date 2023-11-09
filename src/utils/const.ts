export const MAIN_URL = "/";
export const AUTH_URL = "/signin";
export const CREATE_IDEA_URL = "/create-idea";

//список тегов в выпадающем списке
export const stateDropdown = {
  options: [
    { name: "Анализ", id: 0 },
    { name: "Дизайн", id: 1 },
    { name: "Верстка", id: 2 },
    { name: "Программирование", id: 3 },
    { name: "Тестирование", id: 4 },
    { name: "SEO и наполнение", id: 5 },
    { name: "Запуск проекта", id: 6 },
  ],
};

//список статусов для отображения в выпадающем списке
export const statusList = [
  { name: "По умолчанию", id: 0 },
  { name: "Анализ", id: 1 },
  { name: "Принято", id: 2 },
  { name: "Отклонено", id: 3 },
  { name: "Отложено", id: 4 },
];

//список возможных статусов
export enum VARIANTS_STATUS {
  ANALYSIS = "analysis",
  ACCEPTED = "accepted",
  CANCELED = "canceled",
  POSTPONED = "postponed",
}

//изначальные значения сообщения запросов
export const initialValuesMessage = {
  message: "",
  success: false,
};

//значения ролей пользователей
export enum ROLES {
  ROLE_USER = "Пользователь",
  ROLE_EXPERT = "Эксперт",
  ROLE_BOSS = "Руководитель", // :)
}

//значения типов фильтрации
export enum TYPE_FILTERS {
  TYPE_TAGS = "tags",
  TYPE_AUTHOR = "author",
  TYPE_STATUS = "status",
}

//типы модального окна (редактирование статуса или комментария)
export const TYPE_STATUS = "status";
export const TYPE_COMMENT = "comment";

//пути для запроса на бекенд
export const API_URL = "http://localhost:8080";
export const BASE_API_AUTH_URL = "/api/auth";
export const LOGIN_URL = "/signin";

export const MOCK_API_URL = "https://6540d3b745bedb25bfc2b3c5.mockapi.io";
export const MOCK_API_BASE = "/ideas";
