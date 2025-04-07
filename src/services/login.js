import { config, backApi } from './api';

export async function postLogin(email, password) {
  if (email === "som3@cin.ufpe.br") {
    return {
      access_token: "1231231231312312312",
      profile: "tatuador"
    }
  } else {
    return {
      access_token: "1231231231312312312",
      profile: "cliente"
    }
  }
  // return backApi.post('login/',{ email, password } ,config(), );
}

export async function getRefresh() {
    return backApi.get('login/refresh/',config({}, true));
  } 