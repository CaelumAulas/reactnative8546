import { TokenManager } from "../infra/TokenManager";
const HttpClient = {
  post: (url, { body }) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" }
    });
  }
};
async function login({ login, senha }) {
  return HttpClient.post(
    "https://instalura-api.herokuapp.com/api/public/login",
    {
      body: { login, senha }
    }
  )
    .then(respostaDoServidor => {
      return respostaDoServidor.text();
    })
    .then(async token => {
      await TokenManager.setToken(token);
      console.warn(await TokenManager.getToken());
    });
}
export default { login };
