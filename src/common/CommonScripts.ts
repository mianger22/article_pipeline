export const enter_advanced_mode = (grant_access_to_user: () => void, navigate: any) => {
  // предоставляем токен
  localStorage.setItem("authToken", "authToken");
  // обновляем состояние на аутентифицированного пользователя
  grant_access_to_user();
  // впускаем в расширенный режим
  navigate("/");
}