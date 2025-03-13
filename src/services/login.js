import { config, backApi } from './api';

export async function postLogin(email, password) {
  return backApi.post('login/',{ email, password } ,config(), );
}

export async function getRefresh() {
    return backApi.get('login/refresh/',config({}, true));
  } 