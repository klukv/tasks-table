export const MAIN_URL = "/";
export const AUTH_URL = "/signin";
export const CREATE_IDEA_URL = "/create-idea";

// список тегов в выпадающем списке
export const stateDropdown = {
  options: [
    { name: "Анализ", id: 0 },
    { name: "Дизайн", id: 1 },
    { name: "Приключения", id: 2 },
    { name: "Верстка", id: 3 },
    { name: "Программирование", id: 4 },
    { name: "Тестирование", id: 5 },
    { name: "SEO и наполнение", id: 6 },
    { name: "Запуск проекта", id: 7 },
  ],
};

//изначальные значения сообщения запросов
export const initialValuesMessage = {
  message: "",
  success: false
}

//пути для запроса на бекенд
export const API_URL = "http://localhost:8080";
export const BASE_API_AUTH_URL = "/api/auth"
export const LOGIN_URL = "/signin";
export const POST_IDEA_URL = "/addNewIdea";
export const GET_ALL_IDEAS = "/getAllIdea";
